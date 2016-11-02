var imgModel = require('../models/image');
var db = require('mongoose');
var fs = require('fs');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })




module.exports = function(app){
  app.post('/saveImg', urlencodedParser, function(req,res){
 
    
    var model = new imgModel();
    var binaryImg =  fs.readFileSync(__dirname + '/../public/images/' + req.body.imgName);
    model.img.data = binaryImg;
    model.name = req.body.imgName;
    console.log(binaryImg);
    model.img.contentType = 'image/*';
    imgModel.findOne({'name': req.body.imgName}, function(err, doc){
      if(err)
        throw err
      if (doc)
        res.redirect('/');
      model.save(function(err){
        if (err)
          throw err
        //res.redirect('/api/img?name=' + req.body.imgName);
        res.redirect('/');
      });
    });
    

  });



}
