import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {
    snake: Snake
    food: Food
    scorePanel: ScorePanel
    // 存的值
    direction: string = ''
    // 记录游戏是否结束
    isLive: boolean = true

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()

        this.init()
    }

    // 游戏初始化方法
    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        // 调用run 使得蛇移动
        this.run()
    }

    // 键盘按下的响应函数
    keydownHandler(event: KeyboardEvent) {
        console.log(event.key)
        this.direction = event.key
    }

    // 控制蛇移动方法
    run() {
        let X = this.snake.X
        let Y = this.snake.Y

        switch (this.direction) {
            case "ArrowUp":
                Y -= 10
                break
            case "ArrowDown":
                Y += 10
                break
            case "ArrowLeft":
                X -= 10
                break
            case "ArrowRight":
                X += 10
                break
        }

        // 检查是否吃到食物
        this.checkEat(X, Y)

        // 使用异常处理 来处理结束的处理
        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (e) {
            // 游戏结束
            alert((e as Error).message)
            this.isLive = false
        }

        // 开启定时器递归调用
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    }

    // 检查是否吃到食物
    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
    }

}

export default GameControl
