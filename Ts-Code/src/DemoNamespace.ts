// 1.命名空间的用法 嵌套 抽离 导出 简化 合并
// 2.命名空间的案例
// namespace 所有的变量以及方法必须要导出才能访问
namespace Test_a {
  // 变量 方法 ....
  export let a = 1;
  export const add = (a: number, b: number) => a + b;
}
namespace Test_a {
  export let b = 1;
}
console.log(Test_a.b);
// 应用场景
// 跨端的项目 h5 Android IOS 小程序
namespace ios {
  export const pushNotification = (msg: string, type: number) => {};
}
namespace android {
  export const pushNotification = (msg: string) => {};
  export const callphone = (phone: string) => {};
}

namespace miniprogram {
    export const pushNotification = (msg: string) => {}
}
