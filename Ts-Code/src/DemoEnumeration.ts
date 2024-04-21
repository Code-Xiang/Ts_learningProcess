// 数字定义枚举的方式
enum Color {
    Red,
    Green,
    Blue
}

console.log(Color.Red); // 0
console.log(Color.Green); // 1
console.log(Color.Blue); // 2

// 自动增长数字枚举
enum Color1 {
    Red = 1,
    Green,
    Blue
}
console.log(Color1.Red); // 1
console.log(Color1.Green); // 2
console.log(Color1.Blue); // 3

// 自定义数字枚举
enum Color2 {
    Red = 1,
    Green = 2,
    Blue = 4
}
console.log(Color2.Red); // 1
console.log(Color2.Green); // 2
console.log(Color2.Blue); // 4

// 字符串枚举
enum Color3 {
    Red = 'red',
    Green = 'green',
    Blue = 'blue'
}
console.log(Color3.Red); // red
console.log(Color3.Green); // green
console.log(Color3.Blue); // blue
 

// 异构枚举
enum Color4 {
    Red = 1,
    Green = 'green',
    Blue = 'true'
}
console.log(Color4.Red); // 1
console.log(Color4.Green); // green
console.log(Color4.Blue); // true
// 接口枚举
enum Color5 {
    no = 'no',
    yes = 1
}
interface C {
    red: Color5.yes;
}

let objE: C= {
    red: Color5.yes
}

// const 枚举
const enum Types {
    success,
    fail,
}

let code:number = 0;
if (code === Types.success) {

}

// 反向映射
enum Types1 {
    success // 字符串不支持反向映射
}

let index:number = Types1.success;
let key:string = Types1[index];
console.log(`value:${index},key:${key}`); // value:0,key:success
