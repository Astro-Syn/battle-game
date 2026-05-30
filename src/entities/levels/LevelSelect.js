export class LevelSelect {
    constructor(onSelect) {
        this.onSelect = onSelect;

        this.levels = ["Level 1", "Level 2", "Level 3"];
        this.selected = 0;
        this.cloudsX = 1;
        this.cloudsXSpeed = 3;


        this.keyHandler = (e) => {
            if (e.code === "ArrowRight") {
                this.selected = (this.selected + 1) % this.levels.length;
            }

            if (e.code === "ArrowLeft") {
                this.selected =
                    (this.selected - 1 + this.levels.length) % this.levels.length;
            }

            if (e.code === "Enter") {
                this.onSelect(this.selected);
            }
        };

        window.addEventListener("keydown", this.keyHandler);

        this.levelSelectBg = document.querySelector('img[alt="levelSelect-bg"]');

        //clouds
        this.levelSelectClouds = document.querySelector('img[alt="clouds"]')

        //select level
        this.levelSelect = document.querySelector('img[alt="selectLevel"]');

        this.frames = new Map([
            ['levelSelectClouds', [0, 10, 90, 20]]
        ]);

        this.bgFrames = [];
        this.bgCurrentFrame = 0;
        this.bgTimer = 0;
        this.bgDelay = 300;

        this.levelImages = [
            document.querySelector('img[alt="level1"]'),
            document.querySelector('img[alt="level2"]'),
            document.querySelector('img[alt="level3"]')
        ];
    }

    destroy() {
        window.removeEventListener("keydown", this.keyHandler);
    }

   update(frameTime) {
    const delta = frameTime?.delta ?? 16; 

    //bg stuff
    this.bgTimer += delta;

    if(this.bgTimer > this.bgDelay){
        this.bgTimer -= this.bgDelay;
        this.bgCurrentFrame = (this.bgCurrentFrame + 1) % this.bgFrames.length;
    }

    //title stuff
    this.frameTimer += delta;

    if (this.frameTimer >= this.frameDelay) {
        this.frameTimer -= this.frameDelay;
        this.currentFrame =
            (this.currentFrame + 1) % this.titleFrames.length;
    }

    this.cloudsX += this.cloudsXSpeed * (delta / 1000);
   

    if (this.cloudsX > 900) {
        this.cloudsX = -100;
    }

 
    
}

    draw(ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.imageSmoothingEnabled = false;

        if (this.levelSelectBg) {
            ctx.drawImage(
                this.levelSelectBg,
                0,
                0,
                ctx.canvas.width,
                ctx.canvas.height
            );
        }

        if (this.levelSelectClouds) {
            ctx.drawImage(
                this.levelSelectClouds,
                this.cloudsX, 
                0, 
                ctx.canvas.width, 
                ctx.canvas.height
            )
        }

        if (this.levelSelect) {
            const img = this.levelSelect;

            const scale = 0.5;
            const width = img.width * scale;
            const height = img.height * scale;

            ctx.drawImage(
                img,
                ctx.canvas.width / 2 - width / 2,
                20,
                width,
                height
            );
        }

        const spacing = 160;
        const startX = ctx.canvas.width / 2 - spacing;
        const y = 160;
        const boxSize = 64;

        ctx.textAlign = "center";
        ctx.font = "18px monospace";

        this.levels.forEach((level, i) => {
            const x = startX + i * spacing;

            ctx.fillStyle = "orange";
            ctx.fillRect(
                x - boxSize / 2,
                y - boxSize / 2,
                boxSize,
                boxSize
            );

            ctx.strokeStyle = i === this.selected ? "yellow" : "white";
            ctx.lineWidth = 2;

            ctx.strokeRect(
                x - boxSize / 2,
                y - boxSize / 2,
                boxSize,
                boxSize
            );

            const img = this.levelImages[i];

            if (img) {
                ctx.drawImage(
                    img,
                    x - 24,
                    y - 24,
                    48,
                    48
                );
            }

            ctx.fillStyle = "white";

            ctx.fillText(
                level,
                x,
                y + 60
            );
        });
    }
}