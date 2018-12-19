
//HUSK     <script src="http://localhost:8080/script"></script>




var uniktIDtilCookies = prompt("Skriv venligst et unikt ID");
document.cookie = "uniktID=" + uniktIDtilCookies + ";";

//increment ID
var harduvaretherfor = confirm("har du besøgt denne side før? hvis ja klik confirm.");
if (harduvaretherfor) {
    var antalbesogt = findCookieBeskrivelse("antalbesog");
    console.log(antalbesogt)
    var antalbesogplus = (parseInt(antalbesogt) + 1);
    document.cookie = "antalbesog=" + antalbesogplus + ";"
} else {
    document.cookie = "antalbesog=1;"
}

//velkommen besked 
var antalbesogplus = (parseInt(findCookieBeskrivelse("antalbesog")) + 1);
document.getElementById("para").innerHTML = "Hej " + uniktIDtilCookies + ", klokken er " + new Date().toLocaleTimeString() + " og du har besøgt denne side " + findCookieBeskrivelse('antalbesog') + " gange."

//find cookie
function findCookieBeskrivelse(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}

secookies();
function secookies() {
    console.log(document.cookie)
}


var startappend = "<tr><th id='brugerid' >brugerID</th><th>kontonavn</th><th>kontonummer</th><th>indestaaende</th><th>rente</th></tr> "
$('#liste').append($(startappend));


//se bruger 
function sebruger(her) {
    console.log("det her" + her)
    var params = 'brugerID=' + her + ';';
    console.log(params)

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        console.log(this.readyState + "-" + this.status)
        if (this.readyState == 4 && this.status == 200) {
            console.log("det her virker")
            console.log(this.response)
            var obj = JSON.parse(this.response)

            document.getElementById("idbrugertype").innerHTML = obj[0].brugertype;
            document.getElementById("idnavn").innerHTML = obj[0].navn;
            document.getElementById("idbrugerid").innerHTML = obj[0].brugerID;

        }



    }
    xmlhttp.open("POST", "http://localhost:8080/hentdata", true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(params);

}











hentpare();

function hentpare() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("virket")
            console.log("response" + this.response);
            //laver det om til object
            var obj = JSON.parse(this.response)


            for (let index = 0; index < obj.length; index++) {
                var start = '<tr>';

                var brugerID = '<td class="klikker" id="' + obj[index].brugerID + '" onclick="sebruger(this.id)" >' + obj[index].brugerID + ' </td>'
                var kontonavn = '<td>' + obj[index].kontonavn + ' </td>'
                var kontonummer = '<td>' + obj[index].kontonummer + ' </td>'
                var indestaaende = '<td class="moneybobs">' + obj[index].indestaaende + ' </td>'
                var rente = '<td >' + obj[index].rente + ' </td>'

                var slut = '</tr>'

                var finallinje = start + brugerID + kontonavn + kontonummer + indestaaende + rente + slut;
                $('#liste').append($(finallinje));

            }


        }
    }
    
    xmlhttp.open("GET", "http://localhost:8080/hent", true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send();
}