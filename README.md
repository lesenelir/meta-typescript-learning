# meta-typescript-learning
Personal typescript  learning project


#### 1.1 简介

JavaScript 是一门动态类型语言 （运行时才会进行类型检查） - js没有编译阶段，是一门解释性语言

TypeScript 是一门**静态类型语言** （有编译阶段）

> ​	TypeScript 的类型检查只发生在编译阶段，有错误会在编译阶段报错，即使TS编译错误也会生成编译结果（可以通过tsconfig.json配置报错需不需要生成编译结果）



根据类型是否允许隐式类型转换：

- 强类型 Python
- 弱类型 TS、JS

>用TypeScript编写的文件，以.ts为后缀；用TypeScript编写React时，以.tsx为后缀



TS编译时会对类型进行检查有没有错误，如果想要在运行时保证参数的类型，需要手动对类型进行判断

```tsx
function sayHello(person: string) {
    if (typeof person === 'string') {
        return 'Hello, ' + person;
    } else {
        throw new Error('person is not a string');
    }
}

let user = 'Tom';
console.log(sayHello(user))
```



#### 1.2 基础

##### 1.2.1 原始数据类型

- 布尔值

```tsx
let isDone: boolean = false;

// 通过包装类创建的是对象 不是布尔值
let createdByNewBoolean: boolean = new Boolean(1)
```

- 数值

```tsx
let decLiteral: number = 6
let notANumber: number = NaN
let infinityNumber: number = Infinity
```

- 字符串

```tsx
let myName: string = 'Lesenelir'

// 模版字符串
let sentence: string = `Hello my name is ${myName}`
```

- 空值 （void 多用于没有任何返回值的函数）

```tsx
function alertName(): void {
    alert('My name is Tom');
}

// 空值一般多用于函数的返回值，如果void用来声明变量，则该变量的取值只能是undefined
let unusable: void = undefined
```

- Null 和Undefined

```tsx
let u: undefined = undefined
let n: null = null
```



##### 1.2.2 任意值

> ​	any 表示允许赋值为任意数据类型， 开发中尽可能的不用any类型

- 普通类型声明赋值后，不可以修改为别的类型；any任意值声明后，可以修改为别的类型
- 变量如果声明时未指定类型，则会识别为任意值类型

```tsx
let myFavouriteNum: any = 'seven'
myFavouriteNum = 7

let something  // 相当于let something: any - 相当于JS声明
something = 'seven'
something = 7
```



##### 1.2.3 类型推断

- 定义变量并且赋值，但是没有指定类型声明时，TS会自动判断变量的类型

>类型推断和any之间需要区分的点：
>
>​	定义变量没有赋值的情况，TS自动识别为any
>
>​	定义变量并且赋值的情况，TS会进行类型推断

```tsx
let myFavouriteNumber = 'seven'  // 等价于： let myFavoriteNumber: string = 'seven'
// myFavoriteNumber = 7 // 报错

let myFavouriteNumber2 // 此时没有赋值，TS自动识别为any
myFavouriteNumber2 = 'seven'
myFavouriteNumber2 = 7 // 此时不会报错，因为该变量声明时没有赋值，TS自动识别为any
```



##### 1.2.4 联合类型

>  声明变量的类型时 通过 ｜ 符号进行联合类型声明

- TS 对于联合类型，只能访问此联合类型的公有的属性和方法

```tsx
function getLength(something: string | number): number {
    // return something.length; // 报错，因为number没有length属性
    return something.toStirng() // 成功，toString为公有方法
}
```

- 联合类型的变量在被赋值的时候会根据类型推断，推断出是哪一个类型



##### 1.2.5 对象的类型 - 接口

- 接口是对行为的一种抽象，需要类（class）去实现（implement）
- 接口可以对类（class）进行抽象；也可以对对象（object）进行抽象
- 可选属性  -  用 ?: 来表示
- 任意属性  -  用 [propName: xxx]: zzz 来表示 （xxx和zzz是数据类型）
  - 定义了任意属性，则确定属性和可选属性的类型都必须是任意属性的子集
  - 任意属性存在的意思：让实现的对象可以新增一些属性
- 只读属性 - 用 readonly 来表示

```tsx
interface Person {
	readonly id: number
	name: string
	age?: number
// 	[propName: string]: string // 报错， 因为可选属性age属性值是number，所以此处任意属性不能只为// // // string
	[propName: string]: string | number
}

let tom: Person = {
	id: 9527
	name: 'Tom'
	age: 18        // 可选属性
	gender: 'male' // 任意属性
}

// tom.id = 8978 // 报错  只读属性不能修改

// 对象类型注解的第二种方法
let person: {name: string, age: number} = {
    name: 'lee',
    age: 18
}
```

