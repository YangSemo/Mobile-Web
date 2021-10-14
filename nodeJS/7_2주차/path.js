// path 내장 모듈 사용
// path: 파일 패스를 만들 때 또는 파일 패스안에 특정한 정보를 확인할 때 사용
const path = require("path");

const dires = ["Users", "user", "docs"];
// dir 배열의 요소를 조인
const dirStr = dires.join();
console.log(`dir: ${dirStr}`);

// path 구분자를 '\'로 지정(기본은 ,로 구분)
const dirStr2 = dires.join(path.sep);
console.log(`dir: ${dirStr2}`);

//path.join() : 디렉토리와 파일을 묶어 path를 만듦
const filepath = path.join("/Users/user", "notepad.exe");
console.log(`filepath: ${filepath}`);

//디렉토리 path
const dirname = path.dirname(filepath);
console.log(`dirname: ${dirname}`);

//파일명 path
const basename = path.basename(filepath);
console.log(`basename: ${basename}`);

//확장자명 path
const extname = path.extname(filepath);
console.log(`extname: ${extname}`);
