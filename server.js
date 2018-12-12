//HUSK AT START MYSQL 
//sudo /etc/init.d/mysql start
//til at "åbne serveren"
var app = require('express')();
var http = require('http').Server(app);
//til json objekter
bodyParser = require('body-parser');


//HUSK AT BRUGE BODYPARSER TIL POST REQUEST.

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var controller = require('./controller/controller');


//require mysql
var mysql = require('mysql');


//get request
app.get('/',function(req,res){
    res.sendFile(__dirname + '/view/index.html');
})


var routes = require('./route/routes')
routes(app)

http.listen(8080, function(){
    console.log('listening on *:8080');
  });

