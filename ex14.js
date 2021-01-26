// URL 다루기
let url = 'http://localhost:8080/mysite3/user?n=안대혁';

// 1. escape (x) : URL를 전부 encoding, deprecated
let url2 = escape(url);
console.log(url2);

// 2. encodeURI (o) :
let url3 = encodeURI(url)
console.log(url3);

// 3. encodeURIComponent
let url4 = encodeURIComponent(url);
console.log(url4);

// 4. encodeURIComponet 사용 예

var o = {
    no: 10,
    name: '안대혁',
    email: 'kickscar@gmail.com'
}

url = 'http://localhost:8080/mysite3/user?no=' + encodeURIComponent(o.no) + "&name=" + encodeURIComponent(o.name) + "&email=" + encodeURIComponent(o.email);
console.log(url);

let toQueryString = function(o) {
    let qs = [];
    for(property in o) {
        qs.push(property + "=" + encodeURIComponent(o[property]));
    }

    return qs.join('&');
}
url = 'http://localhost:8080/mysite3/user'
url += '?';
url += toQueryString(o);
console.log(url);
