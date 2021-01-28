// function 객체 메소드 call

global.name = 'nodejs';

let f = function(s) {
    console.log(s + ":" + this.name);
}

f('hello');

let o = {
    name: 'kickscar'
}

f.call(o, 'hi');