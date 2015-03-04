#Node tutorial

A quick introduction no Node JS.

This will introduce you to using Javascript on the command line using.

##Task 1

Create file called hello and write 'hello world!' to the console.

Run the program from the command line using: ```nodejs hello.js```


##Task 2

Change the program that is in the filter-numbers.js file to only print the even numbers in the list to the console

##Task 3

Follow the instructions inside the users.js file

## Modules

So far all the NodeJS programs your wrote was little islands, the only way they communicated to the end user was through the console. And the only way we were able to test them was using some trickery tracking what has been logged to the console.

Sharing Javascript files in the browser was easy using the ```script```` tag, but it is also tricky as these script references needs to be in the right order etc.

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

##Usefull functions built into Javascript

### String

As string object in Javascript has a lot of methods that allows you can use.

To see what those are:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

One I would like to highlight is:

```split``` - the split function takes a string and split it into different parts using a delimeter

Say for example you have a sentence and I would like to find all the words in the sentence.

```javascript
var sentence = "One day I went to the aquarium";

//split the sentence into a list of words
var words = sentence.split(' ');
console.log(words);

//will print to the console
//["One", "day", "I", "went", "to", "the", "aquarium"]

```

One usefull trick is that you can split on newline characters by using the ```\n``` character. You can use this approach to split a file that contains newline characters into a list of strings. One string for each line.

A useful recipe to remember:
* read a file
* split the file on using new lines to get each line
* split each line using a delimeter (either a space ' ' or ',' for example) to get each field

### Array



##Task 4

Now let's use your newly found knowledge about modules. 

You will now create a new module and also use some of NodeJS's built in modules. The module should be able to return a list of all the rows in all the files in a specified folder. Your module should be able to do that Syncronously and Asyncronously.

So you module should:
* find all the files in a folder
* then read each file in the folder
* find each row in the folder
* and then append each row to a list
* and then ultimately return the list containing all the lines in the files.
 
> For example: 
> * if there are 3 files in the folder 
> * and each file have 3 rows 
> your modules should return a list containing 9 rows.

The built in module you should use is called 'fs', you can read more about it here: http://nodejs.org/api/fs.html

**You would use one of these 2 function calls on the module**

To get files in the folder:
* http://nodejs.org/api/fs.html#fs_fs_readdirsync_path

To get the data in the files:
* http://nodejs.org/api/fs.html#fs_fs_readfilesync_filename_options

The module should be in a file called:
* read-folder.js
* expose 2 methods with parameters:
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

