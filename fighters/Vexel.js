import { Fighter } from "./Fighter.js";
import { CharacterState } from "../src/constants/character.js";

 export class Vexel extends Fighter {
    constructor(x, y, velocity){
        super('Vexel', x, y, velocity);
        this.image = document.querySelector('img[alt="vexel"]');

        
        const spriteWidth = 42;
        const spriteHeight = 77;
        

          this.frames = new Map([

        ['idle-1', [[5, 172, spriteWidth, spriteHeight], [21, 70]]],
        ['idle-2', [[85, 172, spriteWidth, spriteHeight], [21, 70]]],
       

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

        ['jumpUp-1', [[0, 259, 55, spriteHeight], [21, 70]]],
        ['jumpUp-2', [[56, 259, 55, spriteHeight], [21, 70]]],  
        ['jumpUp-3', [[125, 259, 55, spriteHeight], [21, 70]]],
        ['jumpUp-4', [[209, 259, 55, spriteHeight], [21, 70]]],
        ['jumpUp-5', [[280, 259, 55, spriteHeight], [21, 70]]],
        ['jumpUp-6', [[351, 259, 55, spriteHeight], [21, 70]]],
        ]);

          this.animations = {
            [CharacterState.IDLE]: ['idle-1', 'idle-2', 'idle-2', 'idle-2', 'idle-2', 'idle-1', 'idle-1', 'idle-1'],

            [CharacterState.RUN_FORWARD]: ['forwards-1', 'forwards-2', 'forwards-3', 'forwards-4', 'forwards-5', 'forwards-6', 'forwards-7', 'forwards-8'],
            
            [CharacterState.RUN_BACKWARD]: ['backwards-1', 'backwards-2', 'backwards-3', 'backwards-4', 'backwards-5', 'backwards-6', 'backwards-7', 'backwards-8'],

            [CharacterState.JUMP_UP]: ['jumpUp-1']
        };

        this.initialVelocity = {
          jump: -420,
        }
        this.gravity = 1000;
    }
 }
 