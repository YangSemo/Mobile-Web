// 파일 데이터 쓰기
const fs = require("fs");
const data = "안녕하세요. 파일쓰기 입니다!!!";
// writeFile(파일명, 데이터, 콜백함수)
fs.writeFile(__dirname + "/output.txt", data, (err) => {
  if (err) {
    console.log("에러 발생.");
    console.dir(err);
    return;
  }
  console.log("데이터 쓰기 완료");
});
