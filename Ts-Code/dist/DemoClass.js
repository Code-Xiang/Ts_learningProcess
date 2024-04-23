"use strict";
// 虚拟dom 简单版
class Dom {
    // 创建节点的方法
    createElement(el) {
        return document.createElement(el);
    }
    // 填充文本的方法
    setText(el, text) {
        el.textContent = text;
    }
    // 渲染函数
    render(data) {
        let root = this.createElement(data.tag);
        if (data.children && Array.isArray(data.children)) {
            data.children.forEach(item => {
                let child = this.render(item);
                root.appendChild(child); // 递归rende
            });
        }
        else {
            this.setText(root, data.text || null);
        }
        return root;
    }
}
class Vue extends Dom {
    constructor(options) {
        super();
        this.options = options;
        this.init();
    }
    init() {
        // 虚拟dom 就是通过js 去渲染我们这个真实dom
        let data = {
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
        };
        // let app = typeof this.options.el === 'string' ? document.querySelector(this.options.el) : this.options.el;
        let app = typeof this.options.el === 'string' ? document.querySelector(this.options.el) : this.options.el;
        app === null || app === void 0 ? void 0 : app.appendChild(this.render(data));
    }
}
new Vue({
    el: '#app'
});
