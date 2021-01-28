// Date

// 현재 시간
let now = new Date();
console.log(now);

// 2021년 01월 27일
let d = new Date(2011, 0, 27)
console.log(d);

// 2021년 01월 01일 12:30:40
d = new Date(2021, 0, 1, 12, 30, 40);
console.log(d);

// 객체메서드
console.log(
    "년도1:" + (d.getYear() + 1900) + '\n' +
    "년도2:" + d.getFullYear() + '\n' +
    "월:" + (d.getMonth() + 1) + '\n' +
    "일:" + d.getDate() + '\n' +
    "시:" + d.getHours() + '\n' +
    "분:" + d.getMinutes() + '\n' +
    "초:" + d.getSeconds() + '\n' +
    "밀리초:" + d.getMilliseconds() + '\n'
);

d.setFullYear(2022);
console.log(d);