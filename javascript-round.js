// http://thenewcode.com/895/JavaScript-Rounding-Recipes

// Round Decimal
//==============
var randNum = 87.335;
parseFloat(randNum.toFixed(2));
//> 87.33

parseFloat(randNum.toPrecision(3));
//> 87.3

var randNum = 1;
randNum.toFixed(2);
//> "1.00"

//Les 2 fonctions précédente n'arrondisse pas bien le 5 (1.005 avec toFixed(2) => 1 au lieu de 1.01)
//Pour éviter ça :
function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}


//Truncate
//========
function truncated(num, decimalPlaces) {
  var numPowerConverter = Math.pow(10, decimalPlaces);
  return ~~(num * numPowerConverter)/numPowerConverter;
}
var randInt = 35.874993;
truncated(randInt,3);
//> 35.874


//Round Int
//=========
//Int round nearest number
Math.round(4.5)
//> 5

//Int round down
Math.floor(36.93);
//> 36

//Int round up
Math.ceil(36.02);
//> 37

//Rounding To The Nearest Multiple of a Number
function roundToMultiple(num, multiple) {
  return Math.round(num/multiple)*multiple;
}
roundToMultiple(11, 10);
//> 10;


//Clamping Number To a Range
//==========================
function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
};
clamp(123, 5, 80);
//> 80;
