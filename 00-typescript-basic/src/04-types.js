// object 开发中一般不用
var a4;
// {} 用来追定对象中可以包含哪些属性
// 语法： {属性名: 属性值}
// ? 表示可选属性
var b4;
b4 = { name: 'ss' };
// 任意字符串的属性名
// [propName: string]: any  任意属性
// c对象中一定要有name属性，其他属性可以随便设置
var c4;
c4 = { name: 'lee', a: 1, b: 2 };
console.log(c4);
// 参数a b 是number 返回值也是number
/**
 * 设置函数的类型声明：
 *      语法： (形参: 类型, 形参: 类型) => 返回值类型
 */
var d4;
d4 = function (n1, n2) {
    return n1 + n2;
};
/**
 * 数组的类型声明：
 *      类型[]
 *      Array<类型>
 */
var e4; // 字符串数组
e4 = ['1', '2', '3'];
var f4;
f4 = [1, 2];
var g4;
/**
 * 元祖： tuple
 *      固定长度的数组
 *   语法： [类型, 类型, ...] // 想要几个元祖的长度就设置几个元素
 */
var h4;
// h = ['123', '123', '123'] // 报错 多余两个长度
/**
 * enum 枚举 (列举所有 可能的情况)
 *
 *
 *
 */
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
var i;
i = {
    name: 'lee',
    gender: Gender.male
};
console.log(i.gender === Gender.male);
// & 多用于 连接两个对象， 语义化
var j; // 此处的j和i的区别：本质无区别， 但写法上，j可以看成两个对象的和集
var k;
var l;
k = 1;
// l = 6  // 报错
