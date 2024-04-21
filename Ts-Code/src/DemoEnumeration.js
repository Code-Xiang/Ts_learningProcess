// 数字定义枚举的方式
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red); // 0
console.log(Color.Green); // 1
console.log(Color.Blue); // 2
// 自动增长数字枚举
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
console.log(Color1.Red); // 1
console.log(Color1.Green); // 2
console.log(Color1.Blue); // 3
// 自定义数字枚举
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
console.log(Color2.Red); // 1
console.log(Color2.Green); // 2
console.log(Color2.Blue); // 4
// 字符串枚举
var Color3;
(function (Color3) {
    Color3["Red"] = "red";
    Color3["Green"] = "green";
    Color3["Blue"] = "blue";
})(Color3 || (Color3 = {}));
console.log(Color3.Red); // red
console.log(Color3.Green); // green
console.log(Color3.Blue); // blue
// 异构枚举
var Color4;
(function (Color4) {
    Color4[Color4["Red"] = 1] = "Red";
    Color4["Green"] = "green";
    Color4["Blue"] = "true";
})(Color4 || (Color4 = {}));
console.log(Color4.Red); // 1
console.log(Color4.Green); // green
console.log(Color4.Blue); // true
// 接口枚举
var Color5;
(function (Color5) {
    Color5["no"] = "no";
    Color5[Color5["yes"] = 1] = "yes";
})(Color5 || (Color5 = {}));
var objE = {
    red: Color5.yes
};
var code = 0;
if (code === 0 /* Types.success */) {
}
