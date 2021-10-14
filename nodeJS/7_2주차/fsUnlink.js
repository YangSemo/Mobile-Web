// 파일 데이터 삭제
const fs = require("fs");
//unlink(파일명, 콜백함수) 파일 삭제
const file = __dirname + "/output.txt";
fs.unlink(file, (err) => {
  //파일 삭제 실패
  if (err) return console.log("파일 삭제 에러 발생.");
  //파일 삭제 성공
  console.log("데이터 삭제 완료");
  console.log(`successfully deleted ${file}`);
});
