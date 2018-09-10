let express = require('express');
let app = express();
app.use(express.static(__dirname,'a.html'));//双下划线
app.listen(3003,()=>{
    console.log('success');
});