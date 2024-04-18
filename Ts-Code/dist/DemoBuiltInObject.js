"use strict";
// 内置对象
// 1.Ecma 内置的几个对象
let num = new Number(1);
let date = new Date();
let reg = new RegExp(/\w/);
let error = new Error('错了');
let xhr = new XMLHttpRequest();
// HTML(元素名称) Element HTMLElement Element
let div = document.querySelector('div');
let div1 = document.querySelectorAll('footer');
let div2 = document.querySelectorAll('div');
let local = localStorage;
let location1 = location;
let promise = new Promise((r) => r(1));
let promise2 = new Promise((r) => r('1'));
let cookie = document.cookie;
// promise.then(res => {
//     res
// })
