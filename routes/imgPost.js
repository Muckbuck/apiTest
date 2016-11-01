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
    model.save(function(err){
      if (err)
        throw err
      res.redirect('/img')

    });

  });

  app.get('/img', function(req,res){

    imgModel.find({'name': 'test.png'}, function(err, docs){
      if (err)
        throw err
      var stringDocs = JSON.stringify(docs);
      var parsedDocs = JSON.parse(stringDocs);
      console.log(parsedDocs[0].img.data);
      res.send(parsedDocs[0].img.data)
    });
  });


}
