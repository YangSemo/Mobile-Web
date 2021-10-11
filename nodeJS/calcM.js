// 하나의 모듈 파일에서 여러 개의 객체를 내보내기
// exports 전역 객체에 각 속성으로 모듈화하여 복수 개의 객체 내보내기
const add = (a, b) => {
    return a+b;
};

const sub = (a, b) => {
    return a-b;
};
const mul = (a, b) => a*b;

exports.add=add;
exports.sub=sub;
exports.mul=mul;

exports.div=(a,b) => a/b;