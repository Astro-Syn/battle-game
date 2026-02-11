import { drawFrame } from "../../utils/ctx.js";

export class StartScreen {
    
    constructor(onStart){
        this.onStart = onStart;
        this.ready = false;



        window.addEventListener("keydown", (e) => {
            if(e.code === "Enter") {
                this.onStart();
            }
        });

        this.title = document.querySelector('img[alt="title"]');
        this.smiley = document.querySelector('img[alt="wingding"]');
        
        this.frames = new Map([
            ['matrix-strife', [5, 20, 800, 680]],
            ['smiley', [0, 20, 100, 100]],
        ]);
    }

    

    update(frameTime, ctx){

    }

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
                 20, 0.5, 
            );
        }

          if (this.smiley) {
            drawFrame(
                ctx,
                this.smiley,
                this.frames.get('smiley'),
                ctx.canvas.width / 1.5 - 10,
                120,
                1,
                
            );
        }

        ctx.fillStyle = "white";
        ctx.font = "monospace";
        ctx.textAlign = "center";

        
        
        ctx.fillText("Press Enter to Start", ctx.canvas.width / 2, 160);
       
    }
}