var productModel = require('../../models/product');
var express=require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');
//configure routes
module.exports = function(app){
	// get all the products (accessed at GET http://localhost:8080/api/products)
	app.get('/api/products', function(req, res){
		productModel.find(function(err, products) {
			if (err)
				res.send(err);

			res.json(products);
		});
	})


	app.post('/api/saveProduct', function(req, res){
		

        var fields = [];
        var form = new formidable.IncomingForm();
       
        
        form.on('field', function (field, value) {
            fields[field] = value; 
            
        });

        

        form.on('file', function (name, file) {
            
            var jsonFile = JSON.stringify(file);
            var parsedJSON = JSON.parse(jsonFile);
            
            var path = fields['path']=parsedJSON.path;
            //var fileName = fields['name']=parsedJSON.name;
            
            var binaryImg =  fs.readFileSync(path);
            console.log(fields);
            var product = new productModel();		// create a new instance of the Product model
            product.productName = fields.productName;  // set the products name (comes from the request)
            product.categoryName = fields.categoryName;
            product.img.name = fields.imgName;
            product.img.data = binaryImg;
            product.img.contentType = 'img/*';
            product.description = fields.description;
            product.nutritionalValues = fields.nutritionalValues;
            product.ingredients = fields.ingredients;
            productModel.findOne({'title': fields.productName}, function(err, doc){
            if(err) throw err
            else if(doc) throw err
            else
                product.save(function(err){
                if (err)
                    throw err
                //res.redirect('/api/img?name=' + fields.imgName);
                
                });
            });
        });
        form.on('end', function () {
            
            res.redirect('/')
            res.end();
        });
        
        form.parse(req);

		

	})
    app.get('/api/product', function(req,res){
        var productName = req.query.name;
        if(!productName){
            productModel.find({}, function(err, docs){
                if(err) throw err
                else
                    res.send(docs);
            })
        }else{
            productModel.find({'productName': productName}, function(err, doc){
                if(err) throw err
                else
                    res.send(doc);
            })
        }
        
    });

	// create a product (accessed at POST http://localhost:8080/products)


/** 
// on routes that end in /products/:product_id
// ----------------------------------------------------
router.route('/products/:product_id')

	// get the bear with that id
	.get(function(req, res) {
		Product.findById(req.params.product_id, function(err, product) {
			if (err)
				res.send(err);
			res.json(product);
		});
	})

*/
}
