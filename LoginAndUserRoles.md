#User role support

##Authentication & Authorization

Web applications needs a way of knowing which users are logged into the system and what these users can and can't do. Authentication is the process of getting to know a user, this normally involves a username and a password. Authorization is the process of checking what a user can do once they are Authenticated in the system. Functionality in a system is normally breaked down into roles, with roles being assigned to users. 

The process goes something like this, a user is identified as they log into the system. Once a user is identified it's roles are located, the system use these roles to determine what a user can and can't do. 

##The details

###HTTP Sessions

As HTTP is a stateless protocol by design, to store user session information one needs a way of managing state when using it, HTTP Sessions are used for that. A HTTP session use a combination of Cookies for client side storage and Server Side storage. 

For security reasons one would like to store the minimum amount of data on the client. On the server side the session data can be stored either straight on disk or in a database of sorts. The Cookie normally contains an encrypted token that associates the Http session with the Session Data stored on the Server. An expiry time can be set on a Http Session to allow for a users login to expire if they are not actively using the application.

To add HTTP Session support to you Express Server you need to install the ```express-session``` package

https://www.npmjs.com/package/express-session

###Middleware

Express JS give us access to a concept called middleware where by we can extend the way that it handles HTTP requests from end users.

To create a new middleware component do this in your express configuration:

```javascript
app.use(function(req, res, next){
  console.log('in my middleware!');
  //proceed to the next middleware component
  next();
});
```

The above middleware component will not do much it will only log a message to the console.

But we can use it to implement a simple Authentication check if we use it in combination with the ```express-session``` module. 

We want the middleware to do the following:
* Check if the user is Authenticated
* If the user not Authenticated redirect the user to the login route

The login routes should:
* Capture the users credentials
* Check the user credentials
* Store the appropriate entries in the HTTP Session.


##Storing users and roles

Once your server supports HTTP Sessions we can start thinking of how we can implement Authentication.

###Start simple



###Store in database

##Resources