> ​	接口其实是对 对象的一种类型定义



##### 1.2.6 数组的类型

- 对于数组的声明，常见为： 类型 + 方括号
- 第二种数组的声明：数组泛型
- 第三种数组的声明： 接口来表示数组 - （常用语类数组）

```tsx
let arr: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]

// 类数组不能用普通声明数组的方式来声明，要用接口方式来声明

interface IArguments {
	[index: number]: any
	length: number
	callee: Function // callee是arguments一个属性，指向函数自身
}

function sum() {
	// let agrs: number[] = arguments // 报错，类数组要用接口声明
	let args: IArguments = arguments
}
```

> ​	Note: callee是arguments一个属性，指向函数自身， 上述sum函数中，arguments.callee 指向 sum函数



##### 1.2.7 函数的类型

- TS中对于函数声明中的传参，一定要定义多少个参数，实参传递多少个
- 函数定义中，可以用 “?:”来表示可选参数
  - 但是可选参数后面不能再有确定参数
- TS中允许给函数添加默认参数值
  - 添加了默认值的参数被识别为可选参数 - 即：添加参数默认值一定为参数列表的最后
- TS中允许ES6中的...rest 剩余参数
  - 剩余参数 rest 是一个数组形式
- TS中对于函数表达式，要使用 "=>" 来定义左侧的表达式

>此处的 => 是TS中对于函数表达式定义的符号，不是ES6 箭头函数中的=>

```tsx
function sum(x: number, y: number): number {
	return x + y
}
sum(1, 2)

// 第二个参数为可选参数，且保证：可选参数在末尾
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName
    } else {
        return firstName
    }
}
let tomcat = buildName('Tom', 'Cat')
let tom = buildName('Tom')


// 默认参数 - 默认参数被自动识别为可选参数，写在最后
function build(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}

// 剩余参数
function push(array: number[], ...items: number[]): void {
	 items.forEach(function(item) {
        array.push(item)
    })
}

// 函数表达式
let mySum: (x: number, y: number) => number = function(x: number, y: number): number {
  return x + y
}

// 函数表达式左边的变量后面的声明语句意思：该变量存储一个函数，括号里为函数的参数， => 后面为函数的返回值

```



##### 1.2.8 类型断言

- 实质：告诉解析器变量的实际类型
- 语法：
  - `值 as 类型` （一般而言，这一种比较常见）
  - `<类型>值`



类型断言的用途：

- 将一个联合类型断言为其中一个类型

对于联合类型而言，只能访问其中的公共属性和方法，不能访问某一个特定的属性或方法

```tsx
interface Cat {
    name: string
    run(): void
}
interface Fish {
    name: string
    swim(): void
}

function isFish(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        return true
    }
    return false
}
```

- 将一个父类断言为更加具体的子类
- 将任何一个类型断言为any
- 将any断言为一个具体的类型

> 要使得 A能够被断言为B，则只需要A兼容B 或 B兼容A 即可



##### 1.2.9 内置对象

> ​	JS中很多的内置对象，在TS中可以当作定义好了的类型

内置对象： 在全局作用域Global上存在的对象

- ECMAScript提供的内置对象
  - Boolean
  - Error
  - Date
  - RegExp
  - ...

```tsx
// JS中的包装类 可以在TS中当作定义好的类型
let b: Boolean = new Boolean(1)
let e: Error = new Error('Error occurred')
let d: Date = new Date()
let r: RegExp = /[a-z]/
```

- DOM和BOM的内置对象
  - Document
  - HTMLElement
  - Event
  - NodeList
  - ...

```tsx
let body: HTMLElement = document.body
let allDiv: NodeList = document.querySelectorAll('div')
document.addEventListener('click', function(e: MouseEvent) {
	// Do something
})
```



> ​	Node.js 不是内置对象的一部分，如果要用Ts写Node.js 则需要引入第三方声明文件： `npm install @types/node --save-dev`



#### 1.3 进阶

##### 1.3.1 类型别名

- 类型别名就是给类型取一个新名字
- 使用 `type` 给类型取一个新名字

```tsx
type Name = string
type NameFunction = () => string // 函数类型，没有参数，返回值string
type NameOrFunction = Name | NameFunction

function getName(n: NameorFunction): Name { // 参数是字符串或者函数
	if (typeof n === 'string') {
		return n
	} else { // n 为函数
		return n()
	}
}
```

