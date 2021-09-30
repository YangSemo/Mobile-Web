/**
 * Optional Chaining (ES11, ES2020)
   - Optional chaining(?.)을 사용하면 프로퍼티가 없는
     중첩 객체를 에러 없이 안전하게 속성값 접근 가능
   - 객체의 속성을 접근할 때 . 연산자 대신에 ?. 연산자를 사용하면, 
     해당 객체가 nullish 즉, undefined나 null인 경우에 TypeError 대신에 undefined 출력
   - ?.은 ?.'앞’의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환
 */

{
    //person1 object
   const person1 = {
    name: "조정석",
    age: 23,
    job: {
      company: "NAVER",
      position: {
        title: "S/W Engineer",
      },
    },
  };

   //person2 object
   const person2 = {
    name: "손흥민",
    age: 22,
  };

  // bad code
  {
    function printTitle(person) {
      console.log(person.job.position.title);
    }
    printTitle(person1); //S/W Engineer
    // printTitle(person2); //TypeError: Cannot read property 'position' of undefined
  }

  //Optional Chaining code
  {
    function printTitle(person) {
      /* 1) person.job이 있으면, 
             person.job?.posion이 있으면,
             person.job?.posion?.title을 출력
         2) null or undefined이면 error가 발생하지 않도록 undefined 출력 */
      console.log(person.job?.position?.title);
    }
    printTitle(person1); //S/W Engineer
    printTitle(person2); //undefined
  }

  {
    //널 병합 연산자 (??)와 함께 사용
    function printTitle(person) {
      console.log(person.job?.position?.title ?? "No Job");
    }
    printTitle(person1); //S/W Engineer
    printTitle(person2); //No Job
  }

}