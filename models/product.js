var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var productSchema = new Schema({
  productName: String,
  categoryName: String,
  img: { name: String, data: Buffer, contentType: String },
  description: String,
  nutritionalValues: String,
  ingredients: String


});

module.exports = mongoose.model('Producta', productSchema);