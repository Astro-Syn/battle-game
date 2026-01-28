export class Level {
    constructor() {
        this.image = document.querySelector('img[alt="bg"]');
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
        const [srcX, srcY, srcWidth, srcHeight] = this.frames.get(frameKey);

        
        ctx.drawImage(
            this.image, 
            srcX, srcY, srcWidth, srcHeight, x, y, srcWidth, srcHeight,
        )
       
    }

    draw(ctx, camera){
        this.drawFrame(ctx, 'level-bg', Math.floor(250 - (camera.position.x / 1.50)), -10 -camera.position.y);
       this.drawFrame(ctx, 'level-buildings-back', Math.floor(25 - (camera.position.x / 1.58)), -15 -camera.position.y);
        this.drawFrame(ctx, 'level-floor', Math.floor(200 - (camera.position.x / 1.5)), 170 - camera.position.y);
        this.drawFrame(ctx, 'level-buildings-front', Math.floor(200 - (camera.position.x / 1.5)), 95 - camera.position.y);
    }
}



