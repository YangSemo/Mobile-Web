/* 'events' 모듈을 이용한 이벤트 처리 */
//'events' 모듈 참조
const EventEmitter = require("events");

/* 이벤트 객체 생성
   - 생성된 이벤트 객체의 메서드를 이용하여 이벤트 처리 */
const myEvent = new EventEmitter();

// 'event1' 이벤트 설정
//addListener('이벤트명', 콜백함수); == on('이벤트명', '콜백함수')
myEvent.addListener("event1", () => {
  console.log("이벤트 1");
});

//'event2' 이벤트 설정
myEvent.on("event2", () => {
  console.log("이벤트 2");
});
//'event2' 이벤트 추가(이벤트 객체 하나에 복수 이벤트 설정가능)
myEvent.on("event2", () => {
  console.log("이벤트 2 추가");
});

//이벤트 전달
myEvent.emit("event1");
myEvent.emit("event2");

//listenerCount('event2'): 연결된 'event2'의 수
console.log(myEvent.listenerCount("event2"));

//once(): 한번만 실행되는 이벤트
myEvent.once("event3", () => {
  console.log("이벤트 3");
});

//이벤트 전달
myEvent.emit("event3");
myEvent.emit("event3");

//'event4' 이벤트 설정
myEvent.on("event4", () => {
  console.log("이벤트 4");
});

//removeAllListeners(): 연결된 이벤트 제거
myEvent.removeAllListeners("event4");

//이벤트 호출
myEvent.emit("event4");

//listener 콜백함수 선언
const listener = () => {
  console.log("이벤트 5");
};

//'event5' 이벤트 설정
myEvent.on("event5", listener);
myEvent.emit("event5");
