// 泛型约束 在类型后面跟着 extends 泛型
function add211<T extends number>(x: T, y: T) {
    return x+y;
}
add211(1,2)
interface Len {
    length: number;
}

function fn11<T extends Len>(a:T) {
    a.length
}
fn11('111')
fn11([1,2,3])
// fn11()

// 泛型约束 约束泛型的key
let obj111 = {
    name: 'sss',
    sex: 'nv'
}
// age keyof 将对象的key获取成一个联合类型
type Key = keyof typeof obj111
// 如果想约束对象的key，就要想到keyof这个东西
function ob<T extends object,K extends keyof T>(obj:T,key:K) {
    return obj[key]
}
ob(obj111,'name')

// keyof 高级用法
interface Datall {
    name: string;
    age: number;
    sex: string;
}
type Options<T extends object> = {
   readonly [key in keyof T]?: T[key]
}
type B22 = Options<Datall>