> ​	类型别名多用于联合类型 - （将较长的类型名取名为较短的类型别名）



##### 1.3.2 字符串字面量类型

- 字符串字面量类型是用来约束取值只能是某几个字符串中的一个

```TS
type EventNames = 'click' | 'scroll' | 'mousemove'
function handleEvent(ele: Element, event: EventNames) {
    // do something
}

handleEvent(document.getElementById('hello'), 'scroll') // 没问题
// 报错，event 不能为 'dblclick'
// dleEvent(document.getElementById('world'), 'dblclick')

```

> ​	该内容属于联合类型中的内容



##### 1.3.3 元祖

- 元祖是长度固定的可以合并不同类型的数组  -  Tuple

```tsx
let tom: [string, number]
tom[0] = 'tom'
tom[1] = 25

// 如果直接对元祖变量进行初始化、赋值时，需要提供所有元祖类型中指定的项
let jack: [string, number]
// jack = ['jack'] // 报错，没有全部赋值
jack = ['jack', 18]

```

> ​	元素长度固定（不能越界），但可以涵盖别的数据类型



##### 1.3.4 枚举

> ​	枚举类型的应用，用于：取值被限定在一定范围内的场景

- 枚举成员会被赋值从0开始递增的数字，同时也会对枚举值到枚举名进行反向映射

```tsx
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}

console.log(Days["Sun"] === 0) // true
console.log(Days["Fri"] === 5) // true

console.log(Days[1] === 'Mon') // true

```

- 枚举也可以进行手动赋值
- 枚举项有两种类型：常数项和计算所得项



##### 1.3.5 类

- 类class：定义事物的抽象特点，包含属性和方法
- 对象object：实例对象，通过new生成
- 面向对象OOP：封装、继承、多态
- 封装：对数据操作细节进行隐藏，只对外暴露接口，外界无法更改内部属性
- 继承：子类继承父类，子类拥有父类的所有特性
- 多态：继承的子类对父类的方法进行重写，子类实例会调用重写后的方法
- 存取器（getter & setter）：用来改变**类中属性**的读取和赋值的行为
- 修饰符：public  private protected readonly
  - protected 可以被子类进行访问；protected constructor() 表示该类只能被继承，不能被实例化
- 抽象类：提供其他类继承的基类，抽象类不能被实例化，抽象类中的抽象方法必须要在子类中被实现。
  - 抽象类必须有子类继承
  - 抽象类更多的时候是针对子类而言
- 接口：不同类之间的公共属性或方法，可以抽象为一个接口。接口可以被类实现，一个类只能继承另一个类，但可以实现多个接口。

> 抽象类和接口的区别：
>
> - 抽象类是捕获子类的通用特性；接口是行为的抽象
> - 抽象类的方法必须是public 或 protected ; 接口只能是public



```tsx
class Animal {
	protected name: string // 受保护变量，子类还是可以访问

  constructor(name) {
    this.name = name
  }

  get name() { //改变属性的读取行为-当实例对象读取属性时会进行这个函数体）
    return this.name
  }

  set name(value) { //改变属性的设置行为-实例对象修改这个属性进入该函数体
    this.name = value
  }

  public sayHi() {
    return 'My name is ' + this.name
  }

  static fun() {
    console.log('类的静态方法，通过类（函数对象）调用，实例对象不能调用')
  }

}


// 继承
class Cat extends Animal {
  public age: number

  constructor(name: string, age: number) {
    super(name) // 调用父类的构造函数，传入name属性
    this.age = age
  }

}


```



##### 1.3.6 类与接口

接口的作用：

- 可以对 对象的形状 进行描述
- 对类的一部分进行抽象



有时候不同类之间可以有共有的特性，这时候可以把特性提取成接口interface，用类进行实现

```tsx
interface Alarm {
	alert(): void
}

interface Light {
	lightOn(): void
	lightOff(): void
}

// 一个类可以实现多个接口
class Car implements Alarm, Light {
  alert() {
  	console.log('Car alert')
  }
  lightOn() {
  	console.log('Car light on')
  }
  lightOff() {
  	console.log('Car light off')
  }
}

```



##### 1.3.7 泛型

- 定义：定义函数、接口、类的时候，不预先指定具体的类型，而在使用的时候再指定类型的特性
- 实质： 在类型不明确的时候，用一个变量去替代类型

```tsx
// 用T指代任意输入的类型，等类型推断时，TS会自动推算出是某一个类型
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}


function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}

swap([7, 'seven']); // ['seven', 7]

// 泛型约束
interface Lengthwise {
  length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}
```

