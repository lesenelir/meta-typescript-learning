"use strict";
(function () {
    // 描述一个对象的类型
    const obj = {
        name: 'ss',
        age: 18,
        gender: 'male'
    };
    // 实现接口： 创建类满足接口要求
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('Hello');
        }
    }
    /**
     *  接口和抽象类区别：
     *      1. 接口中只有抽象方法； 抽象类中可以有普通方法，也可以有抽象方法
     *      2. 普通类 extends 抽象类 ； 普通类 implements 接口
     *
     */
}());
//# sourceMappingURL=06-interface.js.map