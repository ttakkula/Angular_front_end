var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var database = require('./modules/database');
var queries = require('./modules/queries');
var person = require('./modules/person');
var user = require('./modules/user');
var app = express();
//======================Middlewares==================================

//Bodyparser json() middleware parses the json object from HTTP POST request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(function(req,res,next){
    console.log(req.method);
    console.log(req.path);
    console.log(__dirname);
    console.log(req.body);
    console.log(database.Person);
    database.myFunction();
    //Send request forward in stack
    next();
});

//Define middlewares for our static files (.html, .css, & .js files that are loaded by browser when parsing index.html file)
app.use('/',express.static(path.join(__dirname, '../FrontEnd/views')));
app.use('/FrontEnd/css',express.static(path.join(__dirname, '../FrontEnd/css')));
app.use('/FrontEnd/lib',express.static(path.join(__dirname, '../FrontEnd/lib')));
app.use('/FrontEnd/module',express.static(path.join(__dirname, '../FrontEnd/module')));
app.use('/FrontEnd/controllers',express.static(path.join(__dirname, '../FrontEnd/controllers')));
app.use('/FrontEnd/factories',express.static(path.join(__dirname, '../FrontEnd/factories')));
//app.use('/css',express.static(path.join(__dirname, 'css')));
//app.use('/controllers',express.static(path.join(__dirname, 'controllers')));
//app.use('/lib',express.static(path.join(__dirname, 'lib')));

//======================OUR REST API MIDDLEWARES=====================
app.use('/persons',person);
app.use('/friends',user);
//======================ROUTERS======================================
/*
app.get("/persons",function(req,res){
    queries.getAllPersons(req,res);
    // res.send("Hello persons there!");
});
*/

app.listen(3000);