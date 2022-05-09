class ScorePanel {
    score: number = 0
    level: number = 1
    maxLevel: number
    upScoreL: number

    scoreEle: HTMLElement
    levelEle: HTMLElement

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
        this.maxLevel = maxLevel
        this.upScoreL = upScore
    }

    addScore() {
        this.score++
        this.scoreEle.innerHTML = this.score + ''
        if (this.score % this.upScoreL === 0) {
            this.levelUp()
        }

    }

    levelUp() {
        if (this.level < this.maxLevel) {
            this.level++
            this.levelEle.innerHTML = this.level + ''
        }
    }


}

export default ScorePanel
