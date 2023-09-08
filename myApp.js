let express = require('express');
let app = express();
console.log("Hello World");
app.get("/",function(req, res) {
    res.sendFile(absolutePath = __dirname + '/views/index.html');
    }
  );
app.use(absolutePath = '__dirname + /public', function(req, res) {
    express.static();
    }
);


































 module.exports = app;
