const https = require('https');
var config = require('../config')

module.exports = function(callback){

       
        var options = {
        hostname: 'graph.facebok.com',
        path: '/oauth/access_token?client_id='+config.appId+'&client_secret='+config.appSecret+'&grant_type=client_credentials',
        method: 'GET',
        rejectUnauthorized:false
        };

            var buffer = '';
            var request = https.get(options, function(result){
              
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
