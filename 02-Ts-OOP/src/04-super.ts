(function () {
    class Animal {
        name: string

        constructor(name: string) {
            this.name = name
        }

        sayHello() {
            console.log('动物在叫~')
        }

    }

    class Dog extends Animal {
        age : number

        constructor(name: string, age : number) {
            // 子类的构造函数一定要通过super()调用父类的构造函数
            super(name);
            this.age = age
        }

        sayHello() {
            // super 表示父类 (父类函数对象)
            super.sayHello();
        }

    }

    const dog = new Dog('旺财', 3)
    console.log(dog.name)
    console.log(dog.age)
    dog.sayHello()

}())


