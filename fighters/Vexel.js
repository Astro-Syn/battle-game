import { Fighter } from "./Fighter.js";

 export class Vexel extends Fighter {
    constructor(x, y, velocity){
        super('Vexel', x, y, velocity);
        this.image = document.querySelector('img[alt="vexel"]');

        
        const spriteWidth = 42;
        const spriteHeight = 77;

          this.frames = new Map([
        ['forwards-1', [[0, 0, spriteWidth, spriteHeight], [21, 65]]],
        ['forwards-2', [[85, 0, spriteWidth, spriteHeight ], [21, 65]]],   
        ['forwards-3', [[159, 0, spriteWidth, spriteHeight], [21, 65]]],
        ['forwards-4', [[244, 0, spriteWidth, spriteHeight], [21, 65]]],   
        ['forwards-5', [[322, 0, spriteWidth, spriteHeight ], [21, 65]]],
        ['forwards-6', [[407, 0, spriteWidth, spriteHeight], [21, 65]]], 
        ['forwards-7', [[481, 0, spriteWidth, spriteHeight], [21, 65]]],  
        ['forwards-8', [[557, 0, spriteWidth, spriteHeight], [21, 65]]],  
        
        ]);
    }
 }
 