import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './snake';

enum Direction {
    Up = 'w',
    Left = 'a',
    Right = 'd',
    Down = 's'
};

class GameColtrol {

    snake: Snake;
    scorePanel: ScorePanel;
    food: Food;
    direction: String = 'a';

    constructor() {
        this.snake = new Snake();
        this.scorePanel = new ScorePanel();
        this.food = new Food();

        this.init();
    }

    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.run();
    }

    keydownHandler(event: KeyboardEvent) {
        if(event.key === Direction.Down || event.key === Direction.Up ||
            event.key === Direction.Left || event.key === Direction.Right)
            this.direction = event.key;
    }

    run(){
        let Y = this.snake.Y;
        let X = this.snake.X;
        switch(this.direction){
            case Direction.Down:
                Y += 10;
                break;
            case Direction.Up:
                Y -= 10;
                break;
            case Direction.Left:
                X -= 10;
                break;
            case Direction.Right:
                X += 10;
                break;
            default:
                break;
        }
    }
}

export default GameColtrol;
