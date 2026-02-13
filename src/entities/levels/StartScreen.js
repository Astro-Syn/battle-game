import { drawFrame } from "../../utils/ctx.js";

export class StartScreen {
    constructor(onStart){
        this.audio = new Audio('./sounds/MS-opening.mp3');
        this.audio.loop = true;

        this.onStart = onStart;

        this.clickHandler = () => {
            this.audio.play();
        };

        this.keyHandler = (e) => {
            if (e.code === "Enter"){
                this.stopMusic();
                this.onStart();
            }
        };

        document.addEventListener('click', this.clickHandler);
        window.addEventListener('keydown', this.keyHandler);

      
        this.smiley = document.querySelector('img[alt="wingding"]');

        this.frames = new Map([
            ['smiley', [0, 20, 100, 100]],
        ]);

      
        this.titleFrames = [];
        this.currentFrame = 0;
        this.frameTimer = 0;
        this.frameDelay = 150; 

        for (let i = 2; i <= 12; i++){
            const img = new Image();
            img.src = `/Images/matrix-strife-title${i}.png`;
            this.titleFrames.push(img);
        }
    }

    stopMusic(){
        if (this.audio){
            this.audio.pause();
            this.audio.currentTime = 0;
        }
    }

    destroy(){
        this.stopMusic();
        document.removeEventListener('click', this.clickHandler);
        window.removeEventListener('keydown', this.keyHandler);
    }

update(frameTime) {
    const delta = frameTime?.delta ?? 16; 

    this.frameTimer += delta;

    if (this.frameTimer >= this.frameDelay) {
        this.frameTimer -= this.frameDelay;
        this.currentFrame =
            (this.currentFrame + 1) % this.titleFrames.length;
    }
}



    draw(ctx){
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

       
        const frame = this.titleFrames[this.currentFrame];

        if (frame && frame.complete) {
            ctx.drawImage(
                frame,
                ctx.canvas.width / 1.5 - 200,
                30,
                frame.width * 0.7,
                frame.height * 0.7
                
            );
        }

     
        if (this.smiley) {
            drawFrame(
                ctx,
                this.smiley,
                this.frames.get('smiley'),
                ctx.canvas.width / 1.5 - 10,
                120,
                1
            );
        }

        ctx.fillStyle = "white";
        ctx.font = "monospace";
        ctx.textAlign = "center";
        ctx.fillText("Press Enter to Start", ctx.canvas.width / 2, 160);
    }
}
