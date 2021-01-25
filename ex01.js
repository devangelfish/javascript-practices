/*
1. 변수와 데이터 타입
1-1. 기본타입(primitive type), 유사객체
    1) undefined
    2) boolean
    3) string
    4) number

1-2. function
1-3. 객체(object): new 생성자 함수를 사용해서 객체를 생성

2. 자바스크립트 객체를 구분하는 또 다른 방법
2-1. 내장객체(built-in, Native) 객체: 자바스크립트 엔진에 미리 정의되어 있는 객체
    Number, boolean, Data, RegEx, ..... 와 같은 생성자 함수
    parseInt(), setTimeout, setInterval(), ...와 같은 일반 함수
    전역객체(global, window)
2-2. 호스트 객체
    ex)호스트가 브라우인 경우
        document, location, XmlHttpReqeust
2-3. 사용자 객체
    자바스크립트 코드가 엔진에서 실행되면서 생성되는 런타임 객체


*/

u = undefined;
i = 10; 
b = true;
s = 'Hello World';
f = function() {
};
o = {};
a = [1, 2, 3]

console.log(u + ":" + typeof(u));
console.log(i + ":" + typeof(i));
console.log(b + ":" + typeof(b));
console.log(s + ":" + typeof(s));
console.log(typeof(f));
console.log(o + ":" + typeof(o));
console.log(a + ":" + typeof(a));

console.log("===================================================");

var i2 = new Number(10);
var b2 = new Boolean(false);
s2 = new String('Hello World');
f2 = new Function("a", "b", "return a + b");
o2 = new Object();
a2 = new Array();

console.log(i2 + ":" + typeof(i2));
console.log(b2 + ":" + typeof(b2));
console.log(s2 + ":" + typeof(s2));
console.log(typeof(f2));
console.log(o2 + ":" + typeof(o2));
console.log(a2 + ":" + typeof(a2));

// 원시타입과 원시타입을 wrapper 객체는 별 구분없이 연산 가능하다.
console.log(i + i2);
console.log(s + s2);

// 원시타입도 메소드 호출이 가능하다
// 원시타입에 메소드가 호출 될 때 임시객체가 만들어져서 메소드를 호출한 후 사라진다.: 유사객체
console.log(b.valueOf()); 
console.log(new Boolean(b).valueOf()); 

globalThis.console.log("hello");
