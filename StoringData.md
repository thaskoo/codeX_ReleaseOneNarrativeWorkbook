#Capture and storing data

So far you have spend alot of time and effort slicing and dicing data. You started of using a CSV file as a datasource which you then migrated into a database. Once your data were in the database it became much easier to query that data, but how do we get data into your database. That is what we will explore next. We will go one step further, we will start capturing data from a web browser and store it in the database.

To capture data on a web page one needs an html form with fields to allow data to be entered into the web page. Once the data is entered on the web page one need to store the data some where. There are various different ways of doing that, but we will be focussing on web forms.

## Web forms

The ```<form>``` element wraps the various different types of web form elements

The basic web form elements used for capturing data are:
* input - various differen types including:
  * text
  * button
  * radio
  * checkbox
* text area
* button
* submit
* select
* hidden

A web form needs an action and type attributes and submit button.

For example:

```html
  <form action="/add_product" type="POST">
    Product name: <input type="text" name="product_name">
    <input type="submit">
  </form>
```

The web form above will send a ```POST``` request to the ```add_product``` route. The form will contain the value that was entered in the browser in the ```product_name``` field of the form.

You can use CSS to style your html forms, they can be tricky to style.

## Serverside variables

When one create routes in Express the route callbacks always takes two parameters, req and res. Those two variables are Request (req) and Response (res) respectively:

Here is a quick example:

```javascript
app.post('/add_product', function(req, res){
 res.render('product', {product :  data});
});
```

In this example the response object is used to render a template to the client, but the form data is not captured yet.

Now look at this example:

```javascript
app.post('/add_product', function(req, res){
 var formData = req.body;
 console.log(formData.product_name);
 res.render('product', {product_name :  formData.product_name});
});
```

It reads the form data, prints it to the console and send it to the template to be rendered back to the client.
The example is only reading one field, but one can read all the fields that are being sent from the form to the route.

**Note:*** that for form variables to work in Express you need to configure some middleware that will process the form parameters. Use the body-parser middleware : https://www.npmjs.com/package/body-parser

Here's and example: https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters#post-parameters

## Routes

Forms are one way to send data to the server, but you can also use routes to send some data to the server.

For example:

```
app.get('/products/:id', function(req, res){
  console.log(req.params.id);
  res.send("you sent me : " + req.params.id);
});
```

This translates to something like this: ```http://localhost:3000/products/77``` and it will return ```you sent me : 77``` to the browser.

This is especially usefull for creating for creating edit or view pages in your web application where you can see or edit the details of an data entity.

Here's an example: https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters#specific-routing-for-specific-parameters

## Database

