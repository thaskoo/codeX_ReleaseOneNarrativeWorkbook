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

The web form above will send a ```POST``` request to the ```add_product``` action. The form will contain the value that was entered in the browser in the ```product_name``` field of the form.

## Serverside variables

## Routes

## Database

