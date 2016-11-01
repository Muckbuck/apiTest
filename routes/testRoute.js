// DISCLAIMER!!!!
// This is a test, it will show you how to render a page and also how to pass data to said page.S

module.exports = function(app){// Module.exports is used to expose our route to the server

  app.get('/', function(req,res){ //Creating a route for get requests to the endpoint /
    var helloArray =[ 'Hello', 'World','!' ]
    res.render('index', {helloString: 'Hello world!', helloArray: helloArray }) //Setting a page to render and pass two key&value pairs that we can use on the rendered page
  });
}
