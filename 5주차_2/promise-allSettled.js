
// Promise.all()과 동일 형태
// 배열로 받은 모든 비동기 작업의 fullied, reject 여부와 상관없이
// 작업이 모두 완료되었다면 해당 작업의 결과를 반환
// first promise
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("The first promise has resolved");
      resolve(100);
    }, 1000);
  });

//second promise
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
    //   console.log("The second promise has resolved");
    //   resolve(300);
      console.log("The second promise has rejected");
      reject(new Error("The second promise has failed"));
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
Promise.allSettled([p1, p2, p3])
  .then((results) => {
      // tot: 전체값, curr: 현재값, 0: tot의 초기값
    const total = results.reduce((tot, curr) => tot + curr.value, 0);
    console.log("Promise.all result:");
    console.log(results);
    console.log(`total: ${total}`);
  })
  .catch((error) => console.log(error.message))
  .finally(() => {
    console.log("end of work");
  });