let express = require('express');
let app = express();
require('dotenv').config();
app.use('/public', express.static(__dirname + '/public'));
app.get("/json", function(req, res) {
    let response = "";
    if (process.env.MESSAGE_STYLE === "uppercase"){
        response = "Hello json".toUpperCase();
        }
        else {
        response = "Hello json"
        }
    res.json({"message" : response});
    }
  );


































 module.exports = app;
