// 비동기 처리 기법
// promise 보다 더 간결하고,
// 동기식 프로그램처럼 코드를 순차적으로 작성하는 비동기 처리 방법

//async & await
//Data(1) 가져오기
const getData1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data(1) 가져오기 완료");
      }, 1000);
    });
  };

//Data(2) 가져오기
const getData2 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve("Data(2) 가져오기 완료");
        reject(new Error("Data(2) 가져오기 실패"));
      }, 3000);
    });
  };

//Data(3) 가져오기
const getData3 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data(3) 가져오기 완료");
      }, 2000);
    });
  };

//async & await
console.log("data 가져오기 시작");
async function getData() {
  try {
    const data1 = await getData1();
    const data2 = await getData2(data1);
    const data3 = await getData3(data2);
    console.log(data3);
  } catch (error) {
    console.log(error.message);
  }
  console.log("data 가져오기 종료");
}
getData();