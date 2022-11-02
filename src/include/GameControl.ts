import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './snake';


class GameColtrol {
    snake: Snake;
    scorePanel: ScorePanel;
    food: Food;
    constructor() {
        this.snake = new Snake();
        this.scorePanel = new ScorePanel();
        this.food = new Food();

        this.init();
    }

    init(){
        document.addEventListener('keydown',this.keydownHandler);
    }

    keydownHandler(event:KeyboardEvent){
        console.log(event.key);
    }
}

export default GameColtrol;
