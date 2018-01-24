var express=require('express');

var app = new express();
app.get('/',function(req,res){
    res.send('this is / page');
});
app.get('/login',function(req,res){
    res.send('thisi is login');

});
app.listen(8000);