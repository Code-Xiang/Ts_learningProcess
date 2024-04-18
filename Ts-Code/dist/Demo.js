"use strict";
var Num = 10;
var Str = "Hello World";
function sum(x, y) {
    return x + y;
}
sum(1, 2);
let mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
let t = mySearch("hello", "l");
console.log("t::👉", t);
function buildName(firstName = 'Jim', lastName) {
    return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let cat = buildName(undefined, 'Cat');
console.log("tomcat::👉", tomcat);
console.log("cat::👉", cat);
function push(array, ...items) {
    items.forEach(function (item) {
        array.push(item);
    });
}
let a = [];
push(a, 1, 2, 3);
// function reverse(x: number): number;
// function reverse(x: string): string;
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
console.log("reverse::👉", reverse(123));
console.log("reverse::👉", reverse('123'));
console.log("", typeof reverse('123') === 'number');
