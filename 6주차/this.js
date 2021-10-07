{
  const obj = {
    grades: [80, 90, 100],
    getTotal: function () {
      this.total = 0; //this: obj
      //this: obj
      this.grades.forEach(function (v) {
        this.total += v; // this: window
        //콜백 함수 내부의 this는 전역 객체 window를 가리킴
      });
    },
  };
  obj.getTotal();
  console.log(obj.total); //0
}

{
  const obj = {
    grades: [80, 90, 100],
    getTotal: function () {
      this.total = 0; //this: obj
      this.grades.forEach(function (v) {
        this.total += v; // th
      }, this); //this를 넘겨줌
    },
  };
  obj.getTotal();
  console.log(obj.total); //270
}

{
  const obj = {
    grades: [80, 90, 100],
    getTotal: function () {
      this.total = 0; //this: obj
      this.grades.forEach((v) => {
        this.total += v; //this: obj
        //Arrow Function의 this는 언제나 상위 스코프의 this를 가리킴
      });
    },
  };
  obj.getTotal();
  console.log(obj.total); //270
}
