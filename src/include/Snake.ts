import Direction from "./Direction";

class Snake {
    contaioner: HTMLElement;
    head: HTMLElement;
    body: HTMLCollection;
    direction: Direction = Direction.Stop;

    constructor() {
        this.contaioner = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.body = this.contaioner.getElementsByTagName('div');
    }

    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }

    set X(value: number) {
        this.head.style.left = value + 'px';
    }
    set Y(value: number) {
        this.head.style.top = value + 'px';
    }

    moveHead(val:Direction) {
        // 調頭判斷 不允許調頭
        console.log(this.direction,val);
        if(!(this.direction === Direction.Left && val === Direction.Right ||
            this.direction === Direction.Right && val === Direction.Left ||
            this.direction === Direction.Up && val === Direction.Down ||
            this.direction === Direction.Down && val === Direction.Up )){
                this.direction = val;
        }
        switch (this.direction) {
            case Direction.Down:
                this.Y += 10;
                break;
            case Direction.Up:
                this.Y -= 10;
                break;
            case Direction.Left:
                this.X -= 10;
                break;
            case Direction.Right:
                this.X += 10;
                break;
            default:
                break;
        }
        this.moveBody();
    }

    addBody() {
        this.contaioner.insertAdjacentHTML('beforeend', '<div></div>'); //容器結束前插一個div
    }
    moveBody() {
        for (let i = this.body.length - 1; i > 0; --i) {
            let X = (this.body[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.body[i - 1] as HTMLElement).offsetTop;

            (this.body[i] as HTMLElement).style.left = X + 'px';
            (this.body[i] as HTMLElement).style.top = Y + 'px';
        }
    }
}

export default Snake;