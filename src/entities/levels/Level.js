import { drawFrame } from "../../utils/ctx.js";

export class Level {
    //music = document.querySelector('audio#track-1');
    constructor() {
        this.image = document.querySelector('img[alt="bg"]');
        
        //this.music.play();
        this.frames = new Map([
            ['level-bg', [70, 30, 508, 200]],
            ['level-buildings-back', [92, 367, 869, 289]],
            ['level-floor', [79, 922, 977, 47]],
            ['level-buildings-front', [88, 686, 1015, 85]],
        ]);
    }

    update(){
        
    }

    
        
    

      drawFrame(ctx, frameKey, x, y){
     drawFrame(ctx, this.image, this.frames.get(frameKey), x, y);
    }

    draw(ctx, camera){
        this.drawFrame(ctx, 'level-bg', Math.floor(50 - (camera.position.x / 1.75)), 15 -camera.position.y);
        
       this.drawFrame(ctx, 'level-buildings-back', Math.floor(25 - (camera.position.x / 1.58)), -30 -camera.position.y);

        this.drawFrame(ctx, 'level-floor', Math.floor(20 - (camera.position.x / 1.5)), 195 - camera.position.y);

        this.drawFrame(ctx, 'level-buildings-front', Math.floor(20 - (camera.position.x / 1.5)), 115 - camera.position.y);
    }
}



