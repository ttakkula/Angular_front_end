var https = require('https');
var fs = require('fs');
var express = require('express');

var options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt'),
    requestCert: false,
    rejectUnauthorized: false
};

var app = express();

var server = https.createServer(options, app).listen(3000, function(){
    console.log("server started at port 3000");
});

app.get("/",function(req,res){
    res.send("Hola HTTPS!");
})