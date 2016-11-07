
var productModel = require('../../models/product');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//Get router for retrieving products from the database
module.exports = function(app){
    app.get('/api/product', function(req, res){
    var name = req.query.name;
    productModel.find({'productname': name}, function(err, docs){
      if (err)
        throw err
      var stringDocs = JSON.stringify(docs);
      var parsedDocs = JSON.parse(stringDocs);
      res.send(parsedDocs);
    });
  });
  //Post router for saving products to the database
  app.post('/api/saveProduct', urlencodedParser, function(req,res){

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

}
 