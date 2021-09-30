/* 
    - Symbol은 변경 불가능한 원시 타입의 값이며, 다른 값과 중복되지 않는 고유 값
    - Symbol은 Object의 유일한 프로퍼티 값을 만들기 위해서 사용(scope 안에서 사용)
*/

{
    /*
        - 원본 Object의 프로퍼티 키는 변경하지 않고, 속성 추가
        - 프로퍼티 은닉하기
    */
    const user= {
        id: 1001,
        name:"sony",
        age:29,
    };

    console.log(user);

    // gender symbol 생성()
    const gender = Symbol("gender");
    // 'gender' symbol-keyd property 설정
    user[gender]="male";

    // showInfop symbol 생성
    const showInfo = Symbol("showInfo");

    // 생성한 Symbol로 showInfo 메서드 선언
    user[showInfo] = function () {
        console.log(`id:${this.id}, name:${this.name}, age:${this.age}, gender:${this[gender]}`);
    }
    console.log(user);

    // showInfo 메서드 호출
    user[showInfo]();

    // Symbol key와 value는 외부로 노출되지 않음
    const userKeys = Object.keys(user);
    console.log(userKeys);

    const userValues = Object.values(user);
    console.log(userValues);

    // user property 출력
    for (let key in user) {
        console.log(`user key: ${key}`);
    }

    // symbol key 보는 방법
    console.log(Object.getOwnPropertySymbols(user));
    console.log(Reflect.ownKeys(user));


    // 전역 Symbol
    // 전역 Symbol registry에 저장되며 전체 프로그램에서 사용
    // Symbol() 함수는 호출할 때마다 다른 Symbol을 생성
    const sId = Symbol.for("id");
    const sId2 = Symbol.for("id");
    console.log(sId==sId2);

    // Symbol.keyFor()는 심볼 값을 인수로 받아서 전역 symbol 레지스토리에 저장된 심볼 값 키를 가져올 수있음
    console.log(Symbol.keyFor(sId));
    console.log(Symbol.keyFor(sId2));

}



