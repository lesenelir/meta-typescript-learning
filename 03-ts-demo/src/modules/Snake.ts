class Snake {
    // 获取蛇头
    head: HTMLElement
    // 蛇身体
    bodies: HTMLCollection
    // 获取蛇的容器
    element: HTMLElement

    constructor() {
        this.element = document.getElementById('snake')!
        this.head = document.querySelector('#snake > div') as HTMLElement
        this.bodies = document.getElementById('snake')!.getElementsByTagName('div')
    }

    get X() {
        return this.head.offsetLeft
    }

    get Y() {
        return this.head.offsetTop
    }

    // 设置蛇头坐标
    set X(value: number) {
        if (this.X === value) {
            return
        }
        if (value < 0 || value > 290) {
            // 蛇撞墙
            throw new Error('蛇撞墙了')
        }
        this.head.style.left = value + 'px'
    }

    set Y(value: number) {
        if (this.X === value) {
            return
        }

        if (value < 0 || value > 290) {
            // 蛇撞墙
            throw new Error('蛇撞墙了')
        }

        this.head.style.top = value + 'px'
    }

    // 设置增加身体的方法
    addBody() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }
}

export default Snake

