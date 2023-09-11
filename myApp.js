let express = require('express');
let app = express();
let response = "";
if (process.env.MESSAGE_STYLE === uppercase){
    response = "Hello json".toupperCase();
    }
    else {
    response = "Hello json"
    }
console.log("Hello World");
app.use('/public', express.static(__dirname + '/public'));
app.get("/json", function(req, res) {
    res.json({"message" : response});
    }
  );


































 module.exports = app;
