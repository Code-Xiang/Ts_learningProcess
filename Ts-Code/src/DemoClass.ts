// 1. class 的基本用法 继承 和 类型约束 implements
// 2. class 的修饰符 readonly static protected private public
// 3. super 原理
// 4. 静态方法
// 5. get set
// private 只能在内部使用
// protected 给子类和内部去使用

import { log } from "console"

// public 哪里都可以用 
interface Options {
    el:string | HTMLElement
}
interface VueCls {
    options:Options
    init(): void
}
interface Vnode {
    tag: string // div section header
    text?: string // 123
    children?: Vnode[]
}
// 虚拟dom 简单版
class Dom {
    constructor(name: string) {

    }
    // 创建节点的方法
    private createElement(el:string) {
        return document.createElement(el)
    }
    // 填充文本的方法
    private setText (el: HTMLElement, text: string | null) {
        el.textContent = text
    }
    // 渲染函数
    protected render (data: Vnode) {
        let root = this.createElement(data.tag);
        if (data.children && Array.isArray(data.children)) {
            data.children.forEach(item => {
                let child = this.render(item)
                root.appendChild(child) // 递归rende
            })
        } else {
            this.setText(root, data.text || null)
        }
        return root
    }
}
class Vue extends Dom implements VueCls{
    options: Options;
    static a: string; //  属性也可以使用static
    constructor(options:Options) {
        super('xxw'); // 父类的prototype.constructor.call(this) // 可以给父类传参
        this.options = options;
        this.init()
    }
    static version () { // 方法也可以使用static
        return '0.0.1'
    }
    // 所有方法模式是  public
    public init(): void {
        // 虚拟dom 就是通过js 去渲染我们这个真实dom
        let data:Vnode = {
            tag: 'div',
            children: [
                {
                    tag: 'span',
                    text: '456'
                },
                {
                    tag: 'section',
                    text: '我是子节点2'
                }
            ]
        }
        // let app = typeof this.options.el === 'string' ? document.querySelector(this.options.el) : this.options.el;
        let app = typeof this.options.el === 'string' ? document.querySelector(this.options.el) : this.options.el;
        app?.appendChild(this.render(data))
    }
}
new Vue({ 
    el: '#app'
})
Vue.version()

Promise.all // 直接调用，则是静态方法


