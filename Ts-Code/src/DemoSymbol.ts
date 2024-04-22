import { ADDRCONFIG } from "dns";

let a1:symbol = Symbol(1);
let a2:symbol = Symbol(1);

console.log(a1,a2); // Symbol(1) Symbol(1)
console.log(a1 === a2); // false;
// for Symbol.for() 全局symbol有没有注册过这个key 如果有直接 返回 如果没有就创建
console.log(Symbol.for('xw')=== Symbol.for('xw')); // true;

// 使用场景
let obj091 = {
    name: 2,
    [a1]: 111,
    [a2]: 222
}
console.log(obj091); // { name: 2, [Symbol(1)]: 111, [Symbol(1)]: 222 } //symbol值一摸一样值没有被覆盖
//如何获取symbol的key for in 遍历不到
for (let key in obj091) {
    console.log(key); // name
}
console.log(Object.keys(obj091)); // 读不到
console.log(Object.getOwnPropertyNames(obj091)); // 读不到
// 如何获取symbol的key
console.log(Object.getOwnPropertySymbols(obj091));

Reflect.ownKeys(obj091).forEach(key => {
    console.log(key); // Symbol(1) Symbol(1)
    // console.log(obj091[key]); // 111 222
})
 
console.log(Reflect.ownKeys(obj091)); // [ 'name', Symbol(1), Symbol(1) ]


