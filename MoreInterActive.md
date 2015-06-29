#Create a more interactive experience

To create a more interactive web application experience for users you will need to take control of your page rendering and minimizing page refreshes. Instead of refreshing a whole page, refreshing only certain sections of the page will result in a smoother user experinece. 

To refresh only certain sections of the page one use AJAX, which is based upon the ```XmlHttpRequest``` object. This allows one to send HTTP requests to the backend asyncronously, receving responses asyncronously. 

One can:
* receive web page sections that one can use to replace target sections in the  HTML.
* manipulate the DOM on the client side

Usefull tech:

* https://github.com/CodeSeven/toastr
* XmlHttpRequest
* JQuery AJAX
