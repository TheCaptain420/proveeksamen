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

//require mysql
var mysql = require('mysql');

//get request
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
})


/*

  //get request 2 : hent pærerne

  app.get('/hent', function(req,res){
    
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("use fortesteksamen;", function (err, result) {
            if (err) throw err;
            console.log("connected to schema");
          });

        //select * from tablename
        con.query("select * from ikeapare", function (err, result) {
          if (err) throw err;
          console.log("selected *");
        res.send(result);
        });
      });

});

app.post('/opret',function(req,res){
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("use fortesteksamen;", function (err, result) {
            if (err) throw err;
            console.log("connected to schema");
          });
        
          //
          con.query("insert into ikeapare(onoff,normielStrom,aktuelStrom,lysintensitet,farve,uniktID,hardwareID,softwareID) values ("+req.body.onoff+","+req.body.normielStrom +","+req.body.aktuelStrom +","+req.body.lysintentitet +",'"+req.body.farve +"','"+req.body.uniktID +"','"+req.body.hardwareID +"','"+req.body.softwareID +"'); ", function (err, result) {
            if (err) throw err;
            console.log("selected *");
          res.send("Det virker, akak den kom igennem");
          });
        });


});


*/



http.listen(8080, function(){
    console.log('listening on *:8080');
  });
