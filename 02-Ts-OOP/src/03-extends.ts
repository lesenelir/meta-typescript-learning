(function () {

    // 定义父类
    class Animal {
        name: string
        age: number
        static num: number = 1

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        bark() {
            console.log(this.name + ' 动物在叫')
        }

        // 父类的静态方法不能被继承
        static sayHi() {
            console.log('父类的静态方法')
        }
    }


    // 子类继承父类
    // - 通过继承子类可以拥有父类的所有方法和属性
    // - 子类可以添加父类中没有的属性和方法

    class Dog extends Animal {
        // 重写父类方法
        bark() {
            // super.bark();
            console.log(this.name + ' 汪汪汪')
        }

        run() {
            console.log(this.name + ' running')  // 此处的this 代表子类的实例对象
        }
        // Note： 不管继承不继承，TS中this永远指代该类的实例
    }

    class Cat extends Animal {

    }

    const dog = new Dog('旺财', 3)
    dog.bark()
    dog.run()
    // console.log(dog.num) // 父类的静态属性不能被继承
    // dog.sayHi()  // 父类的静态方法不能被静态 （静态方法是属于函数对象，即：类的）

    const cat = new Cat('小白', 1)
    cat.bark()

}())


