let express = require('express');
let app = express();
var bodyParser = require("body-parser");
require('dotenv').config();
app.use('/public', express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.use("/", function(req, res, next) {
    let method = req.method;
    let path = req.path;
    let ip = req.ip;
    console.log(method + " " + path + " - " + ip);
    next();
    }
)

app.get("/json", function(req, res) {
    let method = req.method;

    if (process.env.MESSAGE_STYLE === "uppercase"){
        response = "Hello json".toUpperCase();
        }
        else {
        response = "Hello json"
        }
    res.json({"message": response});
    }
  )

app.get("/now", function(req, res, next){
    req.time = new Date().toString();
    next();
    }, function(req, res) {
    res.json({"time": req.time})
    }
  )

app.get("/:word/echo", function(req, res){
    let word = req.params.word;
    res.json({"echo": word})
    } 
)
app.get("/name", function(req, res){
    let first = req.query.first;
    let last = req.query.last;
    res.json({"name": first + " " + last})
    } 
)
app.get("/",function(req, res) {
    res.sendFile(absolutePath = __dirname + '/views/index.html');
    }
  );

app.post("/name",function(req,res){
    let first = req.body.first;
    let last = req.body.last;
    console.log(first + last)
    res.json({"name": first + " " + last})
}































 module.exports = app;
