import { drawFrame } from "../../../utils/ctx.js";



export class SunsetCity {


    constructor() {
              
        this.image = document.querySelector('img[alt="sunset-circuit"]');

        
        this.frames = new Map([
            ['sky', [84, 1094, 1000, 1000]],
            ['clouds-sm', [124, 1678, 1000, 800]],
            ['clouds-lg', [72, 1911, 1000, 1000]],
            ['bridge-buildings', [120, 2298, 1000, 1000]],
            ['ground', [51, 2814, 1000, 800]],
            ['back-buildings', [88, 2960, 1000, 1000]],
            ['front-buildings', [56, 3360, 1000, 1000]],
            ['front-greenery', [24, 3896, 400, 1000]]

        ]);
    }
    

    update(){
        
    }

      drawFrame(ctx, frameKey, x, y){
     drawFrame(ctx, this.image, this.frames.get(frameKey), x, y);
    }

    draw(ctx, camera){
        this.drawFrame(ctx, 'sky', Math.floor(0 - (camera.position.x / 20)), 15 -camera.position.y);

        this.drawFrame(ctx, 'clouds-sm', Math.floor(0 - (camera.position.x / 10)), 15 -camera.position.y);
        
        this.drawFrame(ctx, 'clouds-lg', Math.floor(10 - (camera.position.x / 10)), 50 - camera.position.y);

        this.drawFrame(ctx, 'bridge-buildings', Math.floor(50 - (camera.position.x / 2)), -280 -camera.position.y);

            this.drawFrame(ctx, 'ground', Math.floor(25 - (camera.position.x / 1.58)), 150 -camera.position.y);

             this.drawFrame(ctx, 'back-buildings', Math.floor(25 - (camera.position.x / 1.58)), -170 -camera.position.y);

        this.drawFrame(ctx, 'front-buildings', Math.floor(50 - (camera.position.x / 1.5)), -250 - camera.position.y);

         this.drawFrame(ctx, 'front-greenery', Math.floor(30 - (camera.position.x / 1.58)), -280 - camera.position.y);
    }
}



