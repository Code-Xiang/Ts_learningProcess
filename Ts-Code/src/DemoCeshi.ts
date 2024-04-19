class Ref {
    _value: any;
    constructor(value: any) {
        this._value = value;
    }
    get value() {
        return this._value + 'xxw'; // 这个方法在每次你尝试读取 ref.value 时被调用。它返回的是 _value 属性加上字符串 'xxw'
    }
    set value(newValue: any) { // 这个方法在每次你尝试设置 ref.value 的值时被调用。它将传入的新值与字符串 '向学伟' 结合后，保存到 _value 属性中。
        this._value = newValue + '向学伟';
    }
    // get 和set 作为拦截器
}
const   ref = new Ref('哈哈哈');
ref.value="好人" // 只有这行才会触发set
console.log(ref.value); // 好人向学伟xxw