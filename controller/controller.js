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
        con.query("use proveeksamen;", function (err, result) {
            if (err) throw err;
            console.log("connected to schema");
          });

        //select * from tablename
        con.query("select * from kontotable ORDER BY brugerID DESC;", function (err, result) {
          if (err) throw err;
          console.log("selected *");
        res.send(result);
        });
      });

}



//lav en post request til at oprette nye brugere

exports.opret_kunde = function(req,res){
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234"
  }); 
  con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("use proveeksamen;", function (err, result) {
            if (err) throw err;
            console.log("connected to schema");
          });
        
          //req.body.whatever
          con.query("insert into BecBankbrugere(brugertype,navn,brugerID,brugernavn,passwordet) values ('"+req.body.brugertype+"','"+req.body.navn+"',"+req.body.brugerID+",'"+req.body.brugernavn+"','"+req.body.passwordet+"'); ", function (err, result) {
            if (err) throw err;
            console.log("kundeopretttet *");
          res.send("Det virker, akak den kom igennem");
          });
        });


}

exports.hent_data_for_en = function(req,res){
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234"
  }); 

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("use proveeksamen;", function (err, result) {
        if (err) throw err;
        console.log("connected to schema");
      });
    
      //req.body.whatever
      con.query(" select navn,brugertype,brugerID from BecBankbrugere where brugerID="+req.body.brugerID+"", function (err, result) {
        if (err) throw err;
        console.log("kunde hentet *");
      res.send(result);
      });
    });


}