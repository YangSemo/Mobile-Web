/**
 * Nullish Coalescing Operator (ES11, ES2020)
 * 널 병합 연산자 (??)는 연산자의 왼쪽 피연산자 값이 null 또는 undefined이 아니면,
 * 그 피연산자의 결과값을 반환하고,
 * null 또는 undefined이면 오른쪽 피연산자의 결과값을 반환함
 *
 * [형식]
 *  const result = leftExpr ?? rightExpr;
 *   ==> 'leftExpr'이 null, undefined이면 result = 'rightExpr',
 *        아니면  result = 'leftExpr'
 *       ('leftExpr'이 null, undefined일 때만 'rightExpr' 할당)
 */

{
    {
        //논리 OR 연산자
        //false: false, '', 0, null, undefined
        const name = "";
        const userName = name || "Guest";
        console.log(userName); //Guest, 공백("")으로 처리하고 싶은데 "Guest" 출력
        const num = 0;
        const message = num || "undefined";
        console.log(message); // undefined
    }

      /* null 병합 연산자
       - null 병합 연산자 (??)는 연산자의 왼쪽 피연산자 값이 null 또는 undefined일 때만 
         result = rightExpr  */
    {
        const name = "";
        const userName = name ?? "Guest";
        console.log(userName); //""
        const id = null;
        const userId = id ?? "undefined";
        console.log(userId); //undefined
        const num = 0;
        const message = num ?? "undefined";
        console.log(message); // 0
    }

    {
        //Nullish Coalescing 연산자를 사용한 코드 간략화
        function showMessage(text) {
          let message = text;
          if (text == null || text == undefined) {
            message = "Nothing to message";
          }
          console.log(message);
        }
        showMessage("Hi!");
        showMessage(undefined);
        showMessage(null);
        showMessage("");
      }

      {
        //nullish coalescing code
        function printMessage(text) {
          const message = text ?? "Nothing to message";
          console.log(message);
        }
        printMessage("Hi!");
        printMessage(undefined);
        printMessage(null);
        printMessage("");
      }

      {
        //함수의 실행값에 따라 다른 함수 실행
        const result = getId() ?? signUp();
        console.log(result);
        function getId() {
            // return null;
          return 1001;
        }
        function signUp() {
          return "회원 가입합니다.";
        }
      }
}