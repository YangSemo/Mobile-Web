// url 모듈에서 URL 생성자 가져오기
const { URL } = require("url");

//주소 문자열
const urlStr =
  "http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript";

//URL 생성자를 이용하여 주소 문자열을 파싱하여 objUrl 주소 객체 생성
const objUrl = new URL(urlStr);
console.log("objUrl:", objUrl);
console.log("=========================");
console.log("href:", objUrl.href);
console.log("host:", objUrl.host);
console.log("=========================");

//searchParams: URL 객체의 쿼리 매개변수에 접근하여 URLSearchParams 객체를 반환하는 메서드
//objUrl URL 객체의 searchParams 출력
console.log("searchParams:", objUrl.searchParams);

//getAll('key'): key에 해당하는 모든 value 가져옴
console.log("searchParams.getAll():", objUrl.searchParams.getAll("category"));

//get('key'): key에 해당하는 첫 번째 value 가져옴
console.log("searchParams.get():", objUrl.searchParams.get("limit"));

//has('key'): 해당 키가 있는지 검사(true/false)
console.log("searchParams.has():", objUrl.searchParams.has("page"));

//keys(): searchParams의 모든 key를 Iterator(컬렉션 반복 객체)객체로 가져옴
console.log("searchParams.keys():", objUrl.searchParams.keys());

//values(): searchParams의 모든 values를 Iterator(컬렉션 반복 객체)객체로 가져옴
console.log("searchParams.values():", objUrl.searchParams.values());

//searchParams 객체를 문자열로 변환
console.log("searchParams.toString():", objUrl.searchParams.toString());
