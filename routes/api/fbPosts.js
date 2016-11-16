module.exports = function(app){
    app.get('/api/fbposts', function(req,res){
        var postsLimit = parseInt(req.query.limit);
        if(!postsLimit){
            req.facebook.api('/61569713341/posts', function(err, pagePosts) {
                console.log(pagePosts)
                
                res.send(pagePosts.data);
            });
        }else{
            req.facebook.api('/61569713341/posts?limit=' + postsLimit, function(err, pagePosts) {
                console.log(pagePosts)
                
                res.send(pagePosts.data);
            });
        }
        
    })
    
}
