var db = require('mongoose');
var Schema = db.Schema;

var productSchema = new Schema({
  productname:  String,
  categoryname: String,
  imglink:   String,
  description: String,
  nutritionalvalues: String,
  ingredients: String

});

module.exports = db.model('productlist', productSchema);