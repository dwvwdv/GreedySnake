class Snake{
    contaioner:HTMLElement;
    head:HTMLElement;
    body:HTMLCollection;

    constructor(){
        this.contaioner = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.body = this.contaioner.getElementsByTagName('div');
    }

    get X(){
        return this.head.offsetLeft;
    }
    get Y(){
        return this.head.offsetTop;
    }

    set X(value : number){
        this.head.style.left = value + 'px';
    }
    set Y(value : number){
        this.head.style.top = value + 'px';
    }

    addBody(){
        this.contaioner.insertAdjacentHTML('beforeend','<div></div>'); //容器結束前插一個div
    }
}

export default Snake;