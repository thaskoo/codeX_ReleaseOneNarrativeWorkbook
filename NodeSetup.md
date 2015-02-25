#Setup Node JS

##Installing Node

On Ubuntu you can install Node JS from the command line using ```apt-get```.

You should already have it installed on your laptop if you completed the codeX February 2015 intro.

The installation instructions are as follows:

* ```sudo apt-get install node-legacy``` 
* ```sudo apt-get install npm```

Open a terminal window:

* type ```nodejs``` and press enter - you should now be in a Node JS console - you should get no errors. (on a non Ubuntu machine the command is called ```node```). Use ctrl-C to get out of it
* type ```npm``` you should see some information about npm on the console

Now you are ready to use Javascript from the command line. 

##Node JS Javascript from the command line

Let's run a simple javascript script from the command line:

	* Create a file called 'hello.js' 
	* copy this text into the file: 'console.log('hello world!');'
	* Save the file
	* now run it using 'nodejs hello.js'
	* what happens?

So what just happend? You liberated your Javascript knowledge from the command line. 

Now proof this to yourself and write some Javascript that use:
* an ```if``` statement
* a ```for``` loop
* write a simple function
* what else you need to get comfortable

If you can create about 5 different javascript file (.js) files to get more comfortable with Javascript on the command line.

## Node intro

Let's enrol to http://nodeschool.io/ now by installing on the ```learnyounode``` course. 
***Only complete the first 6 lessons, do the rest later.** 

The first 6 lessons will serve you well for now.

Install it in the command line:

```npm install -g learnyounode```

## Asyncronous

One thing to note is that Node JS is asyncronous by nature and a concept using callbacks is used heavily.

It does take some time to get use to, but you will get there.

Soon callbacks like this:

```function(err, value){
}```

Will become 2nd nature or a big annoyance to you ;-)
	
##Introduce the Node API

Over and above the normal capabilities of Javascript Node JS can do loads more things like:

* reading and creating files on disk
* making HTTP calls
* host a HTTP/TCP server

If you are curious about what is possible have a look here: http://nodejs.org/api/

But don't get bogged down in the details to much at this stage.

##modules

To reuse Javascript code in the Web browser is easy one just need to reference the code in the right order using using a script tag.

In Node things are different and it use the CommonJS module pattern, which handle dependencies between your different pieces of Javascript code.

You can create a module that is like an Object literal like this:

```
export.sayHello = function(){

}
export.sayBye = function(){
}
```

If the above is in a file called greetings.js

You can use it from greetings_test.js in the same folder like this.

```
var greeter = require('./greetings'); 
	
greeter.sayHello();
```

You can create a module that is more like a constructor function like this:

```
module.export = function(name){
	this.name = "Andre";
	
	this.sayHello = function(){
		console.log('Hi, I am ' + name);
	}
	
	this.sayBye = function(){
		console.log('Bye!');
	}
	
}
```
If the above is in a file called greeter2.js.

You can use it from greetings_test2.js in the same folder, like this:

```

var Greeter = require('./greeter2'); 
	
var greeter = new Greeter("Andy");

greeter.sayHello();

```

When you create your own modules you always need to use a relative path starting with a ```./``` - globally installed modules don't need that.

> Some details can be found here:
>  http://nodejs.org/api/modules.html
  
One of the major things of Node is that there are loads of third party libraries out there that you can reuse. These libraries allows you to access databases, create API's or even create a Robot.

The central library of libraries is called, http://npmjs.org, you use the ```npm``` command to install libraries from there.
  
A few usefull npm commands to look into are:

  * ```npm install <library name>```
  * ```npm install -g <library name>```
  * ```npm init package.json```
  * ```install --save```

