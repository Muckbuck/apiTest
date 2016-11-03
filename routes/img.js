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
    //Call back when each file in the form is parsed.
    
    form.on('file', function (name, file) {
        console.log(name);
      
        var jsonFile = JSON.stringify(file);
        var parsedJSON = JSON.parse(jsonFile);
        
        var path = fields['path']=parsedJSON.path;
        var name = fields['name']=parsedJSON.name;
        console.log(fields.path);       
        console.log(parsedJSON); 

        var model = new imgModel();
        var binaryImg =  fs.readFileSync(path);
        console.log(binaryImg)
        model.img.data = binaryImg;
        model.name = name;
        console.log(binaryImg);
        model.img.contentType = 'image/*';
        imgModel.findOne({'name': req.body.name}, function(err, doc){
          if(err)
            throw err
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