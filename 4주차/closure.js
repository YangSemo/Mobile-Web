function outerFunction() {
    var a=1;
    var b=2;

    function innerFunction() {
        var c=3;
        console.log(b);
    }
    return innerFunction;
}

var someFunc = outerFunction();
someFunc();