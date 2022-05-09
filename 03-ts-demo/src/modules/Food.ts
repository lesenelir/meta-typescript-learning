class Food {
    // 定义属性表示食物所对应的元素
    element: HTMLElement

    constructor() {
        this.element = document.getElementById('food')! // !是非空断言
    }

    // 获取食物的x轴坐标
    get X() {
        return this.element.offsetLeft
    }

    // 获取食物的y轴坐标
    get Y() {
        return this.element.offsetTop
    }

    // 修改食物的位置
    change() {
        // 蛇移动一次一格是10，所以要求食物是整十
        let top = Math.round(Math.random() * 29) * 10
        let left = Math.round(Math.random() * 29) * 10

        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
    }

}

// let food = new Food()
// food.change()

export default Food
