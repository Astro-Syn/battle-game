import { Fighter } from "./Fighter.js";

 export class Vexel extends Fighter {
    constructor(x, y, velocity){
        super('Vexel', x, y, velocity);
        this.image = document.querySelector('img[alt="vexel"]');

        
        const spriteWidth = 42;
        const spriteHeight = 59;

          this.frames = new Map([
        ['forwards-1', [0, 0, spriteWidth, spriteHeight]],
        ['forwards-2', [41, 59, spriteWidth, spriteHeight ]],   
        ['forwards-3', [91, 0, spriteWidth, spriteHeight]],
        ['forwards-4', [141, 0, spriteWidth, spriteHeight]],   
        ['forwards-5', [185, 0, spriteWidth, spriteHeight ]],
        ['forwards-6', [225, 0, spriteWidth, spriteHeight]], 
        ['forwards-7', [225, 0, spriteWidth, spriteHeight]],  
        ['forwards-8', [225, 0, spriteWidth, spriteHeight]],  
        ['forwards-9', [225, 0, spriteWidth, spriteHeight]],    
        ['forwards-9', [225, 0, spriteWidth, spriteHeight]],   
        
        ]);
    }
 }
 