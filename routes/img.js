var imgModel = require('../models/image');
var db = require('mongoose');
var fs = require('fs');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var formidable = require('formidable');
var util = require('util');




module.exports = function(app){
  app.post('/saveImg', urlencodedParser, function(req,res){
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