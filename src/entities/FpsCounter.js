export class FpsCounter {
    constructor(){
        this.fps = 0;
    }

    update(time){
        this.fps = Math.trunc(1 / time.secondsPassed);
    }

    draw(ctx){
        //ctx.font = "bold 16px monospace";
        //ctx.fillStyle = "lime";
        //ctx.textAlign = "center";
        //ctx.fillText(`FPS: ${this.fps}`, ctx.canvas.width / 2, 30);

    }
}