// 모듈참조
const {odd, even} = require("./variable");

function checkNum(num) {
    return num %2 ? odd: even;
}

module.exports= checkNum;