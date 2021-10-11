// variable, func 모듈 참조
const {odd, even} = require("./variable");
const checkNum = require("./func");

function checkString(str) {
    return str.length %2 ? odd: even;
}

console.log(checkNum(15));
console.log(checkString("nodejs"));