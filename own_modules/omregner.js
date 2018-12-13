function kronertileuro(kroner){
    euro = kroner/7.46; 
    return euro;
}   
function eurotilkroner(euro){
    kroner = euro*7.46;
    return kroner;
}   

exports.calceurotilkroner = eurotilkroner;

exports.calckronertileuro = kronertileuro;