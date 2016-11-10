var db = require('mongoose');

var Schema = db.Schema;

var paragraphSchema = new Schema({
  title: String,
  content: String,
  img: { name: String, data: Buffer, contentType: String }
});

module.exports = db.model('paragraph', paragraphSchema);
