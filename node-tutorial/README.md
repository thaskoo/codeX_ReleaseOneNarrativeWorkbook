#Node tutorial

A quick introduction to Node JS.

This will introduce you to using Javascript on the command line using Node JS.
 
##Testing what've done

To test that you have done the right thing you need to have the ```mocha``` module installed.

Install it typing this command into a terminal window:

```sudo npm install -g mocha```

Once the install is done, type ```mocha``` in the same window - you should get a bunch of failing tests.

As you work your way through the tasks run the ```mocha``` command after each test to be sure that your implementation is successful. As you work your way through the Tasks more and more of the tests should start to pass.

##Task 1

Create file called hello and write 'hello world!' to the console.

You can run the program from the command line using: ```nodejs hello.js```

Run ```mocha``` from the command line. At least one test should pass.

##Task 2

Change the program that is in the filter-numbers.js file to only print the even numbers in the list to the console.

Run the program from the command line using: ```nodejs filter-numbers.js```

Run ```mocha``` from the command line. At least two tests should pass.

##Task 3

Follow the instructions inside the users.js file

Run the program from the command line using: ```nodejs users.js```

Run ```mocha``` from the command line. At least three tests should pass.

## Modules

So far all the NodeJS programs your wrote were little islands: the only way they communicated with the end user was through the console. And the only way we were able to test them was using some trickery tracking which was logged to the console.

Sharing Javascript files in the browser was easy using the ```script``` tag, but it is also tricky as these script references needs to be in the right order etc.

NodeJS has a more sophisticated module system that is based on CommonJS. Not only can you create your own modules, but NodeJS also has it own built in modules that you can use to access files on disk for example.

To create a module that exports two methods called ```high``` and ```low``` you need do the following:

```javascript

exports.high = function(){
  console.log('high');
};

exports.low = function(){
  console.log('low');
}
```

If you save the above code in a file called ```my_module.js```, then create new file let's say called ```test_modules.js``` you can use it was a module like this:

```javascript

var low_or_high = require('./my_module');

low_or_high.low();
low_or_high.high();

```

If you run ```test_modules.js``` using ```nodejs test_modules.js``` then you should see:

```
low
high
````

printed to the screen.

##Useful functions built into Javascript

### String

A string object in Javascript has a lot of methods that allows you can use.

To see what those are:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

One I would like to highlight is:

```split``` - the split function. This takes a string and splits it into different parts using a delimeter.

Say for example you have a sentence and I would like to find all the words in the sentence.

```javascript
var sentence = "One day I went to the aquarium";

//split the sentence into a list of words
var words = sentence.split(' ');
console.log(words);

//will print to the console
//["One", "day", "I", "went", "to", "the", "aquarium"]

```

One useful trick is that you can split on newline characters by using the ```\n``` character. You can use this approach to split a file that contains newline characters into a list of strings. One string for each line.

#### A useful recipe to remember:
* read a file
* split the file using new lines to get each line
* split each line using a delimeter (either a space ' ' or comma ',' for example) to get each field

### Arrays

So what methods does an Array have?

Ok, go and google this quickly : ```array javascript functions mdn```

> **Top tip** Whenever you search for specific javascript syntax, add the term 'mdn' to your search criteria. 
This way you are bound to get a Javascript reference from The Mozilla Developer Network - which is an authority on Javascript syntax.

Using the search above your first hit should be:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

We will focus on three functions of the Array object:
* forEach
* filter
* map

#### forEach
```forEach``` is any easy way to loop through all the entries in a list 

To display all the words in a list you can do this:

```
var words = ["One", "day", "I", "went", "to", "the", "aquarium"];

words.forEach(function(word){
  console.log(word)
});

// this will write to the console

/**
"One"
"day"
"I"
"went"
"to"
"the"
"aquarium"
*/
```

#### filter
```filter``` is a handy way to find data in an Array

To find all the words in a sentence shorter or equal to 3 do this:

```
var words = ["One", "day", "I", "went", "to", "the", "aquarium"];

var shortWords = words.filter(function(word){
  return word.length <=3;
});

console.log(shortWords);

//this will print
//["One", "day", "I", "to", "the"]

```
#### map
```map``` is an easy way to convert/change all the values in an Array:

To convert all the entries in a list to uppercase:

```
var words = ["One", "day", "I", "went", "to", "the", "aquarium"];

var uppercaseWords = words.map(function(word){
  return word.toUpperCase();
});

console.log(uppercaseWords);

//this will print
//["ONE", "DAY", "I", "WENT", "TO", "THE", "AQUARIUM"]
```

##Task 4: Create a new module

Now let's use your newly found knowledge about modules. 

You will now create a new module and also use some of NodeJS's built in modules. The module should be able to return a list of all the rows in all the files in a specified folder. Your module should be able to do that Syncronously and Asyncronously.

So your module should:
* find all the files in a folder
* then read each file in the folder
* find each row in each file
* then append each row to a list 
* return the list that contains all the lines off all the files.
 
> For example: 
> * if there are 3 files in the folder 
> * and each file has 3 rows 
> 
> your modules should return a list containing 9 rows.

The built in module you should use is called 'fs'

You can read more about it here: http://nodejs.org/api/fs.html

**You would use one of these 2 function calls on the module:**

To get files in the folder:
* http://nodejs.org/api/fs.html#fs_fs_readdirsync_path

To get the data in the files:
* http://nodejs.org/api/fs.html#fs_fs_readfilesync_filename_options

The module should be in a file called:
* read-folder.js
Expose 2 methods with parameters:
  * linesInFiles(folderName)
  * linesInFilesAsync(folderName, callback) - the callback should return 2 parameters ```err``` & ```files``` calling it should look like this: 
      
      ```javascript
        linesInFilesAsync('/dir/name', function(err, files){
        });  
      ```
* you can use the folder to test ```./files/week1``` 

## Task 5

Create a module that can read a product file and do two things: 
* return a list of all the products in the file
* return the total number of items sold for each product

The module should:
* be called ```products.js```
* have two ***Asyncronous*** methods:
  * ```productNames``` - returns a list of products
  * ```productSold``` - returns a list how many of each product is sold

