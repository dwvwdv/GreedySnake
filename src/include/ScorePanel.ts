
class ScorePanel{
    score = 0;
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    
    constructor(){
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
    }

    addScore(): void{
        this.scoreEle.innerHTML = ++this.score + '';
        if(this.score % 8 === 0)
            this.addlevel()
    }

    addlevel(): void{
        this.levelEle.innerHTML = ++this.level + '';
    }
}

export default ScorePanel;