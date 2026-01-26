export class StatusBar {
    constructor(characters){
        this.image = document.querySelector('img[alt="randol"]');

        this.time = 99;
        this.timeTimer = 0;
        this.characters = characters;

        this.frames = new Map([
            ['health-bar', [0, 0, 150, 100]],
            ['spork-name', [100, 100, 30, 30]],
            ['vexel-name', [100, 100, 30, 30]],
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
        
    }
}