// 1. 字面量进行类型声明
var a3;
a3 = 10;
// a = 11 // 报错
// 字面量进行类型声明通常和 ｜ 使用
var b3;
b3 = 'male';
b3 = 'female';
var c3; // c既可以是number类型也可以是string类型
c3 = 1;
c3 = 'true';
// 2. any 任意类型
// 一个变量设置了any后，相当于对该变量关闭了类型的检测
var d3;
// let d  // 隐式any ： 不指定类型，则TS解析器会自动判断变量的类型为any
d3 = 1;
d3 = '123';
var dd3;
dd3 = d3;
console.log(typeof dd3); // string
// Note: any的类型可以修改给其他变量的类型
// 3. unknown
var e;
e = 1;
e = '123';
var ee;
// ee = e // 报错
// Note： unknown 是一个类型安全的类型， 不能直接赋值给其他变量
if (typeof e === 'string') {
    ee = e;
}
// 类型断言 - 确定某一个变量的类型一定是某一个类型
ee = e;
// 类型断言： 告诉解析器变量的实际类型
/**
 *  变量 as 类型
 *  <类型>变量
 *
 */
// 4. void 空值
function fn1() {
    return;
    // return null
    // return undefined
}
// Note: 函数void的返回值可以是null、undefined
function fn2() {
    return '123';
}
// 5. never 表示永远不会返回结果
// 用于 函数的报错，没有返回值，连undefined都没有
function fn3() {
    throw new Error('never类型用于函数报错');
}
