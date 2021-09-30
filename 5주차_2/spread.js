 //배열 복제
 let arr1 = [1, 2, 3]; 
 let arr2 = [...arr1];
 console.log(arr2); //[ 1, 2, 3 ]
 
 let str = "javascript";
 let arr3 = [...arr2, ...str];
 console.log(arr3); 

 let arr4 = [4, 5, 6];
 let arr5 = [0, ...arr1, ...arr4, 7, 8, 9];
 console.log(arr5);

   //함수의 피라미터로 사용
   function printScore(...scores) {
    scores.forEach((score) => {
      console.log(`score: ${score}`); //score: 100,97,99,93,95
    });
  }
  const scoreList = [100, 97, 99, 93, 95];
  printScore(scoreList);

  //객체에서 사용하기
const obj = { a: 100, b: 200 };
const obj2 = { ...obj, c: 300, d: 400 };
console.log(obj2);

const obj3 = { x: 700, y: 800, z: 900 };
const obj4 = { ...obj, ...obj3 };
console.log(obj4);

//객체 구조분해 할당(Destructuring assignment)
const { a, b, c } = obj2;
console.log(`a: ${a}, b: ${b}, c: ${c}`);

{
    const { x, y, z, c, b: bb } = obj4;
    console.log(`c: ${c}, bb: ${bb}, x: ${x}, y: ${y}, z: ${z}`); //c: undefined, bb: 200, x: 700, y: 800, z: 900
    //변수 선언 순서와 관계없이 객체의 프로퍼티 이름에 할당
}

// Array 구조분해 할당
const animals = ["dog", "cat"];
{
    const first = animals[0];
    const second = animals[1];
    console.log(first, second); //dog cat
}
//Destructuring Assignment
{
    const [first, second] = animals;
    console.log(first, second); //dog cat
}
{
    const [cat, dog] = animals;
    console.log(cat, dog); //dog cat, 변수이름과 상관없이 배열 순서에 맞춰 할당
}

{
    //객체 복제
    const user = { id: 1001, name: "sony" };
    const detailInfo = { phone: "010-1234-1234", email: "sony@gmail.com" };
    const skills = ["JAVA", "Vue.js", "Javascript"];
    const lang = ["Korean", "English", "German"];  
    const sony = {
        ...user,
        ...detailInfo,
        gender: "male",
        skills: [...skills],
        lang: [...lang],
      };
      console.log(sony);
    }

