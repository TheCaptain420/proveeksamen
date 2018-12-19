
function tsm(){
var url = "http://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=b77ba11d469bf7daccd88b87048cafcd";
//mit id : b77ba11d469bf7daccd88b87048cafcd

var xhr = require('xmlhttprequest').XMLHttpRequest
var xmlhttp = new xhr;

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {


      //Laver hele JSON filen om til et object.  
      var myObj = JSON.parse(this.responseText);
      //printer navnet
      console.log("temp i kelvin: " +myObj.main.temp);
       return myObj.temperature; 
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();
}
exports.vejret = tsm;
