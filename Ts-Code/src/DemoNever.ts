type AB = string & number //type AB = never
function xw ():never { // 只要运行就报错，所以never类型更加合适
    throw new Error('xw')
}

function xw2 ():never { // 死循环
    while (true) {

    }
}

type ABC = string | number | boolean | undefined | null | void | never // type ABC = string | number | boolean | void | null | undefined

type ABC2 = '唱' | '跳' | 'Rap' | '篮球' | '排球' | 'football' | 'golf' | 'soccer' | 'chess' | 'poker' | 'chess' | 'poker' | 'chess' | 'poker' | 'chess' | 'poker' | 'chess' | 'poker' | 'chess' | 'poker' | 'chess' | 'poker' | 'chess' | 'poker' | 'chess' | 'poker' | 'chess' 
// 现实应用场景
function kun (value:ABC2) {
    switch (value) {
        case '唱':
            break;
        case '跳':
            break;
        case 'Rap':
            break;
        case '篮球':
            break;
        case '排球':
            break;
        case 'football':
            break;
        case 'golf':
            break;
        case 'soccer':
            break;
        case 'chess':
            break;
        case 'poker':
            break;
       default:
            // 进行兜底逻辑 如果在上面继续加值，那么永远不可能走到这里，不进行判断，这边即将报错
           const error:never = value; 
           break
    }
}