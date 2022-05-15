import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
    id: number,
    title: string,
    completed: boolean
}

axios.get(url).then(value => {
    // 把value.data对象 声明为Todo类型
    const todo = value.data as Todo
    const id = todo.id
    const title = todo.title
    const completed = todo.completed

    logTodo(id, title, completed)
})


const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(id, title, completed)
}

// 使用类型(具有响应属性和方法的值)
const today: Date = new Date()
console.log(today.getDate())


// 对象类型的类型注解
// 1. 数组的类型注解
let balls: string[] = ['basketball', 'football']
let someNums: number[] = [1, 0, -1]


// 2. 类的类型注解
class Car {
}

let car: Car = new Car()


// 3. 对象的类型注解
// Note: 对象的类型注解可以用接口来重新定义
let person: { name: string, age: number } = {
    name: 'lee',
    age: 18
}

// 4. 函数表达式的类型注解
const logNumber: (num: number) => void = (num: number): void => {
    console.log(num)
    return
}

const throwError = (message: string): never | string => {
    if (!message) {
        throw new Error(message)
    }
    return message
}


// 针对 函数参数是对象的形式
const todayWeather = {
    date: new Date(),
    weather: 'sunshine'
}
// 没有使用解构
const objFn = (todayWeather: { date: Date, weather: string }): void => {
    console.log(todayWeather.date)
    console.log(todayWeather.weather)
}
// 使用解构的方式
const objFn2 = ({date, weather}: { date: Date, weather: string }): void => {
    console.log(date)
    console.log(weather)
}


// 对象中的类型注解
const profile = {
    name: 'Mike',
    age: 20,
    coords: {
        lat: 30,
        lng: 50
    },
    setAge(age: number): void {
        this.age = age
    }
}
const {age, name}: { age: number, name: string } = profile


// 5. 接口
// 用来创建一个新的类型来描述一个对象的属性名和属性值
interface Person {
    name: string,
    age: number,
    married: boolean,

    summary(): string
}

const printPerson = (person: Person): void => {
    console.log(person.name + person.age + person.married)
}

printPerson({
    name: 'lee',
    age: 12,
    married: true,
    summary(): string {
        return `名字: ${this.name}`
    }
})

// Note: 使用接口从而使得对象的类型确定


// 6. 类
// TS 相对于 ES6 中 多了 修饰符 public private protected
;(function () {
    // 使用立即执行函数 防止变量重复声明
    class Person {
        private name: string
        private age: number

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        public scream(): void {
            console.log('尖叫')
        }

        public info(): void {
            console.log(this.name + this.age)
        }

        protected sing(): void { // 该方法只能在该类和子类调用
            console.log('唱歌')
        }
    }

    const person = new Person('lee2', 18)
    person.scream()

    // 继承
    class Man extends Person {
        constructor(name: string, age: number) {
            super(name, age)
        }

        public sing(): void {
            console.log('男人唱歌')
        }
    }
    const man = new Man('lee3', 20)
    man.sing()
    man.info()

}())






