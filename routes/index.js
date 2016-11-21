
module.exports = function(app){
    function test(){
       this.name = 'function';
    }
    app.get('/', function(req,res){

        res.render('index');
        
        console.log(test.prototype.name)
    });
    
}