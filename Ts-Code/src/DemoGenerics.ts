// import { resolve } from "path"

// 动态类型
function xxw11(a:number, b:number):Array<number> {
    return [a,b]
}
function xxw12(a:string, b:string):Array<string> {
    return [a,b]
}
// 频繁定义

function xxw21<T>(a:T,b:T):Array<T>{
    return [a,b]
}
// number
xxw21(1,2)
xxw21('1','2')
xxw21(false,true)

type A5<T> = string | number| T
let a5:A5<boolean> = false

interface Data11<T> {
    msg: T
}
let data11:Data11<number> = {
    msg: 1
}

// 泛型高级用法

function add1111<T,K>(a:T,b:K):Array<T|K> {
    return [a,b]
}

// add1111(a,false)
// 泛型默认值

function A222<T=number>(a:T):T {
    return a
}

// 泛型应用
const axios = {
    get<T>(url:string):Promise<T> {
        return new Promise((resolve,reject)=> {
            let xhr:XMLHttpRequest = new XMLHttpRequest()
            xhr.open('GET', url)
            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4 && xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText))
                }
            }
            xhr.send(null)
        })
    }
}
interface Data21 {
    message:string
    code:number
}
axios.get<Data21>('./data.json').then(res => {
    console.log(res.code)
})