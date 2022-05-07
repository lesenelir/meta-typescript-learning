class Person {
    // 定义实例属性
    name: string = 'lee'
    age: number = 18

    // 定义类属性 - 静态属性 - 函数对象的属性 - static关键字
    static school: string = 'Jnu'

    // 定义实例方法
    sayHello() {
        console.log('say Hello')
    }

    // 定义类方法
    static sayHi() {
        console.log('say Hi')
    }

}

const p1 = new Person()

console.log(p1)
console.log(p1.name)
p1.sayHello()

console.log("===================================")

// 访问类属性（函数对象属性）
console.log(Person.school)
Person.sayHi()

