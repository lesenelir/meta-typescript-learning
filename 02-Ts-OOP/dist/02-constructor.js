"use strict";
class Dog {
    // 构造函数在对象创建时 调用
    // 此处的this 就是新生成的实例对象 - 类似于 JS中的构造函数中的this
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log(this.name + ' 汪汪汪');
    }
}
const dog = new Dog('旺财', 3);
console.log(dog);
dog.bark();
// Note: 一般而言，在TS中，this为创建的对象（因为类似在JS中的构造函数中）
//# sourceMappingURL=02-constructor.js.map