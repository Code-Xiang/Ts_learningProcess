// 内置对象
// 1.Ecma 内置的几个对象
let num:Number = new Number(1)
let date:Date = new Date()
let reg:RegExp = new RegExp(/\w/)
let error:Error = new Error('错了')
let xhr:XMLHttpRequest = new XMLHttpRequest()

// HTML(元素名称) Element HTMLElement Element
let div = document.querySelector('div')
let div1:NodeList = document.querySelectorAll('footer')
let div2:NodeListOf<HTMLDivElement|HTMLElement> = document.querySelectorAll('div')


let local:Storage = localStorage
let location1:Location = location
let promise:Promise<number> = new Promise((r) => r(1))
let promise2:Promise<string> = new Promise((r) => r('1'))
let cookie:string = document.cookie
// promise.then(res => {
//     res
// })

