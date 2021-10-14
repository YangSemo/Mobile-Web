/* 디렉토리 생성 및 삭제 */
//fs 모듈 참조
const fs = require("fs");
//폴더 이름
const folder = __dirname + "/folder";
/* fs.access(path, options, callback)
   - options: F_OK: 파일(폴더) 존재여부, W_OK:쓰기 권한여부, R_OK: 일기권한여부 */
fs.access(
  folder,
  fs.constants.F_OK | fs.constants.W_OK | fs.constants.R_OK,
  (err) => {
    //폴더가 없으면
    if (err) {
      if (err.code === "ENOENT") {
        console.log("폴더 없음");
        //폴더 생성
        fs.mkdir(folder, (err) => {
          if (err) throw err;
        });

        console.log("폴더 만들기 성공");
        //파일 오픈(없으면 생성)하여 fd(file descriptor)
        fs.open(folder + "/file.js", "w", (err, fd) => {
          if (err) throw err;
          console.log("파일 만들기 성공", fd);
        });
      }
    } else {
      //   console.log("폴더 있음");
      //디렉토리 삭제({ recursive: true }: 비어 있지 않은 dir 삭제 옵션)
      fs.rmdir(folder, { recursive: true }, (err) => {
        if (err) return console.error(err);
        console.log(`${folder} 폴더를 삭제했습니다.`);
      });
    }
  }
);
