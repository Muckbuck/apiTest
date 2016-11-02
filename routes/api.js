var imgModel = require('../models/image');
var db = require('mongoose');
  
module.exports = function(app){
  
  app.get('/api/img', function(req, res){//Endpoint for getting image data
    var name = req.query.name;
    var imgBuffer = req.query.buffer;
    imgModel.findOne({'name': name}, function(err, docs){
      if (err)
        throw err
      var stringDocs = JSON.stringify(docs);
      var parsedDocs = JSON.parse(stringDocs);
      
      if (imgBuffer === 'True'){
        var imgData = parsedDocs.img.data;
        var img = new Buffer(imgData, 'base64');
        res.end(img);
      }else{
        res.send(parsedDocs);
      } 
    });
  });

  app.get('/api/article', function(req, res){
    var name = req.query.name;
    imgModel.find({'name': name}, function(err, docs){
      if (err)
        throw err
      var stringDocs = JSON.stringify(docs);
      var parsedDocs = JSON.parse(stringDocs);
      res.send(dbData);
    });
  });

  app.get('/api/pizza', function(req, res){
    var pizzaImg = req.query.img;
    var pizzaDesc = req.query.desc;
    imgModel.find({'name': name}, function(err, docs){
      if (err)
        throw err
      var stringDocs = JSON.stringify(docs);
      var parsedDocs = JSON.parse(stringDocs);
      res.send(dbData);
    });
  });

  app.get('/api/desc', function(req, res){
    var name = req.query.name;
    var id = req.query.id;

    imgModel.find({'name': name}, function(err, docs){
      if (err)
        throw err
      var stringDocs = JSON.stringify(docs);
      var parsedDocs = JSON.parse(stringDocs);
      res.send(dbData);
    });
   
  });

  app.get('ingredient')


}
