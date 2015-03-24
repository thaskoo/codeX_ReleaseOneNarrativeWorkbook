#Create online reports

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

I takes you through the steps of:
* installing
* getting a basic instance to run
* setting up basic routes
* rendering static files

Once done with these steps:

http://expressjs.com/starter/installing.html

http://expressjs.com/starter/hello-world.html

http://expressjs.com/starter/basic-routing.html

http://expressjs.com/starter/static-files.html

You should have a basic Express JS setup inplace which can be used as a baseline to get some basic reports up and running.

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

Handlebars comes with a set of built in helpers:

http://handlebarsjs.com/builtin_helpers.html

Handlebars JS is built on top of Moustache templating engine and extends it. Moustache templating aims to be logicless templates, but that aim make it hard to use at times.

See some background information on the difference between Handlebars and Moustache : http://stackoverflow.com/questions/10555820/what-are-the-differences-between-mustache-js-and-handlebars-js



##Usefull links:

Loading JSON files using require - https://nodejs.org/api/modules.html#modules_file_modules

http://expressjs.com/

http://handlebarsjs.com/

https://www.npmjs.com/package/express-handlebars
