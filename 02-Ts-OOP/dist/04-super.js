"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('动物在叫~');
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            // 子类的构造函数一定要通过super()调用父类的构造函数
            super(name);
            this.age = age;
        }
        sayHello() {
            // super 表示父类 (父类函数对象)
            super.sayHello();
        }
    }
    const dog = new Dog('旺财', 3);
    console.log(dog.name);
    console.log(dog.age);
    dog.sayHello();
}());
//# sourceMappingURL=04-super.js.map