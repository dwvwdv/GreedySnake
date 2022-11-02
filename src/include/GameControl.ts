import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './snake';

enum Direction {
    Up = 'w',
    Left = 'a',
    Right = 'd',
    Down = 's',
    Stop = ' '
};

class GameColtrol {

    snake: Snake;
    scorePanel: ScorePanel;
    food: Food;
    direction:Direction = Direction.Stop;
    FixSpeed:number = 150;
    isOver = false;

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
            event.key === Direction.Left || event.key === Direction.Right ||
            event.key === Direction.Stop)
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
        this.snake.Y = Y;
        this.snake.X = X;
        this.checkIsOver();
        !this.isOver && setTimeout(this.run.bind(this),this.FixSpeed - this.scorePanel.level*25);
    }

    checkIsOver(){
        if(this.snake.X < 0 || this.snake.Y < 0 ||
            this.snake.X > 290 || this.snake.Y > 290)
             this.isOver = true;
    }

}

export default GameColtrol;
