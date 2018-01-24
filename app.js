var express=require('express');

var app = new express();
//这都是动态路由
app.get('/',function(req,res){
    res.send('this is a page');
});
app.get('/login/:aid/:pid',function(req,res){
    //console.log(req.params['aid']);
    var a= req.params;
    res.send(a.aid+"<br>"+a.pid);

});
app.get('/product',function(req,res){

        res.send('aid是'+req.query.aid+"<br>"+"pid是"+req.query.pid);
});
app.listen(8000);