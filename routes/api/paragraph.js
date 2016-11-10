var paragraphModel = require('../../models/paragraph');
var formidable = require('formidable');
var imgModel = require('../../models/image');
var db = require('mongoose');
var fs = require('fs');


module.exports = function(app){
   /**
 * @api {GET} /api/paragraph? Request paragraph
 * @apiName postImg
 *
 * @apiParam {String} title Title of the Paragraph.
 * @apiParam {String} read Can be set =True to remove binary data for readability.
 * @apiSuccess {String} _id Paragraph Id.
 * @apiSuccess {String} title  Title of the paragraph.
 * @apiSuccess {String} content  Content of the paragraph.
 * @apiSuccess {String} name  Name of the image.
 * @apiSuccess {String} contentType  File extension.
 * @apiSuccess {Buffer} data The binary representation.
 */

  app.get('/api/paragraph', function(req,res){
    var title = req.query.title;
    var readable = req.query.read;
    if(!title){
      paragraphModel.find({}, function(err, docs){
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
      paragraphModel.findOne({'title': title}, function(err, docs){
        if (err)  throw err
        var stringDocs = JSON.stringify(docs);
        var parsedDocs = JSON.parse(stringDocs);
        
        if(readable === 'True'){
            console.log('!!!!READABLE!!!!')
            for(var i=0; i<parsedDocs.length; i++){ delete parsedDocs[i].img.data };//Removing the binary data which makes the the response unreadable
            res.send(parsedDocs, null, 4);
        }else if(readable == null || undefined){
            res.send(parsedDocs, null, 4);
          }
          
        else{
          res.send(parsedDocs);
        } 
      });
    }
  });
 /**
 * @api {POST} /api/saveParagraph Request paragraph
 * @apiName postImg
 *
 * @apiSuccess {String} _id Paragraph Id.
 * @apiSuccess {String} title  Name of the Paragraph.
 * @apiSuccess {String} content  Name of the Paragraph.
 * @apiSuccess {Buffer} data The binary representation.
 * @apiSuccess {String} name  Name of the Paragraph.
 * @apiSuccess {String} contentType  File extension.
 */
  app.post('/api/saveParagraph', function(req,res){
    var fields = [];
    var form = new formidable.IncomingForm();
    var imgName;
    
    form.on('field', function (field, value) {
        fields[field] = value; 
    });

    

    form.on('file', function (name, file) {
        
        var jsonFile = JSON.stringify(file);
        var parsedJSON = JSON.parse(jsonFile);
        
        var path = fields['path']=parsedJSON.path;
        //var fileName = fields['name']=parsedJSON.name;
          
        var newParagraphModel = new paragraphModel();
        var binaryImg =  fs.readFileSync(path);
        
        newParagraphModel.title = fields.title;
        newParagraphModel.content = fields.content;
        newParagraphModel.img.name = fields.name;
        newParagraphModel.img.data = binaryImg;
        newParagraphModel.img.contentType = 'img/*';
        paragraphModel.findOne({'title': fields.title}, function(err, doc){
          if(err) throw err
          else if(doc) throw err
          else
            newParagraphModel.save(function(err){
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
