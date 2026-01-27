export class StatusBar {
    constructor(characters){
        this.image = document.querySelector('img[alt="randol"]');

        this.time = 99;
        this.timeTimer = 0;
        this.characters = characters;

        this.frames = new Map([
            ['health-bar', [0, 0, 150, 20]],
            ['spork-name', [100, 100, 30, 30]],
            ['vexel-name', [100, 100, 30, 30]],

            ['time-1', [16, 32, 14, 16]],
            ['time-2', [32, 32, 14, 16]],
            ['time-3', [45, 32, 14, 16]],
            ['time-4', [64, 32, 14, 16]],
            ['time-5', [80, 32, 14, 16]],
            ['time-6', [96, 32, 14, 16]],
            ['time-7', [112, 32, 14, 16]],
            ['time-8', [128, 32, 14, 16]],
            ['time-9', [144, 32, 14, 16]],
            ['time-0', [160, 32, 14, 16]],
            
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

    update(time) {

    }

    draw(ctx) {
        this.drawFrame(ctx, 'health-bar', 250, 20);
        this.drawFrame(ctx, 'health-bar', 50, 20);
        const timeString = String(this.time).padStart(2, '00');     
        this.drawFrame(ctx, `time-${timeString.charAt(0)}`, 178, 33);  
        this.drawFrame(ctx, `time-${timeString.charAt(1)}`, 198, 33);  

        const [{name: name1}, {name: name2}] = this.characters;

        this.drawFrame(ctx, `tag-${name1.toLowerCase()}`, 32, 33);
         this.drawFrame(ctx, `tag-${name2.toLowerCase()}`, 32, 33);
    }
}