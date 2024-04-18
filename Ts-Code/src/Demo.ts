var Num: number = 10;
var Str: String = "Hello World";

function sum(x: number, y: number): number {
    return x + y;
}
sum(1, 2)

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}

let t = mySearch("hello" , "l");
console.log("t::👉",t);

function buildName(firstName: string = 'Jim', lastName: string) {
    return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let cat = buildName(undefined, 'Cat');
console.log("tomcat::👉",tomcat);
console.log("cat::👉",cat);


function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a:Array<number> = [];
push(a, 1, 2, 3);


// function reverse(x: number): number;
// function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

console.log("reverse::👉",reverse(123));
console.log("reverse::👉",reverse('123'));
console.log("",typeof reverse('123') === 'number');

