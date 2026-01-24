import { Fighter } from "./Fighter.js";
import { CharacterState } from "../src/constants/character.js";


 export class Spork extends Fighter {
    constructor(x, y, direction, playerId){
        super('Spork', x, y, direction, playerId);
        this.image = document.querySelector('img[alt="spork"]');

        const spriteWidth = 50;
        const spriteHeight = 59;

        this.frames = new Map([

        ['idle-1', [[6, 135, spriteWidth, spriteHeight], [22, 58]]],
        ['idle-2', [[69, 135, spriteWidth, spriteHeight], [22, 58]]],
          

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

        ['jumpUp-1', [[10, 262, spriteWidth, spriteHeight], [21, 65]]],
        ['jumpUp-2', [[77, 262, spriteWidth, spriteHeight], [21, 65]]],  
        ['jumpUp-3', [[140, 262, spriteWidth, spriteHeight], [21, 65]]],
        ['jumpUp-4', [[209, 262, spriteWidth, spriteHeight], [21, 65]]],
        ['jumpUp-5', [[288, 262, spriteWidth, spriteHeight], [21, 65]]],
        ['jumpUp-6', [[378, 262, spriteWidth, spriteHeight], [21, 65]]],

        ['jumpForwards-1', [[10, 262, spriteWidth, spriteHeight], [21, 65]]],
        ['jumpForwards-2', [[77, 262, spriteWidth, spriteHeight], [21, 65]]],  
        ['jumpForwards-3', [[140, 262, spriteWidth, spriteHeight], [21, 65]]],
        ['jumpForwards-4', [[209, 262, spriteWidth, spriteHeight], [21, 65]]],
        ['jumpForwards-5', [[288, 262, spriteWidth, spriteHeight], [21, 65]]],
        ['jumpForwards-6', [[378, 262, spriteWidth, spriteHeight], [21, 65]]],

         ['jumpBackwards-1', [[10, 262, spriteWidth, spriteHeight], [21, 65]]],
        ['jumpBackwards-2', [[77, 262, spriteWidth, spriteHeight], [21, 65]]],  
        ['jumpBackwards-3', [[140, 262, spriteWidth, spriteHeight], [21, 65]]],
        ['jumpBackwards-4', [[209, 262, spriteWidth, spriteHeight], [21, 65]]],
        ['jumpBackwards-5', [[288, 262, spriteWidth, spriteHeight], [21, 65]]],
        ['jumpBackwards-6', [[378, 262, spriteWidth, spriteHeight], [21, 65]]],

        ['jumpFinish', [[288, 262, spriteWidth, spriteHeight], [21, 65]]],

        ['crouch-1', [[458, 267, spriteWidth, spriteHeight], [26, 52]]],
      
      ]);

         this.animations = {
            [CharacterState.IDLE]: [
               ['idle-1', 70],  ['idle-2', 70], ['idle-2', 70], ['idle-2', 70], ['idle-2', 70], ['idle-1', 70], ['idle-1', 70],  ['idle-1', 70]
            ],

            [CharacterState.RUN_FORWARD]: [
               ['forwards-1', 75], ['forwards-2', 75], ['forwards-3', 75], ['forwards-4', 75], ['forwards-5', 75], ['forwards-6', 75], ['forwards-7', 75], ['forwards-8', 75]
            ],
            
            [CharacterState.RUN_BACKWARD]: [['backwards-1', 75],  ['backwards-2', 75], ['backwards-3', 75], ['backwards-4', 75], ['backwards-5', 75], ['backwards-6', 75], ['backwards-7', 75], ['backwards-8', 75]],

            [CharacterState.JUMP_START]: [
               ['jumpFinish', 50], ['jumpFinish', -2], 
            ],

            [CharacterState.JUMP_UP]: [
               ['jumpUp-1', 160], ['jumpUp-2', 110], ['jumpUp-3', 110], ['jumpUp-4', 110], ['jumpUp-5', 110], ['jumpUp-6', -1], ['jumpUp-6', -1], ['jumpUp-6', 1]
            ],

            [CharacterState.JUMP_FORWARDS]: [
               ['jumpForwards-1', 120], ['jumpForwards-2', 100], ['jumpForwards-3', 100], 
               ['jumpForwards-4', 120], ['jumpForwards-5', 100], ['jumpForwards-6', -1], 
               ['jumpForwards-6', -1], ['jumpForwards-6', -1], 
            ],
            [CharacterState.JUMP_BACKWARDS]: [
               ['jumpBackwards-1', 120], ['jumpBackwards-2', 100], ['jumpBackwards-3', 100], 
               ['jumpBackwards-4', 120], ['jumpBackwards', 100], ['jumpBackwards-6', -1], 
               ['jumpBackwards-6', -1], ['jumpBackwards', -1], 
            ], 

            [CharacterState.JUMP_FINISH]: [
               ['jumpFinish', 30], ['jumpFinish', 100], ['jumpFinish', -2], 
            ],

            [CharacterState.CROUCH]: [['crouch-1', 0], ['crouch-1', 0], ['crouch-1', 0], ['crouch-1', 0], ['crouch-1', 0], ['crouch-1', 0], ['crouch-1', 0], ['crouch-1', 0]
         ],
            [CharacterState.CROUCH_DOWN]: [
               ['crouch-1', 20], ['crouch-1', 20], ['crouch-1', 20], ['crouch-1', 20],
               ['crouch-1', 20], ['crouch-1', 20], ['crouch-1', 20],  ['crouch-1', -2],
            ],
            [CharacterState.CROUCH_UP]: [
               ['crouch-1', 20], ['crouch-1', 20], ['crouch-1', 20], ['crouch-1', 20],
               ['crouch-1', 20], ['crouch-1', 20], ['crouch-1', 20], 
                ['crouch-1', -2]
            ],
        };

        this.initialVelocity = {
         x: {
            [CharacterState.RUN_FORWARD]: 170,
            [CharacterState.RUN_BACKWARD]: -110,
            [CharacterState.JUMP_FORWARDS]: 150,
            [CharacterState.JUMP_BACKWARDS]: -180,
          },
          jump: -420,
        };
         this.gravity = 1000;
    }
 }
 
 
