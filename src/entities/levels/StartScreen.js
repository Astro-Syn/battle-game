import { drawFrame } from "../../utils/ctx.js";



export class StartScreen {
    constructor(onStart){
        this.audio = new Audio('./sounds/MS-opening.mp3');
        this.audio.loop = true;
        this.onStart = onStart;
         this.shipX = -100;
            this.shipY = 80;
            this.shipSpeed = 60;
            this.ship2X = -300;
            this.ship2Speed = 40;

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
        this.ship1 = document.querySelector('img[alt="flyingCars"]');
        this.ship2 = document.querySelector('img[alt="flyingCars"]');

        this.frames = new Map([
            ['ship1', [0, 10, 90, 20]],
            ['ship2', [0, 30, 80, 60]]
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

    this.shipX += this.shipSpeed * (delta / 1000);
    this.ship2X += this.ship2Speed * (delta/ 1000);

    if (this.shipX > 900) {
        this.shipX = -100;
    }

    if (this.ship2X > 900) {
        this.ship2X = -200;
    }
    
}



    draw(ctx){
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        const [sx, sy, sw, sh] = this.frames.get('ship1');
        const [sx2, sy2, sw2, sh2] = this.frames.get('ship2');

        const bg = this.bgFrames[this.bgCurrentFrame];
        if (bg && bg.complete){
            ctx.drawImage(
                bg, 
                0, 
                0, 
                ctx.canvas.width,
                ctx.canvas.height
            );

            const ship1 = this.ship1;
            ctx.drawImage (
                ship1, 
                sx, sy, sw, sh, 
                this.shipX, this.shipY, 
                sw, sh
            );

            const ship2 = this.ship2;
            ctx.drawImage (
                ship2,
                sx2, sy2, sw2, sh2,
                this.shipX + -200,
                 this.shipY + 40,
                sw2, sh2
            )
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
