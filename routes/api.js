var imgModel = require('../models/image');
var db = require('mongoose');
var fs = require('fs');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var formidable = require('formidable');
var util = require('util');

  
module.exports = function(app){
  //Get router for retrieving products from the database
  app.get('/api/product', function(req, res){
    var name = req.query.name;
    imgModel.find({'productname': name}, function(err, docs){
      if (err)
        throw err
      var stringDocs = JSON.stringify(docs);
      var parsedDocs = JSON.parse(stringDocs);
      res.send(parsedDocs);
    });
  });
  //Post router for saving products to the database
  app.post('/api/saveProduct', urlencodedParser, function(req,res){
    var fields = [];
    var form = new formidable.IncomingForm();
    
    form.on('field', function (field, value) {
        
        var jsonFile = JSON.stringify(value);
        var parsedJSON = JSON.parse(jsonFile);
        console.log(jsonFile);
        
    });

    form.on('end', function () {
        
        res.redirect('/')
        res.end();
    });
    
    form.parse(req);
    
  });
  //Get router for retrieving paragraphs from the database
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
  //Get router for retrieving images from the database
  app.get('/api/img', function(req, res){
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
  //Post router for saving images to the database
  app.post('/api/saveImg', urlencodedParser, function(req,res){
    var fields = [];
    var form = new formidable.IncomingForm();
    
    var imgName;
    
    form.on('field', function (field, value) {
        
        var jsonFile = JSON.stringify(value);
        var parsedJSON = JSON.parse(jsonFile);
        imgName = parsedJSON;
        
    });

    

    form.on('file', function (name, file) {
        
        var jsonFile = JSON.stringify(file);
        var parsedJSON = JSON.parse(jsonFile);
        
        var path = fields['path']=parsedJSON.path;
        //var fileName = fields['name']=parsedJSON.name;
          
        var model = new imgModel();
        var binaryImg =  fs.readFileSync(path);
        
        model.img.data = binaryImg;
        model.name = imgName;
        
        model.img.contentType = 'image/*';
        imgModel.findOne({'name': imgName}, function(err, doc){
          if(err) throw err
          else if(doc) throw err
          else
            model.save(function(err){
              if (err)
                throw err
              //res.redirect('/api/img?name=' + req.body.imgName);
              
            });
        });
    });
    form.on('end', function () {
        
        res.redirect('/')
        res.end();
    });
    
    form.parse(req);
    
    

  });

  


}
