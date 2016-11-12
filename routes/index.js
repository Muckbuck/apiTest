//var facebook = require('./fbPosts');
var config = require('../config');
var Facebook = require('facebook-node-sdk');

module.exports = function(app){
    app.use(Facebook.middleware({ appId: config.appId, secret: config.appSecret }));
    app.get('/', function(req,res){
        /**
        facebook(function(data){
            console.log(data);
        });
        */

        req.facebook.api('/61569713341/posts', function(err, user) {
            
            var jsonString = JSON.stringify(user);
            var parsedJSON = JSON.parse(jsonString);
            
            res.render('index', {grandiosaFeed: parsedJSON});
        });

    });
    
}