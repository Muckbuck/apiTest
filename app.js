var express = require('express');// importing the express framework
var app = express();// naming the express object
var db = require('mongoose');// importing mongoose

db.connect('mongodb://admin:admin123@ds139277.mlab.com:39277/webapp');
app.set('view engine', 'ejs')// sets the view engine

//Initiating all the routes
require('./routes/testRoute.js')(app);
require('./routes/img.js')(app);
require('./routes/api/img.js')(app);
//require('./routes/api/paragraph.js')(app);
require('./routes/api/product.js')(app);

app.use('/assets/', express.static(__dirname + '/public'));

var port = 3000;

app.listen(process.env.PORT || port);//express listening on port 3000
