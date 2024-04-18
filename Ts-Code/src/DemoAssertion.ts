/* 
函数断言 - "Function Assertion"
联合类型 - "Union Types"
交叉类型 - "Intersection Types"
*/

// 声明变量使用联合类型
let phone: number|string = 1212123231

// 声明函数变量使用联合类型
let fn = function(type:number | boolean):boolean {
    // 使用强制转换 将后端传出的数字强转成true或者false
    return !!type
}
let result = fn(1)
console.log(result);

// 交叉类型
interface People {
    name: string
    age: number
}
interface Man {
    sex: number
}

const xxw = (man: People & Man):void => {
    console.log(man); // { name: 'heihei', age: 108, sex: 1 }
}
xxw({
    name: 'heihei',
    age: 108,
    sex: 1
})
// 使用类型断言
let fn1 = function (num: number | string): void {
    console.log((num as string).length);
}
fn1('12131') // 5
fn1(12131) // undefined 说明断言只能欺骗ts并不能避免运行时候的错误

interface A {
    run: string
}

interface B {
    build: string
}

let fn2 = (type: A | B):void => {
    console.log((type as A).run);
}
fn2({
    build: '122'
}) // undefined 依旧说明了断言类型不能乱用

// (window as any).abc = 123
