// require() 함수를 통해 한번에 불러오기 or 객체별로 불러오기

// 모듈 파일을 불러와 변수에 할당
// 그 변수를 통해 객체에 접근
const calc = require("./calcM2.js");

console.log(`add: ${calc.add(10,10)}`);
console.log(`sub: ${calc.sub(10,5)}`);

// 각 객체별로 불러와 변수에 할당
const {mul, div} = require("./calcM2.js");

console.log(`mul: ${mul(10,5)}`);
console.log(`div: ${div(10,5)}`);