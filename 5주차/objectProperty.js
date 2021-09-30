{
    const user= {
        id: 1001,
        name:"sony",
        age:29,
        showInfo: function() {
            console.log(`id:${id}, name:${name}, age:${age}`);
        },
    };

    // object key 배열 반환
    // 형식: const userKeys = Object.keys(obj)
    const userKeys = Object.keys(user);
    console.log(userKeys);

    // object value 배열 반환
    const userValues = Object.values(user);
    console.log(userValues);

    // object keys-values 배열 반환
    const userEntries = Object.entries(user);
    console.log(userEntries);

    // object keys-values 배열을 객체로 생성
    const userObj = Object.fromEntries(userEntries);
    console.log(userObj);
}