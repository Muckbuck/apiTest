const https = require('https');
var config = require('../config')
var facebook = require('./fbAccessToken');
var access_token;
facebook(function(data){
    var sub = data.substring(13, 100);
    access_token = sub;
});

module.exports = function(callback){

        console.log(access_token);
        var options = {
        hostname: 'graph.facebok.com',
        path: '/147482601960327/feed?access_token=' + access_token,
        method: 'GET',
        rejectUnauthorized:false
        };

            var buffer = '';
            var request = https.get(options, function(result){
            console.log('requesting!')
                result.on('data', function(chunk){
                    buffer += chunk;
                    
                });

                result.on('end', function(){
                    callback(buffer);
                });
            });
            
            request.on('error', function(e){
                console.log('error from facebook.get(): '
                            + e.message);
            });

            request.end();
}
