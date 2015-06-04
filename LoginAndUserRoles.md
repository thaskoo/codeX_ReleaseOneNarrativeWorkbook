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

### Route specific middleware

The example above added a global middleware instance, that will fire for all HTTP requests. Another way is to add route specific middleware.

```javascript
var checkUser = function(req, res, next){
  if (req.session.user){
    return next();
  }
  // the user is not logged in redirect him to the login page
  res.redirect('login');
};

app.get('/users', checkUser, function(req, res){
  var userData = userService.getUserData();
  res.render('users', userData)
});
```

To support login for the ```/users``` route above you would need to put a users object in the session. For logout you will need to remove the user object from the session using the ```delete``` statement.

##Implementing your own Authentication

Once your server supports HTTP Sessions and you understand the basics of Express middleware you can start thinking of how to implement some user Authentication & Authorization.

So let's start simple create a simple Authentication system that allows:
* A user to login
* Redirect a user back to the login screen with a message if their login attempt failed
* A user to login using the username 'UserOne' with a password of 'thereWeG0'
* User to logout

Let's extend that to allows:
* A user to login
* Redirect a user back to the login screen with a message if their login attempt failed
* A user to register - use an in memory store. If the server is restarted the credentials will be gone.

Now for a more advanced implementation allows:
* A user to login
* Redirect a user back to the login screen with a message if their login attempt failed
* A user to register:
  * Store user details in a database table
  * Encrypt the user password - tip look at the ```bcrypt``` module in npm : https://www.npmjs.com/package/bcrypt-nodejs
* Lock the users account if it supplies the wrong password 3 times in a row.
* A user to logout

Once you have mastered the above you should have a good understanding of how the Authentication process works. How do you think you should handle the Authorization process?

##Resources

Once you understand the Authentication basics you can look into some third party Authentication modules in npm such as, Passport JS that support a wide array of Authentication methods including Google, Facebook, Github etc.

See details here: http://passportjs.org/docs


