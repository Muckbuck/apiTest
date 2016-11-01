  module.exports = function(app){
  app.get('/image', function(req, res){
    res.send(dbData);
  });

  app.get('/text/paragraf', function(req, res){
    res.send(dbData);
  });

}
