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

        this.bgFrames = [];
        this.bgCurrentFrame = 0;
        this.bgTimer = 0;
        this.bgDelay = 300;

        for (let i = 1; i <= 5; i++){
            const img = new Image();
            img.src = `/Images/ms-start-bg${i}.png`;
            this.bgFrames.push(img);
        }

      
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

    //bg stuff
    this.bgTimer += delta;

    if(this.bgTimer > this.bgDelay){
        this.bgTimer -= this.bgDelay;
        this.bgCurrentFrame = (this.bgCurrentFrame + 1) % this.bgFrames.length;
    }

    //title stuff
    this.frameTimer += delta;

    if (this.frameTimer >= this.frameDelay) {
        this.frameTimer -= this.frameDelay;
        this.currentFrame =
            (this.currentFrame + 1) % this.titleFrames.length;
    }
}



    draw(ctx){
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);


        const bg = this.bgFrames[this.bgCurrentFrame];
        if (bg && bg.complete){
            ctx.drawImage(
                bg, 
                0, 
                0, 
                ctx.canvas.width,
                ctx.canvas.height
            );
        }



    
       

       
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

     
      

        ctx.fillStyle = "white";
        ctx.font = "monospace";
        ctx.textAlign = "center";
        ctx.fillText("Press Enter to Start", ctx.canvas.width / 2, 160);
    }
}
