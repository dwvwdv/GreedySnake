import './style/index.less';
class Food {
    constructor() {
        this.element = document.getElementById('food');
    }
    get X() {
        return this.element.offsetLeft;
    }
    get Y() {
        return this.element.offsetTop;
    }
}
const food = new Food();
console.log(food.X, food.Y);
