export class Fighter {
    constructor(name, x, y, velocity){
        this.name = name;
        this.image = new Image();
        this.frames = new Map();
        this.position = {x, y};
        this.velocity = velocity;
        this.animationFrame = 0;
        this.animationTimer = 0;
        this.state = 'runForward';
        this.animations = {};
        
    }

    update(time, ctx) {
         const [[, , width]] = this.frames.get(this.animations[this.state][this.animationFrame]);


    if (time.previous > this.animationTimer + 70){

        this.animationTimer = time.previous;
         this.animationFrame++;
         if (this.animationFrame > 7) this.animationFrame = 0;
    }
        
         this.position.x += this.velocity * time.secondsPassed;

    if(this.position.x > ctx.canvas.width - width / 2 ){
        this.velocity = -150;
        this.state = 'runBackward';
    }

    if (this.position.x < width / 2){
        this.velocity = 150;
        this.state = 'runForward';
    }
    }

    drawDebug(ctx){
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.strokeStyle = 'lime';
        ctx.moveTo(this.position.x - 5, this.position.y);
        ctx.lineTo(this.position.x + 4, this.position.y);
        ctx.moveTo(this.position.x, this.position.y - 5);
        ctx.lineTo(this.position.x, this.position.y + 4);
        ctx.stroke();
    }

    draw(ctx){
        const [[x, y, width, height], [originX, originY],] = this.frames.get(this.animations[this.state][this.animationFrame]);
        
        ctx.drawImage(this.image, x, y, width, height, this.position.x - originX, this.position.y - originY, width, height); 

        this.drawDebug(ctx);
    }
}