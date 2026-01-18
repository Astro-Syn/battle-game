import { Fighter } from "./Fighter.js";

 export class Spork extends Fighter {
    constructor(x, y, velocity){
        super('Spork', x, y, velocity);
        this.image = document.querySelector('img[alt="spork"]');

        const spriteWidth = 50;
        const spriteHeight = 59;

        this.frames = new Map([
        ['forwards-1', [[0, 0, 40, spriteHeight], [18, 56]]],
        ['forwards-2', [[42, 0, 52, spriteHeight ], [18, 57]]],   
        ['forwards-3', [[141, 0, 35, spriteHeight], [18, 58]]],   
        ['forwards-4', [[182, 0, spriteWidth, spriteHeight ], [20, 58]]],
        ['forwards-5', [[228, 0, spriteWidth, spriteHeight], [20, 58]]], 
        ['forwards-6', [[272, 0, 57, spriteHeight], [20, 58]]],  
        ['forwards-7', [[388, 0, 52, spriteHeight], [20, 58]]],  
        ['forwards-8', [[435, 0, spriteWidth, spriteHeight], [20, 58]]],  

        ['backwards-1', [[388, 0, 52, spriteHeight], [20, 58]]],
        ['backwards-2', [[272, 0, 57, spriteHeight], [20, 58]]],
        ['backwards-3', [[228, 0, spriteWidth, spriteHeight], [20, 58]]], 
        ['backwards-4', [[182, 0, spriteWidth, spriteHeight], [18, 57]]],
        ['backwards-5', [[141, 0, 35, spriteHeight], [18, 58]]],   
        ['backwards-6', [[42, 0, 52, spriteHeight ], [18, 57]]], 
        ['backwards-7', [[0, 0, 40, spriteHeight], [18, 56]]],
        ['backwards-8', [[435, 0, spriteWidth, spriteHeight], [20, 58]]],
        ]);

        this.animations = {
            'runForward': ['forwards-1', 'forwards-2', 'forwards-3', 'forwards-4', 'forwards-5', 'forwards-6', 'forwards-7', 'forwards-8'],

            'runBackward': ['backwards-1', 'backwards-2', 'backwards-3', 'backwards-4', 'backwards-5', 'backwards-6', 'backwards-7', 'backwards-8'],
        };
    }
 }
 
 
