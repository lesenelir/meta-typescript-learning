"use strict";
(function () {
    /**
     *  抽象类： 不能用来实例化对象， 专门用来继承
     *
     *      抽象类中可以添加抽象方法 -
     *      抽象方法只能定义在抽象类中， 并且子类必须对抽象方法进行重写
     *
     *   抽象类的目的： 为了复用
     */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            // 子类的构造函数一定要通过super()调用父类的构造函数
            super(name);
            this.age = age;
        }
        sayHello() {
            console.log(this.name + '汪汪汪');
        }
    }
    const dog = new Dog('旺财', 3);
    console.log(dog.name);
    console.log(dog.age);
    dog.sayHello();
    // const an = new Animal() // 报错
}());
//# sourceMappingURL=05-abstract-class.js.map