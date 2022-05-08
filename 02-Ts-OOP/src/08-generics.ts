(function () {

    // 泛型
    // 定义函数或是类时，如果遇到类型不明确的就可以使用泛型

    // 参数a的类型是T
    function fn<K>(a: K): K {
        return a
    }

    // 直接调用
    // 不指定泛型，TS可以进行推断
    console.log(fn(10))
    // 强制指定泛型类型
    console.log(fn<string>('hello'))

    function fn2<T, K>(a: T, b: K): T {
        console.log(b)
        return a
    }
    fn2<number, string>(123, 'hello2')

    console.log("======================================")

    interface Inter {
        length : number
    }

    function fn3<T extends Inter>(a: T): number {
        return a.length
    }


}())


