import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './snake';
import Direction from './Direction';


class GameColtrol {

    snake: Snake;
    scorePanel: ScorePanel;
    food: Food;
    FixSpeed: number = 150;
    isOver = false;
    direction: Direction;

    constructor() {
        this.snake = new Snake();
        this.scorePanel = new ScorePanel();
        this.food = new Food();

        this.direction = Direction.Stop;
        this.init();
    }

    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.run();
    }

    keydownHandler(event: KeyboardEvent) {
        if (event.key === Direction.Down || event.key === Direction.Up ||
            event.key === Direction.Left || event.key === Direction.Right ||
            event.key === Direction.Stop) {
            this.direction = event.key;
        }
    }

    run() {
        this.snake.moveHead(this.direction);
        this.checkIsEat();
        this.checkIsOver();
        !this.isOver && setTimeout(this.run.bind(this), this.FixSpeed - this.scorePanel.level * 25);
    }

    checkIsOver() {
        if(this.direction === Direction.Stop)
            return;
        else if (this.snake.X < 0 || this.snake.Y < 0 ||
            this.snake.X > 290 || this.snake.Y > 290) {
            this.isOver = true;
            alert('Game Over.');
        }
        for(let i=2;i<this.snake.body.length;++i){
            let bd = this.snake.body[i] as HTMLElement;
            if(this.snake.X === bd.offsetLeft && this.snake.Y === bd.offsetTop){
                alert('Game Over.');
                break;
            }
        }
    }

    checkIsEat() {
        if (this.food.X === this.snake.X && this.food.Y === this.snake.Y) {
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
            // this.snake.moveBody();
        }
    }
}

export default GameColtrol;
