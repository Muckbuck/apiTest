# README #

Version 0.0.1 of the Grandisa webapp/mashup
### Stuff that's important to learn ###

* Routes
* First class objects, Link: http://stackoverflow.com/questions/705173/what-is-meant-by-first-class-object
* Basics of the EJS view engine
* Will probably add more...

### DB ###

* link to mlabs: https://mlab.com/home
* username: grandiosaBackend
* password: pizzaBackEnd347
* Registered with: grandiosaBackend@gmail.com

### How do I get set up? ###

* The site can be viewed at: localhost:3000
* The only maps that you will have to work with are: views, routes and models

**Clone the repo**
```
#!javascript

git clone https://<YourUsername>@bitbucket.org/muckbuck/gback.git
```

**Download nodemon**
```
#!javascript

npm install nodemon --save
```

**Start the app by typing:** 
```
#!javascript

nodemon app
```


### A quick guide to requesting data as a client ###

**Examples of different endpoints**

* To get all products /api/product
* To get a product /api/product?name=nameOfProduct

* To get a paragraph /api/paragraph?title=titleOfParagraph

* To get posts from facebook /api/fbposts
* To get posts from facebook with a limit(default is 25) /api/fbposts?limit=X



**How to make a request from the client**
```
#!javascript

$.ajax({
  url: localhost/api/{{The endpoint to which you want to send your request}},
  dataType: json,
  success: function(json){return json},
  error: function(error){return error}
});
```