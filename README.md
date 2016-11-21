# README #

Version 0.0.1 of the Grandisa webapp/mashup


### How do I get set up? ###

* The site can be viewed at: localhost:3000
* The only maps that you will have to work with are: views, routes and models

**Clone the repo**
```


git clone https://<YourUsername>@bitbucket.org/muckbuck/gback.git
```

**Download nodemon**
```


npm install nodemon --save
```

**Start the app by typing:** 
```


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


$.ajax({
  url: localhost/api/{{The endpoint to which you want to send your request}},
  dataType: json,
  success: function(json){return json},
  error: function(error){return error}
});
```
