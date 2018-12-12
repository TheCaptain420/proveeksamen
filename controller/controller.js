var mysql = require('mysql');


exports.hent_data = function(req,res){
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "1234"
      });
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

}



//lav en post request til at indsætte ny pære her. Husk at rette i routes.
/*
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


});*/