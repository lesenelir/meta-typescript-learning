var a;
a = 10;
// a = '1' // 报错
var b;
b = 'string';
var c = true;
// 变量的声明和赋值是同时进行的， TS可以自动对类型进行类型监测
var d = false;
// d = 12 // 报错
// JS 函数不考虑函数参数的类型
// 函数参数和返回值的类型
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));
