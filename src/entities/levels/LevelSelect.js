export class LevelSelect {
    constructor(onSelect) {
        this.onSelect = onSelect;

        this.levels = ["Level 1", "Level 2", "Level 3"];
        this.selected = 0;

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
        this.levelSelect = document.querySelector('img[alt="selectLevel"]');

        this.levelImages = [
            document.querySelector('img[alt="level1"]'),
            document.querySelector('img[alt="level2"]'),
            document.querySelector('img[alt="level3"]')
        ];
    }

    destroy() {
        window.removeEventListener("keydown", this.keyHandler);
    }

    update() {}

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

            ctx.fillStyle = "#111";
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