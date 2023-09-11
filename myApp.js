let express = require('express');
let app = express();
console.log("Hello World");
app.use('/public', express.static(__dirname + '/public'));
app.get("/json", function(req, res) {
    if (process.env.MESSAGE_STYLE === uppercase){
    response = "Hello json".toupperCase();
    }
    else {
    response = "Hello json"
    }
    res.json({"message" : response});
    }
  );


































 module.exports = app;
