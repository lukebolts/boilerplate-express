let express = require('express');
let app = express();
console.log("Hello World");
app.use('/public', express.static(__dirname + '/public'));
app.get("/",function(req, res) {
    res.sendFile(absolutePath = __dirname + '/views/index.html');
    }
  );


































 module.exports = app;
