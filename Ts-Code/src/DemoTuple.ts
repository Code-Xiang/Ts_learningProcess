let arr:[number,boolean] = [1,true];
arr[0] = 666  
// 如果不想更改，则只能加上readonly
let arr1: readonly[number,boolean] = [1,true];
// arr1.[0] = 666

type first = typeof arr[0] // 取到元祖第一个类型number
// 读取length
type length = typeof arr.length
// 或者
type length1 = typeof arr['length']

let arr2: readonly[x:number,x?:boolean] = [1];
let excel:[string,string,number][] = [
    ['xxw','man',25],
    ['xxw','man',25],
    ['xxw','man',25],
    ['xxw','man',25],
]
