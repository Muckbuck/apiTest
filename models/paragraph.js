var db = require('mongoose');

var Schema = db.Schema;

var paragraphSchema = new Schema({
  name: String,
  img: { data: Buffer, contentType: String }
});

module.exports = db.model('img', imageSchema);
