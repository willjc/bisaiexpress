var express=require('express');

var app = new express();
//设置渲染模板引擎
app.set("view engine","ejs");
app.use(express.static('public'));
//这都是动态路由
// app.get('/',function(req,res){
//     res.send('this is a page');
// });
// app.get('/login/:aid/:pid',function(req,res){
//     //console.log(req.params['aid']);
//     var a= req.params;
//     res.send(a.aid+"<br>"+a.pid);

// });
// app.get('/product',function(req,res){

//         res.send('aid是'+req.query.aid+"<br>"+"pid是"+req.query.pid);
// });
app.get('/view/:aid',function(req,res){
    var a=[111,222,333,4444,5555];
    var b=req.params.aid
  //  console.log(req.params.aid);
    res.render('index',{
            listarr:a,
            baid:b,
    });
})

app.listen(8000);