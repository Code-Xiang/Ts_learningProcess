let str11 = "hello"; // let str11: string
let arr11 = [1, 2, 3]; // let arr11: number[]
let obj11 = { name: "hello" }; // let obj11: { name: string }

let str12 // let str12: any
str12 = "hello";
str12 = 1;

type s = string | number; // 类型别名
let str13: s = "hello";
type s1 = (name:string) => void;
// 和Interface很像但是有一些区别
interface s2 extends s3{
    // name: string;
}
interface s3 {
    name: string;
}
// type 是没有办法继承extends的
type s4 = s2 & s3; // 交叉类型和在一起
// interface 遇到同名的属性，会进行合并
interface s5 {
    name: string;
}
interface s5 {
    age: number;
}
// extends 包含的意思
// 左边的值 会作为右边类型的子类型
// 1. any unkonwn
// 2. Object
// 3. Number
// 4. String number
// 5. never
type num = 1 extends number ? 1 : 0; //type num = 1
type num1 = 1 extends unknown ? 1 : 0; //type num = 1
type num2 = 1 extends never ? 1 : 0; //type num = 0


