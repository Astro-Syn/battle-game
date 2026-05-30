import { drawFrame } from "../../../utils/ctx.js";



export class BattleBeach {

    
   
    constructor() {
                const audio = new Audio('./sounds/Track1mp3.mp3');

                document.addEventListener('click', () => {
                audio.play();
                    });

audio.volume = 0.5;
        this.image = document.querySelector('img[alt="beach-bg"]');
        
        
        this.frames = new Map([
            ['sky', [70, 30, 908, 500]],
            ['clouds', [90, 208, 900, 589]],
            ['water', [0, 870, 1000, 600]],
            ['back-mountains', [0, 360, 1000, 200]],
            ['front-sand', [0, 447, 1000, 200]],
            ['front-trees', [81, 597, 1000, 200]],

        ]);
    }
    

    update(){
        
    }

      drawFrame(ctx, frameKey, x, y){
     drawFrame(ctx, this.image, this.frames.get(frameKey), x, y);
    }

    draw(ctx, camera){
        this.drawFrame(ctx, 'sky', Math.floor(0 - (camera.position.x / 40)), 15 -camera.position.y);
        this.drawFrame(ctx, 'clouds', Math.floor(0 - (camera.position.x / 40)), 15 -camera.position.y);
        
        this.drawFrame(ctx, 'water', Math.floor(10 - (camera.position.x / 40)), 130 - camera.position.y);

        this.drawFrame(ctx, 'back-mountains', Math.floor(25 - (camera.position.x / 1.58)), 80 -camera.position.y);

        this.drawFrame(ctx, 'front-sand', Math.floor(15 - (camera.position.x / 1.5)), 120 - camera.position.y);
         this.drawFrame(ctx, 'front-trees', Math.floor(15 - (camera.position.x / 1.5)), 60 - camera.position.y);
    }
}



