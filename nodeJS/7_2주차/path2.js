const path = require("path");

//현재 파일 경로를 전역객체(__filename)에서 얻음
const filePath = __filename;
console.log("path.sep:", path.sep); //경로 구분자
console.log("path.delimiter:", path.delimiter); //환경변수의 구분자
console.log("------------------------------");
console.log("path.dirname():", path.dirname(filePath)); //파일 경로
console.log("path.extname():", path.extname(filePath)); //확장자
console.log("path.basename():", path.basename(filePath)); //파일명(확장자 포함)

//파일명(확장자 제외) - (경로, 확장자)
console.log(
  "path.basename():",
  path.basename(filePath, path.extname(filePath))
);
console.log("------------------------------");

//파일 경로를 객체의 속성으로 분리(root, dir, base, ext, name)
const filePathObject = path.parse(filePath);
console.log("path.parse()", filePathObject);

//path.parse()한 객체를 파일 경로로 합침
console.log(
  "path.format():",
  path.format({
    dir: filePathObject.dir,
    name: filePathObject.name,
    ext: filePathObject.ext,
  })
);
