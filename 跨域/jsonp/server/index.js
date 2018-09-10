let express = require('express');
let app = express();
app.get('/say',function (req, res) {
    let {wd,cb} = req.query;
    console.log(wd);
    res.end(`${cb}('wo bu ai ni')`)
});
app.listen(3000,()=>{
    console.log('success');
});