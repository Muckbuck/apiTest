//var facebook = require('./fbPosts');



module.exports = function(app){
    
    app.get('/', function(req,res){
        /**
        facebook(function(data){
            console.log(data);
        });
        */

        res.render('index');

    });
    
}