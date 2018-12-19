var omregner = require('./own_modules/omregner')


console.log("100 euro blir: "+omregner.calceurotilkroner(100));

console.log("og regnet tilbage bliver det: "+omregner.calckronertileuro(omregner.calceurotilkroner(100)));

console.log("og nu til vejret")

var vejret = require('./own_modules/vejr_module/vejret')
vejret.vejret();