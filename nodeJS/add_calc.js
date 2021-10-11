// calc 객체 선언
let calc = {};

// add 속성 추가
calc.add= (a,b) => {
    return a+b;
};

console.log(`result: ${calc.add(10,10)}`);