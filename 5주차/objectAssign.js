{
    const user= {
        id: 1001,
        name:"sony",
        age:29,
    };

    const user2= user; // 참조변수 할당
    console.log(Object.is(user, user2));

    const cloneUser= Object.assign({}, user); // 객체 복제
    console.log(Object.is(user,cloneUser));
    console.dir(cloneUser);
}

{
    const fruit1 = {color:"red", price:1000};
    const fruit2 = {color:"blue", size:"big"};

    // field명이 같으면 마지막 object field로 덮어씀
    const cloneFruit = Object.assign({}, fruit1, fruit2);

    console.dir(cloneFruit);
}

// singer에 singerInfo 복제하면서 필드 추가
{
    const singer = {id: 1001, name:"아이유"};
    const singerInfo={phone:"010-1234-1234", mail:"iu@dosjk.com"};

    Object.assign(singer,singerInfo, {agency:"EDAN"}); // 복제 및 field 추가

    console.dir(singer);
}