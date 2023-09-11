let express = require('express');
let app = express();
require('dotenv').config();
app.use('/public', express.static(__dirname + '/public'));
app.get("/json", function(req, res) {
    let method = req.method;
    let path = req.path;
    let ip = req.ip;
    // if (process.env.MESSAGE_STYLE === "uppercase"){
    //     response = "Hello json".toUpperCase();
    //     }
    //     else {
    //     response = "Hello json"
    //     }
    res.json({"middlewareLogger" : method + " " + path + " - " + ip});
    next();
    }
  );


































 module.exports = app;
