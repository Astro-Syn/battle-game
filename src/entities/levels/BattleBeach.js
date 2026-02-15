import { drawFrame } from "../../utils/ctx.js";



export class BattleBeach {

    
   
    constructor() {
                const audio = new Audio('./sounds/Track1mp3.mp3');

                document.addEventListener('click', () => {
                audio.play();
                    });

audio.volume = 0.5;
        this.image = document.querySelector('img[alt="beach-bg"]');
        
        
        this.frames = new Map([
            ['sky', [70, 30, 508, 200]],
            ['clouds', [92, 367, 869, 289]],
            ['water', []],
            ['back-mountains', [79, 922, 977, 47]],
            ['front-sand', [88, 686, 1015, 85]],
            ['front-trees', []],

        ]);
    }
    

    update(){
        
    }

      drawFrame(ctx, frameKey, x, y){
     drawFrame(ctx, this.image, this.frames.get(frameKey), x, y);
    }

    draw(ctx, camera){
        this.drawFrame(ctx, 'level-bg', Math.floor(110 - (camera.position.x / 1.75)), 15 -camera.position.y);
        
       this.drawFrame(ctx, 'level-buildings-back', Math.floor(20 - (camera.position.x / 1.58)), -30 -camera.position.y);

        this.drawFrame(ctx, 'level-floor', Math.floor(20 - (camera.position.x / 1.5)), 195 - camera.position.y);

        this.drawFrame(ctx, 'level-buildings-front', Math.floor(20 - (camera.position.x / 1.5)), 115 - camera.position.y);
    }
}



