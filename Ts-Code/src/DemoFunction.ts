function add(a: number, b: number): number {
    return a+b
}
console.log('add',add(1,1)) // add 2

// 箭头函数定义
const add0 = (a:number,b:number):number => a+b
console.log('add0', add(1,1)) // add0 2
// 函数参数默认值
function add1(a: number = 10, b: number = 20): number {
    return a+b
}
console.log('add1', add1(1)) // add1 3

// 默认参数可选的
// function add2(a?: number, b?: number): number {
//     return a + b
// }
// console.log('add2', add2(1,2)) // add1 3
interface User {
    name: string
    age: number
}
function add3(user:User):User {
    return user
}

console.log('add3:', add3({name: 'xxw', age: 24}));

interface Obj {
    user: number[]
    add:(this:Obj,num:number)=>void
}
// this 可以定义this的类型 在js中无法使用 必须是第一个参数定义this的类型
let obj:Obj = {
    user:[1,2,3],
    add(this:Obj,num:number) {
        this.user.push(num)
    }
}
console.log(obj); // { user: [ 1, 2, 3 ], add: [Function: add] }

// 函数重载
let user:number[] = [1,2,3]
function findNum(add:number[]):number[] // 如果传入的是一个number类型的数组那就做添加
function findNum(id:number):number[] // 如果传入了id就是单个查询
function findNum():number[] // 如果没有传入东西就是查询全部
function findNum(ids?:number | number[]): number[] {
    if(typeof ids == 'number') {
        return user.filter(v=>v == ids)
    } else if(Array.isArray(ids)) {
        user.push(...ids)
        return user
    } else {
        return user
    }
}
console.log(findNum()); // [ 1, 2, 3 ]
console.log(findNum(3)); // [ 3 ]
console.log(findNum([4,5,6])); // [ 1, 2, 3, 4, 5, 6 ]