// 순서가 보장되지 않아도 되는 여러 개의 비동기 작업을 병렬로 처리
//Promise.all()
//first promise
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("The first promise has resolved");
      resolve(100);
    }, 1000);
  });

//second promise
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("The second promise has resolved");
      resolve(300);
    //   console.log("The second promise has rejected");
    //   reject(new Error("The second promise has failed"));
    }, 3000);
  });

//third promise
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("The third promise has resolved");
      resolve(500);
    }, 2000);
  });

//Promise.all() - 비동기 작업 병렬 처리
Promise.all([p1, p2, p3])
  .then((results) => {
      // tot: 전체값, curr: 현재값, 0: tot의 초기값
    const total = results.reduce((tot, curr) => tot + curr, 0);
    console.log("Promise.all result:");
    console.log(results);
    console.log(`total: ${total}`);
  })
  .catch((error) => console.log(error.message))
  .finally(() => {
    console.log("end of work");
  });