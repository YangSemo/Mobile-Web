const sony = {
    name: "sony",
    age: 29,
  };
  function printValue(obj, key) {
    console.log(obj.key); // obj 안에 key 프로퍼티 없음 => undefined
    console.log(obj[key]);
  }
  
  // 동적으로 프로퍼티 관리할 때 브라켓 많이 씀
  printValue(sony, "name");
  printValue(sony, "age");