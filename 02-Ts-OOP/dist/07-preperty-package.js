"use strict";
(function () {
    // 属性的封装
    // TS 中可以在属性前 添加属性的修饰符
    // public、private、static、readonly
    // private 私有属性 只能在类内容进行访问
    //         - 通过类中添加方法使得私有属性可以被外部访问
    // getter / setter 为属性的存取器
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        getName() {
            return this._name;
        }
        setName(val) {
            this._name = val;
        }
        getAge() {
            return this._age;
        }
        setAge(val) {
            if (val >= 0) {
                this._age = val;
            }
        }
    }
    const per = new Person('lee', 18);
    // 属性的修改 导致了 对象中的数据不安全
    // 但是通过setter 中可以进行一些逻辑上的判断并进行处理
    // per.age = -18
    // console.log(per.age)
    per.setAge(12);
    console.log(per);
    // 通过调用类的属性去修改私有属性的方法
    // 写法二、
    class Animal {
        constructor(name) {
            this._name = name;
        }
        // getter  和 setter 第二种写法
        get name() {
            console.log('get Name 执行了');
            return this._name;
        }
        set name(val) {
            this._name = val;
        }
    }
    const dog = new Animal('狗');
    console.log(dog._name);
    dog._name = '狗2';
    console.log(dog._name);
}());
//# sourceMappingURL=07-preperty-package.js.map