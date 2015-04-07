#Create online reports

## Background

Now let's display all the data you mined from the Nelissa's CSV File online. For that you will need a web server, a template engine and data. You already have the data, as a web server we will be using Express JS and as a template engine Handlebars JS. You will install all these depencies using ```npm```

There are loads of alternatives to all the above in the Node JS eco-system, but knowing how the selected toolset work will give you a good baseline to explore alternatives from. 

You should focus on:
* Express JS - http://expressjs.com/
* Handlebars JS - http://handlebarsjs.com/
* Handlebars JS & Express integration layer - https://www.npmjs.com/package/express-handlebars

## Concepts

Some concepts you might bump into while doing this work.

* JSON
  * Javascript Object Notation
  * Data Interchange - alternative to XML
  * Use require statement to import data
* Templates
  * HTML & CSS
  * layout
  * http://handlebarsjs.com/
* Web Server
  * Express JS
    * Create routes
    * Combine data and template
    * Renders dynamic content using a view engine

## Get going with Express JS

Here are some basic instructions on how to get going with Express JS.

### Install Express JS : http://expressjs.com/starter/installing.html
  * create a new folder in your projects folder called ```spaza-app```
  * change into this folder using ```cd spaza-app```
  * createa a ```package.json``` file using ```npm init```
  * install Express JS and store it in the dependencies list in the package.json ```npm install --save express```
  
### Getting a basic Express instance to run
  
Create a file called ```server.js``` and copy the text below into it: 

   ```javascript
   var express = require('express');
   var app = express();
   
   // create a route
   app.get('/', function (req, res) {
     res.send('Hello World!');
   });
   
   //start the server
   var server = app.listen(3000, function () {
   
     var host = server.address().address;
     var port = server.address().port;
   
     console.log('Example app listening at http://%s:%s', host, port);
   
   });
   ```
   Now try this:
   
   * Start the server by typing ```node server.js``` and pressing enter in the console.
   * In the web browser navigates to http://localhost:3000/
   * Stop the server in the console by pressing Ctrl-C in the console a few times
   * Now navigates to http://localhost:3000/ again. What happens
   * Start the server and try the above again.
   * Try to navigate to ```http://localhost:3000/hello``` - what happens? How can we fix that?
   * Try this:
    * Stop the web server
    * add a new route for '/hello' that renders 'Hello codeX!' to the screen
    * Start the server
    * Now try to navigate to ```http://localhost:3000/hello``` What happened?

## Rendering static files

http://expressjs.com/starter/static-files.html

You should have a basic Express JS setup inplace which can be used as a baseline to get some basic reports up and running.

## Easy server restarts

One thing you will find is that you will need to restart Express JS everytine you changed a source file to get around that  install ```nodemon``` This will restart Express JS whenever a source file changes. 

Its here : https://www.npmjs.com/package/nodemon - install it using npm

Use it like this:

```nodemon server.js```


##Templating

We will be using ```handlebars``` as the template engine, it combines data with templates to render information.

A typical handlebars template look likes this

```
<div class="entry">
  {{#if author}}
    <h1>{{firstName}} {{lastName}}</h1>
  {{/if}}
</div>
```

Handlebars JS is built on top of Moustache templating engine and extends it. Moustache templating aims to be logicless templates, but that aim make it hard to use at times.

> See some background information on the difference between Handlebars and Moustache : http://stackoverflow.com/questions/10555820/what-are-the-differences-between-mustache-js-and-handlebars-js

Handlebars comes with a set of built in helpers that makes it easy for one to process data and convert it into a layout. It support things like if statements and loops.

http://handlebarsjs.com/builtin_helpers.html

##Usefull links:

* Loading JSON files using require - https://nodejs.org/api/modules.html#modules_file_modules
* http://expressjs.com/
* http://handlebarsjs.com/
* https://www.npmjs.com/package/express-handlebars
* https://mustache.github.io/
