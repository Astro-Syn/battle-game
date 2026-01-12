const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
   
}


window.onload = function() {
    const canvasElement = document.querySelector('canvas');
    const ctx = canvasElement.getContext('2d');

    canvasElement.width = GameViewport.WIDTH;
    canvasElement.height = GameViewport.HEIGHT;

    const spork = document.querySelector('img');

    ctx.strokeStyle = 'black';
    ctx.moveTo(0, 0);
    ctx.lineTo(GameViewport.WIDTH, GameViewport.HEIGHT);
    ctx.moveTo(GameViewport.WIDTH, 0);
    ctx.lineTo(0, GameViewport.HEIGHT);
    ctx.stroke();

    ctx.drawImage(spork, 0, 0);

    console.log(ctx);
}