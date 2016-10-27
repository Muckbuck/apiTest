// DISCLAIMER!!!!
// This is the server, the heart of our app!

var express = require('express');// importing the express framework
var app = express();// naming the express object which we will use to do all sorts of cool stuff

app.set('view engine', 'ejs')// sets the view engine

require('./routes/testRoute.js')(app);// how to call a route for the server to use and passing app as a parameter

app.use('/assets/', express.static(__dirname + '/public'));// maps the /assets/-path to the public folder to serve the client with static files


//var port = settings.deploy.PORT || settings.dev.PORT;// either set from enviroment variable or if null, then 3000


app.listen(3000);//express listening on port 3000
