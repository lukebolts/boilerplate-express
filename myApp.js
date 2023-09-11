let express = require('express');
let app = express();
console.log("Hello World");
app.use('/public', express.static(__dirname + '/public'));
app.get("/json", function(req, res) {
    console.log(process.env.MESSAGE_STYLE)
    let response = "Hello json".toUpperCase;
    console.log(response)
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
