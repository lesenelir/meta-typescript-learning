(function () {

    // 描述一个对象的类型


    // 接口 - 用来定义一个类的结构
    // 接口用来定义一个类中应该包含哪些属性和方法
    // 接口中所有的属性都不能有实际的值
    // 接口只能定义对象的结构，不考虑实际值

    // 接口也可以当作类型声明去使用

    interface myInterface {
        name: string
        age: number
    }

    // 接口可以重复声明 - 重复声明会合并接口
    interface myInterface {
        gender: string
    }

    const obj: myInterface = {
        name: 'ss',
        age: 18,
        gender: 'male'
    }

    // 接口可以在定义类的时候去限制类的结构
    interface myInter {
        name: string

        sayHello(): void
    }

    // 实现接口： 创建类满足接口要求
    class MyClass implements myInter {
        name: string;

        constructor(name: string) {
            this.name = name
        }

        sayHello(): void {
            console.log('Hello')
        }

    }

    /**
     *  接口和抽象类区别：
     *      1. 接口中只有抽象方法； 抽象类中可以有普通方法，也可以有抽象方法
     *      2. 普通类 extends 抽象类 ； 普通类 implements 接口
     */


}())
