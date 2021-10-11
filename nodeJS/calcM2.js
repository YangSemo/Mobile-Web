// 하나의 모듈 파일에서 여러 개의 객체를 내보내기
// exports 전역 객체에 각 속성으로 모듈화하여 복수 개의 객체 내보내기

let calc={};

calc.add = (a, b) => {
    return a+b;
};

calc.sub = (a, b) => {
    return a-b;
};
calc.mul = (a, b) => {
    return a*b;
};
calc.div = (a, b) => {
    return a/b;
};

module.exports=calc;