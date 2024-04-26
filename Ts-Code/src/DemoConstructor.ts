import { log } from "console";

// 1.生成器 用法一样
function *gen() {
  yield Promise.resolve('xxw');
  yield 'xw S'; // 同步/异步
  yield 'xw M';
  yield 'xw L';
} 

const man = gen();
console.log(man.next());
console.log(man.next());
console.log(man.next());
console.log(man.next());
console.log(man.next());
// { value: Promise { 'xxw' }, done: false }
// { value: 'xw S', done: false }
// { value: 'xw M', done: false }
// { value: 'xw L', done: false }
// { value: undefined, done: true }

// 2.迭代器
// 3. set map
let set:Set<number> = new Set([1,1,2,2,5,6,7,8,9]); // 删除重复元素
console.log(set); // Set(7) { 1, 2, 5, 6, 7, 8, 9 }

let map:Map<any,any> =new Map()
let Arr3 = [1,2,3]
map.set(Arr3, 'xxw')
console.log(map); // Map(1) { [ 1, 2, 3 ] => 'xxw' }
console.log(map.get(Arr3)); // xxw

//
function args1() {
    console.log(arguments); // 伪数组/类数组
}
// let list = document.querySelector('div') // 伪数组
// 没有数组那些方法，面对这些多类数组上方法，需要一种方法可以遍历这些
// 4.迭代器
const each = (value:any) => {
    let It:any = value[Symbol.iterator]();
    let next:any = {done:false}
    while(!next.done) {
        next = It.next();
        if(!next.done){
            console.log(next.value);
        }
    }
}
each(map); // [ [ 1, 2, 3 ], 'xxw' ]

// 5.迭代器的语法糖
// 6.for of 对象不能用的
for (let value of set) {
    console.log(value);
}
// 7.解构 底层原理也是调用 iterator
let a111= [4,5,6]
let copy11 = [...a111]
console.log(copy11);
// 8. 对象支持for of
let obj22 = {
    max:5,
    current: 0,
    [Symbol.iterator]() {
        return{
            max: this.max,
            current:this.current,
            next() {
                if (this.current == this.max) {
                    return {
                        value: undefined,
                        done: true
                    }
                } else {
                    return {
                        value: this.current++,
                        done: false
                    }
                }
            }
        }
    }
}
for (let value of obj22) {
    console.log(value);
}

