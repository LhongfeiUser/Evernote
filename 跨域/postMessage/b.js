let express = require('express');
let app = express();
app.use(express.static(__dirname));//双下划线
app.listen(3004,()=>{
    console.log('success');
});