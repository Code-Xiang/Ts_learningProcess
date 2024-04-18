"use strict";
function add(a, b) {
    return a + b;
}
console.log('add', add(1, 1)); // add 2
// 箭头函数定义
const add0 = (a, b) => a + b;
console.log('add0', add(1, 1)); // add0 2
// 函数参数默认值
function add1(a = 10, b = 20) {
    return a + b;
}
console.log('add1', add1(1)); // add1 3
function add3(user) {
    return user;
}
console.log('add3:', add3({ name: 'xxw', age: 24 }));
// this 可以定义this的类型 在js中无法使用 必须是第一个参数定义this的类型
let obj = {
    user: [1, 2, 3],
    add(num) {
        this.user.push(num);
    }
};
console.log(obj); // { user: [ 1, 2, 3 ], add: [Function: add] }
// 函数重载
let user = [1, 2, 3];
function findNum(ids) {
    if (typeof ids == 'number') {
        return user.filter(v => v == ids);
    }
    else if (Array.isArray(ids)) {
        user.push(...ids);
        return user;
    }
    else {
        return user;
    }
}
console.log(findNum()); // [ 1, 2, 3 ]
console.log(findNum(3)); // [ 3 ]
console.log(findNum([4, 5, 6])); // [ 1, 2, 3, 4, 5, 6 ]
