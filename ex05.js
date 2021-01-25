/*
자바스크립트 객체는 function 타입과 object 타입 2가지가 있다.
그런데, 보통 function 타입 객체는 함수라고 부른다.()
따라서 자바스크립트 객체라고 부르는 것은 object 타입의 객체를 가리킨다.

*/

// 생성방법1 - new + 생성자 함수를 사용하는 방법
let o1 = new Object();
o1.name = '둘리';
o1.age = 10;
o1.another = new Object();
o1.another.name = '마이콜';
o1.another.age = 30;

console.log(o1);

// 생성방법2 - {} literal를 사용하는 방법
let o2 = {};
o2.name = '둘리';
o2.age = 10;
o2.another = {};
o2.another.name = '마이콜';
o2.another.age = 30;

console.log(o2);

// 생성방법3 - (J)ava(S)cript(O)bject(N)otation : 자바스크립트 객체 표기법을 사용하는 방법
let o3 = {
    name: '둘리',
    age: 10,
    another: {
        name: '마이콜',
        age: 30
    }
}

console.log(o3);

// XmlHttpRequest 호스트(브라우저) 객체를 사용해서 통신에 많이 사용한다.
let response = '{"no": 1, "name": "문재범", "email": "jbm1871@naver.com"}';
let user = eval("(" + response + ")");
console.log(typeof(user));
console.log(user);
