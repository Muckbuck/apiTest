//Get router for retrieving paragraphs from the database
/** 
module.exports = function(){
    app.get('/api/paragraph', function(req, res){
    var name = req.query.img;
    imgModel.find({'name': name}, function(err, docs){
      if (err)
        throw err
      var stringDocs = JSON.stringify(docs);
      var parsedDocs = JSON.parse(stringDocs);
      res.send(parsedDocs);
    });
  });

}
*/