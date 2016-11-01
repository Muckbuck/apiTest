var db = require('mongoose');

var Schema = db.Schema;

var imageSchema = new Schema({
  name: String,
  img: { data: Buffer, contentType: String }
});

module.exports = db.model('img', imageSchema);
