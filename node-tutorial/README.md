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


##Task 4

Now let's use your newly found knowledge about modules. 

You will now create a new module and also use some of NodeJS's built in modules. The module should be able to return a list of all the rows in all the files in a specified folder. Your module should be able to do that Syncronously and Asyncronously.

So you module should:
* find all the files in a folder
* then read each file in the folder
* find each row in the folder
* and then append each row to a list
* and then ultimately return the list containing all the lines in the files.
 
> For example: if there are 3 files in the folder you are accessing and each and each file have 3 rows your modules function should return a list containing 9 rows.

The built in module you should use is called 'fs', you can read more about it here: http://nodejs.org/api/fs.html

You would use one of these 2 function calls on the module:
* http://nodejs.org/api/fs.html#fs_fs_readdir_path_callback
* http://nodejs.org/api/fs.html#fs_fs_readdirsync_path


The module should be in a file called:
* read-folder.js
* expose 2 methods with parameters:
  * linesInFiles(folderName)
  * linesInFilesAsync(folderName, callback) - the callback should return 2 parameters ```err``` & ```files```
    * calling it should look like this: 
      ```javascript
        linesInFilesAsync('/dir/name', function(err, files){
        });  
      ```


