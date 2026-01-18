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
        ['forwards-8', [[557, 0, 124, spriteHeight], [21, 65]]],

          ['backwards-1', [[481, 0, spriteWidth, spriteHeight], [21, 65]]],
        ['backwards-2', [[407, 0, spriteWidth, spriteHeight], [21, 65]]],
        ['backwards-3', [[322, 0, spriteWidth, spriteHeight ], [21, 65]]],
        ['backwards-4', [[244, 0, spriteWidth, spriteHeight], [21, 65]]],
        ['backwards-5', [[159, 0, spriteWidth, spriteHeight], [21, 65]]],
        ['backwards-6', [[85, 0, spriteWidth, spriteHeight ], [21, 65]]],
        ['backwards-7', [[0, 0, spriteWidth, spriteHeight], [21, 65]]],
        ['backwards-8', [[557, 0, 124, spriteHeight], [21, 65]]],
        
        ]);

          this.animations = {
            'runForward': ['forwards-1', 'forwards-2', 'forwards-3', 'forwards-4', 'forwards-5', 'forwards-6', 'forwards-7', 'forwards-8'],
            
            'runBackward': ['backwards-1', 'backwards-2', 'backwards-3', 'backwards-4', 'backwards-5', 'backwards-6', 'backwards-7', 'backwards-8'],
        };
    }
 }
 