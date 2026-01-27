import { TIME_DELAY, TIME_FRAME_KEYS, TIME_RED_DELAY } from "../../constants/battle.js";

export class StatusBar {
    constructor(characters){
        this.image = document.querySelector('img[alt="randol"]');

        this.time = 99;
        this.timeTimer = 0;
        this.timeRedTimer = 0;
        this.useRedFrames = false;
        this.characters = characters;

        this.frames = new Map([
            ['health-bar-1', [6, 6, 150, 15]],
            ['health-bar-2', [7, 23, 150, 15]],
            ['spork-name', [10, 86, 40, 10]],
            ['vexel-name', [52, 86, 40, 10]],


            [`${TIME_FRAME_KEYS[0]}-1`, [3, 66, 14, 16]],
            [`${TIME_FRAME_KEYS[0]}-2`, [14, 66, 14, 16]],
            [`${TIME_FRAME_KEYS[0]}-3`, [28, 66, 14, 16]],
            [`${TIME_FRAME_KEYS[0]}-4`, [43, 66, 14, 16]],
            [`${TIME_FRAME_KEYS[0]}-5`, [57, 66, 14, 16]],
            [`${TIME_FRAME_KEYS[0]}-6`, [72, 66, 14, 16]],
            [`${TIME_FRAME_KEYS[0]}-7`, [86, 66, 14, 16]],
            [`${TIME_FRAME_KEYS[0]}-8`, [101, 66, 14, 16]],
            [`${TIME_FRAME_KEYS[0]}-9`, [114, 66, 14, 16]],
            [`${TIME_FRAME_KEYS[0]}-0`, [129, 66, 14, 16]],

            [`${TIME_FRAME_KEYS[1]}-1`, [3, 98, 14, 16]],
            [`${TIME_FRAME_KEYS[1]}-2`, [14, 98, 14, 16]],
            [`${TIME_FRAME_KEYS[1]}-3`, [28, 98, 14, 16]],
            [`${TIME_FRAME_KEYS[1]}-4`, [43, 98, 14, 16]],
            [`${TIME_FRAME_KEYS[1]}-5`, [57, 98, 14, 16]],
            [`${TIME_FRAME_KEYS[1]}-6`, [72, 98, 14, 16]],
            [`${TIME_FRAME_KEYS[1]}-7`, [86, 98, 14, 16]],
            [`${TIME_FRAME_KEYS[1]}-8`, [101, 98, 14, 16]],
            [`${TIME_FRAME_KEYS[1]}-9`, [114, 98, 14, 16]],
            [`${TIME_FRAME_KEYS[1]}-0`, [129, 98, 14, 16]],


            
        ]);
        
    }

    drawFrame(ctx, frameKey, x, y, direction = 1){
        const [srcX, srcY, srcWidth, srcHeight] = this.frames.get(frameKey);

        ctx.scale(direction, 1);
        ctx.drawImage(
            this.image, 
            srcX, srcY, srcWidth, srcHeight, x * direction, y, srcWidth, srcHeight,
        )
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    updateTime(time){
        if(time.previous > this.timeTimer + TIME_DELAY){
            this.time -= 1;
            this.timeTimer = time.previous;
        }

        if(this.time < 15 && this.time > -1 && time.previous > this.timeRedTimer + TIME_RED_DELAY){
            this.useRedFrames = !this.useRedFrames;
            this.timeRedTimer = time.previous;
        }
    }

    update(time) {
        this.updateTime(time);
    }

    healthBarDisplay(ctx){
         this.drawFrame(ctx, 'health-bar-1', 250, 20);
        this.drawFrame(ctx, 'health-bar-2', 50, 20);
     
    }

    nameDisplay(ctx){
        this.drawFrame(ctx, 'spork-name', 250, 35);
        this.drawFrame(ctx, 'vexel-name', 50, 35);
    }


    timeDisplay(ctx){
          const timeString = String(Math.max(this.time, 0)).padStart(2, '00');
          const redFrame = TIME_FRAME_KEYS[Number(this.useRedFrames)];

        this.drawFrame(ctx, `${redFrame}-${timeString.charAt(0)}`, 185, 30);  
        this.drawFrame(ctx, `${redFrame}-${timeString.charAt(1)}`, 200, 30);  

       

      
    }

    draw(ctx) {
        this.healthBarDisplay(ctx);
        this.nameDisplay(ctx);
        this.timeDisplay(ctx);
      
    }
}