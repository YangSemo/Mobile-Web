/* 파일 읽기 */
//fs 모듈 참조
const fs = require("fs");
//readFileSync(동기식) : 파일을 다 읽을 때까지 대기- 리턴값으로 전달
try {
  // __dirname : 스크립트와 동일한 디렉토리에서 로드
  const data = fs.readFileSync(__dirname + "/package.json", "utf8");
  console.log(data);
} catch (error) {
  console.log(error);
}
console.log("=================");
/* 파일readFile(비동기식 : 파일을 다 읽을 때까지 기다리지 않고 다른 작업을 처리하고,
   파일을 다 읽으면 콜백함수로 data 전달*/
fs.readFile(__dirname + "/package.json", "utf8", (err, data) => {
  //파일 읽기 실패
  if (err) return console.log(err);
  //파일 읽기 성공
  console.log(data);
});
