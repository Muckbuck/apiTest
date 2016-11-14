module.exports = function(app){
    app.get('/api/fbposts', function(req,res){
        var postsLimit = req.query.limit;
        req.facebook.api('/61569713341/posts', function(err, pagePosts) {
            console.log(pagePosts)
            
            res.send(pagePosts.data);
        });
    })
    
}
