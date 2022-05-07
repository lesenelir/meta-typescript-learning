"use strict";
class Person {
    constructor() {
        // 定义实例属性
        this.name = 'lee';
        this.age = 18;
    }
    // 定义实例方法
    sayHello() {
        console.log('say Hello');
    }
    // 定义类方法
    static sayHi() {
        console.log('say Hi');
    }
}
// 定义类属性 - 静态属性 - 函数对象的属性 - static关键字
Person.school = 'Jnu';
const p1 = new Person();
console.log(p1);
console.log(p1.name);
p1.sayHello();
console.log("===================================");
// 访问类属性（函数对象属性）
console.log(Person.school);
Person.sayHi();
//# sourceMappingURL=01-class.js.map