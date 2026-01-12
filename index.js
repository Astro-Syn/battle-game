const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
   
}


window.onload = function() {
    const canvasElement = document.querySelector('canvas');
    const ctx = canvasElement.getContext('2d');

    canvasElement.width = GameViewport.WIDTH;
    canvasElement.height = GameViewport.HEIGHT;

    const [spork, bg] = document.querySelectorAll('img');
    

    const position = {
        x: GameViewport.WIDTH / 2 - spork.width / 2,
        y: 150,
    }

    let velocity = 1;

    function frame() {
    position.x += velocity;

    if(position.x > GameViewport.WIDTH -spork.width || position.x < 0){
        velocity = -velocity;
    }

    //ctx.clearRect(0, 0, GameViewport.WIDTH, GameViewport.HEIGHT);
    ctx.drawImage(bg, 0, 0);

    //ctx.strokeStyle = 'black';
    //ctx.moveTo(0, 0);
    //ctx.lineTo(GameViewport.WIDTH, GameViewport.HEIGHT);
    //ctx.moveTo(GameViewport.WIDTH, 0);
    //ctx.lineTo(0, GameViewport.HEIGHT);
    //ctx.stroke();

    ctx.drawImage(spork, position.x, position.y); 
    

    window.requestAnimationFrame(frame);
    }

    window.requestAnimationFrame(frame);

   
}