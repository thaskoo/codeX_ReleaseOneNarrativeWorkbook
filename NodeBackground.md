#Node Background

## Asyncronous

What does Asyncronous mean you asks?

```
Node does I/O in a way that is asynchronous which lets it handle lots of different things 
simultaneously. For example, if you go down to a fast food joint and order a cheeseburger 
they will immediately take your order and then make you wait around until the cheeseburger 
is ready. In the meantime they can take other orders and start cooking cheeseburgers 
for other people. Imagine if you had to wait at the register for your cheeseburger, 
blocking all other people in line from ordering while they cooked your burger! 
This is called blocking I/O because all I/O (cooking cheeseburgers) happens one at a time. 
Node, on the other hand, is non-blocking, which means it can cook many cheeseburgers at once.
```

https://github.com/maxogden/art-of-node#callbacks

Note is that Node JS is asyncronous by nature and the concept using callbacks are used heavily. It does take some time to get use to, but you will get there.

Soon you will be introduced to callbacks like this:

```javascript

var callback = function(err, value){
	console.log("here you go after 2 seconds!");	
}

var doSomething = function(param, cb){
	//lets simulate a task that takes 2 seconds to complete
	setTimeout(function(){
		cb();
		console.log('now we are done');
	}, 2000);
}

doSomething("some param", callback);
console.log("done!");

```

##Node API

Over and above the normal capabilities of Javascript, Node JS can do loads more things like:

* reading and creating files on disk
* making HTTP calls
* host a HTTP/TCP server

If you are curious about what is possible have a look here: http://nodejs.org/api/

But don't get bogged down in the details to much at this stage.

##modules

To reuse Javascript code in the Web browser is easy one just need to reference the code in the right order using using a ```script``` tag.

In Node things are different and it use the CommonJS module pattern, which handle dependencies between your different pieces of Javascript code.

You can create a module that is like an Object literal like this:

```
exports.sayHello = function(){

}
exports.sayBye = function(){
}
```

If the above is in a file called greetings.js

You can use it from greetings_test.js in the same folder like this.

```
var greeter = require('./greetings'); 
	
greeter.sayHello();
```

You can create a module that is more like a constructor function like this:

```javascript

module.exports = function(name){
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
