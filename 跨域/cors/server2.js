//cors 后台设置白名单
let express = require('express');
let app = express();
let whitList = ['http://localhost:3001'];//白名单，源地址
app.use(function (req, res, next) {
    let origin = req.headers.origin;
    if(whitList.includes(origin)){
        //设置哪个源可以访问我  各种白名单
      res.setHeader('Access-Control-Allow-Origin',origin);//源地址 '*' 设置星号就不能允许携带凭证cookie
      res.setHeader('Access-Control-Allow-Headers','name'); //ajax设置了请求头
      res.setHeader('Access-Control-Allow-Methods','PUT'); //允许put请求
      res.setHeader('Access-Control-Allow-Credentials',true); //请求携带凭证（cookie）
        res.setHeader('Access-Control-Max-Age',6);//预检的存活时间
        res.setHeader('Access-Control-Expose-Headers','name,'); //服务端设置setHeader 允许前台ajax获取头信息名字
        if(req.method==='OPTIONS'){
            res.end();//OPTIONS请求不做任何处理
        }
    }
    next();
});
app.get('/getDate',function (req, res) {
    console.log(req.headers);
    res.end('这回你可以访问我了 ')
});
app.put('/getDate',function (req, res) {
    console.log(req.headers);
    res.setHeader('name','jw');
    res.end('这回你可以访问我了 ')
});
app.use(express.static(__dirname));//双下划线
app.listen(4001,()=>{
    console.log('success');
});