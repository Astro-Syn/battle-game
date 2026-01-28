import { BATTLE_FLOOR } from "../src/constants/stage.js";

export class Shadow {
    constructor(character){
        this.image = document.querySelector('img[alt="shadow"]');
        this.character = character;
        this.frame = [[0, 0, 68, 11], [10, 7]];
    }
    update(){

    }

    draw(ctx, camera){
        const [
            [x, y, width, height],
            [originX, originY],
        ] = this.frame;

        const scale = 1 - (BATTLE_FLOOR - this.character.position.y) / 250;

        
        ctx.drawImage(
            this.image,
            x, y, 
            width, height, 
            Math.floor(this.character.position.x - camera.position.x - originX * scale),
            Math.floor(BATTLE_FLOOR - camera.position.y - originY * scale),
            Math.floor(width * scale), Math.floor(height * scale),
        )
    }
}