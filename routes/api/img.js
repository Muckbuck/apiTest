var imgModel = require('../../models/image');
var db = require('mongoose');
var fs = require('fs');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var formidable = require('formidable');


module.exports = function(app){
 /**
 * @api {get} /api/img? Request image
 * @apiName getImg
 *
 * @apiParam {String} name Name of the image.
 * @apiParam {String} buffer Option for getting a rendered image.
 * @apiParam {String} read Removing binary data for readability.
 * @apiSuccess {String} _id Image Id.
 * @apiSuccess {String} name  Name of the image.
 * @apiSuccess {String} contentType  File extension.
 * @apiSuccess {Buffer} data The binary representation.
 */
  app.get('/api/img', function(req, res){
    var imgName = req.query.name;
    var imgBuffer = req.query.buffer;
    var readable = req.query.read;
    
    if(!imgName){
      imgModel.find({}, function(err, docs){
        var stringDocs = JSON.stringify(docs);
        var parsedDocs = JSON.parse(stringDocs);
        if(readable === 'True'){
          for(var i=0; i<parsedDocs.length; i++){ delete parsedDocs[i].img.data };//Removing the binary data which makes the the response unreadable
          res.send(parsedDocs, null, 4);
        }else{
          res.send(parsedDocs, null, 4);
        }
        
        
      });
    }else{
      imgModel.findOne({'name': imgName}, function(err, docs){
        if (err)  throw err
        var stringDocs = JSON.stringify(docs);
        var parsedDocs = JSON.parse(stringDocs);
        
        if (imgBuffer === 'True' || readable === 'True'){
          if(imgBuffer === 'True'){
            var imgData = parsedDocs.img.data;
            var img = new Buffer(imgData, 'base64');
            res.end(img);
          }else if(readable === 'True'){
            console.log('!!!!READABLE!!!!')
            for(var i=0; i<parsedDocs.length; i++){ delete parsedDocs[i].img.data };//Removing the binary data which makes the the response unreadable
            res.send(parsedDocs, null, 4);
          }else{
            res.send(parsedDocs, null, 4);
          }
          
        }else{
          res.send(parsedDocs);
        } 
      });
    }
    
  });
  /**
 * @api {POST} /api/img? Request image
 * @apiName postImg
 *
 * @apiParam {String} name Name of the image.
 * @apiParam {String} buffer Option for getting a rendered image.
 * @apiParam {String} read Removing binary data for readability.
 * @apiSuccess {String} _id Image Id.
 * @apiSuccess {String} name  Name of the image.
 * @apiSuccess {String} contentType  File extension.
 * @apiSuccess {Buffer} data The binary representation.
 */
  //Post router for saving images to the database
  app.post('/api/saveImg', function(req,res){
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
