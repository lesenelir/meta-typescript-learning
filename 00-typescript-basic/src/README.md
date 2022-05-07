



- 类型声明
- 自动类型判断
- 类型：

| 类型    | 例子                                            |
| ------- | ----------------------------------------------- |
| number  | 1， -33                                         |
| string  | ‘hi'                                            |
| boolean | true false                                      |
| 字面量  | 其本身，限制变量的值就是其字面量的值            |
| any     | * 任意类型 (尽可能不用)                         |
| unknown | * 类型安全的any                                 |
| void    | undefined 空值                                  |
| never   | 没有值 ， 不能是任何值 （用于函数抛出错误）     |
| object  | {} 任意的obj对象                                |
| array   | [1, 2, 3] 任意js数组                            |
| tuple   | [4, 5] 元素，TS新增类型，固定长度的数组（元祖） |
| enum    | enum{A, B}  枚举，TS中新增的类型                |



> Note:
>
> 1. any 尽可能不用，设置了代表关闭类型的检测 （尽可能不用） any类型可以修改别的变量类型
> 2. unknown 未知类型，类型安全的any （不确定类型的时候使用）
> 3. void 多用于函数的返回值
> 4. never 用于函数报错的返回值



对象的声明：

// 用来追定对象中包含的属性

```tsx
// ? 代表可选属性
let b: { name: string, age?: number }
// [propName: string]: any 表示obj中可以有其他类型
let c: { name: string, [propName: string]: any }

// & 多用于连接两个对象
let j: {name: string} & {gender: number}
```



函数的声明：

```typescript
// (形参: 类型, 形参: 类型) => 返回值类型
let d: (a: number, b: number) => number
```



数组的声明：

```tsx
// 语法： 类型[] Array<类型>
let e: string[] // 字符串数组
let g: Array<number>
```



元祖的声明：

```typescript
// 元祖是固定长度的数组
//  [类型, 类型, ...]
let h: [string, string]
```



枚举：

```typescript
// 列举出所有的可能
enum Gender {
    male,
    female
}

let i: {name: string, gender: Gender}

i = {
    name: 'lee',
    gender: Gender.male
}

console.log(i.gender === Gender.male)
```

