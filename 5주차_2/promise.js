//promise chaining
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

console.log("data 가져오기 시작");
getData1()
  .then((data) => getData2(data))
  .then((data) => getData3(data))
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message))
  .finally(() => {
    console.log("data 가져오기 종료");
  });