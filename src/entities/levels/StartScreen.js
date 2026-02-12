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

        this.title = document.querySelector('img[alt="title"]');
        this.smiley = document.querySelector('img[alt="wingding"]');

        this.frames = new Map([
            ['matrix-strife', [5, 20, 800, 680]],
            ['smiley', [0, 20, 100, 100]],
        ]);
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

    update(frameTime, ctx){}

    drawFrame(ctx, frameKey, x, y){
        drawFrame(ctx, this.image, this.frames.get(frameKey), x, y);
    }

    draw(ctx){
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        if (this.title) {
            drawFrame(
                ctx,
                this.title,
                this.frames.get('matrix-strife'),
                ctx.canvas.width / 1.5 - 170,
                20,
                0.5
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
