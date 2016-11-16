var express = require('express');// importing the express framework
var app = express();// naming the express object
var db = require('mongoose');// importing mongoose
var Facebook = require('facebook-node-sdk');
var config = require('./config');
var http = require('http');
var https = require('https');
var fs = require('fs');

db.connect('mongodb://admin:admin123@ds139277.mlab.com:39277/webapp');
app.set('view engine', 'ejs')// sets the view engine

app.use(Facebook.middleware({ appId: config.fbOptions.appId, secret: config.fbOptions.appSecret }));

//Initiating all the routes
require('./routes/index.js')(app);
require('./routes/api/img.js')(app);
require('./routes/api/paragraph.js')(app);
require('./routes/api/fbPosts.js')(app);
require('./routes/api/product.js')(app);


app.use('/assets/', express.static(__dirname + '/public'));
/*********************************
 * Storing tow primitives for http 
 * and https port.
 **********************************/
var httpPort = 3000;
var httpsPort = 443;

/*********************************
 * Options for setting a key and a
 * sertificate for an optional https 
 * server.
 **********************************/
const options = {
  key: fs.readFileSync('keys/key.pem'),
  cert: fs.readFileSync('keys/cert.pem')
};

/*********************************
 * Creating one http and one https 
 * server.
 **********************************/
//https.createServer(options, app).listen(process.env.PORT||httpsPort);
http.createServer(app).listen(process.env.PORT||httpPort);


