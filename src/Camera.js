import { BATTLE_HEIGHT, BATTLE_PADDING, BATTLE_WIDTH, SCROLL_BOUNDARY } from "./constants/stage.js";

export class Camera {
    constructor(x, y, characters){
        this.position = {x, y };
        this.characters = characters;
         
    }

    update(time, ctx) {
     this.position.y = -6 + Math.floor(Math.min(this.characters[1].position.y, this.characters[0].position.y) / 10);

     const lowX = Math.min(this.characters[1].position.x, this.characters[0].position.x);
     const highX = Math.max(this.characters[1].position.x, this.characters[0].position.x);

     if(highX - lowX > ctx.canvas.width - SCROLL_BOUNDARY * 2){
        const midPoint = (highX - lowX) / 2;
        this.position.x = lowX + midPoint - (ctx.canvas.width / 2);
     } else {
        for (const character of this.characters){
            if(character.position.x < this.position.x + SCROLL_BOUNDARY && character.velocity.x * character.direction < 0 || character.position.x > this.position.x + ctx.canvas.width - SCROLL_BOUNDARY && character.velocity * character.direction > 0

            ) {
                this.position.x += character.direction * time.secondsPassed;
            }
        } 
     }
     if (this.position.x < BATTLE_PADDING) this.position.x = BATTLE_PADDING;
     if (this.position.x > BATTLE_WIDTH + BATTLE_PADDING - ctx.canvas.width){
        this.position.x = BATTLE_WIDTH + BATTLE_PADDING - ctx.canvas.width;
     }
     if (this.position.y < 0) this.position.y = 0;
     if(this.position.y > BATTLE_HEIGHT - ctx.canvas.height){
        this.position.y = BATTLE_HEIGHT - ctx.canvas.height;
     }
    }
    
}