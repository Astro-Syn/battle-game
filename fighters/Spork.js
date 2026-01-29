import { Fighter } from "./Fighter.js";
import { CharacterState, FrameDelay, PushBox } from "../src/constants/character.js";


 export class Spork extends Fighter {
    constructor(playerId){
        super('Spork', playerId);
        this.image = document.querySelector('img[alt="spork"]');

        const spriteWidth = 50;
        const spriteHeight = 59;

        this.frames = new Map([

        ['idle-1', [[[6, 135, spriteWidth, spriteHeight], [22, 58]], PushBox.IDLE]],
        ['idle-2', [[[69, 135, spriteWidth, spriteHeight], [22, 58]], PushBox.IDLE]],
          

        ['forwards-1', [[[0, 0, 40, spriteHeight], [18, 56]], PushBox.IDLE]],
        ['forwards-2', [[[42, 0, 52, spriteHeight ], [18, 57]], PushBox.IDLE]],   
        ['forwards-3', [[[141, 0, 35, spriteHeight], [18, 58]], PushBox.IDLE]],   
        ['forwards-4', [[[182, 0, spriteWidth, spriteHeight ], [20, 58]], PushBox.IDLE]],
        ['forwards-5', [[[228, 0, spriteWidth, spriteHeight], [20, 58]], PushBox.IDLE]], 
        ['forwards-6', [[[272, 0, 57, spriteHeight], [20, 58]], PushBox.IDLE]],  
        ['forwards-7', [[[388, 0, 52, spriteHeight], [20, 58]], PushBox.IDLE]],  
        ['forwards-8', [[[435, 0, spriteWidth, spriteHeight], [20, 58]], PushBox.IDLE]],  

        ['backwards-1', [[[388, 0, 52, spriteHeight], [20, 58]], PushBox.IDLE]],
        ['backwards-2', [[[272, 0, 57, spriteHeight], [20, 58]], PushBox.IDLE]],
        ['backwards-3', [[[228, 0, spriteWidth, spriteHeight], [20, 58]], PushBox.IDLE]], 
        ['backwards-4', [[[182, 0, spriteWidth, spriteHeight], [18, 57]], PushBox.IDLE]],
        ['backwards-5', [[[141, 0, 35, spriteHeight], [18, 58]], PushBox.IDLE]],   
        ['backwards-6', [[[42, 0, 52, spriteHeight ], [18, 57]], PushBox.IDLE]], 
        ['backwards-7', [[[0, 0, 40, spriteHeight], [18, 56]], PushBox.IDLE]],
        ['backwards-8', [[[435, 0, spriteWidth, spriteHeight], [20, 58]], PushBox.IDLE]],

        ['jumpUp-1', [[[10, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP]],
        ['jumpUp-2', [[[77, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP]],  
        ['jumpUp-3', [[[140, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP]],
        ['jumpUp-4', [[[209, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP]],
        ['jumpUp-5', [[[288, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP]],
        ['jumpUp-6', [[[378, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP]],

        ['jumpForwards-1', [[[10, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP]],
        ['jumpForwards-2', [[[77, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP]],  
        ['jumpForwards-3', [[[140, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP]],
        ['jumpForwards-4', [[[209, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP]],
        ['jumpForwards-5', [[[288, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP]],
        ['jumpForwards-6', [[[378, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP]],

         ['jumpBackwards-1', [[[10, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP]],
        ['jumpBackwards-2', [[[77, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP]],  
        ['jumpBackwards-3', [[[140, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP]],
        ['jumpBackwards-4', [[[209, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP]],
        ['jumpBackwards-5', [[[288, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP]],
        ['jumpBackwards-6', [[[378, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP]],

        ['jumpFinish', [[[288, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP]],

        ['crouch-1', [[[458, 267, spriteWidth, spriteHeight], [26, 52]], PushBox.CROUCH]],
      
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
               ['jumpFinish', 50], ['jumpFinish', 50], ['jumpFinish', 50], ['jumpFinish', 50], ['jumpFinish', 50], ['jumpFinish', 50], ['jumpFinish', 50], ['jumpFinish', FrameDelay.TRANSITION], 
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
               ['jumpFinish', 30], ['jumpFinish', 100], ['jumpFinish', 100], ['jumpFinish', 100], ['jumpFinish', 100], ['jumpFinish', 100], ['jumpFinish', 100], ['jumpFinish', -2], 
            ],

            [CharacterState.CROUCH]: [['crouch-1', 0], ['crouch-1', 0], ['crouch-1', 0], ['crouch-1', 0], ['crouch-1', 0], ['crouch-1', 0], ['crouch-1', 0], ['crouch-1', 0]
         ],
            [CharacterState.CROUCH_DOWN]: [
               ['crouch-1', 20], ['crouch-1', 20], ['crouch-1', 20], ['crouch-1', 20],
               ['crouch-1', 20], ['crouch-1', 20], ['crouch-1', 20],  ['crouch-1', FrameDelay.TRANSITION],
            ],
            [CharacterState.CROUCH_UP]: [
               ['crouch-1', 20], ['crouch-1', 20], ['crouch-1', 20], ['crouch-1', 20],
               ['crouch-1', 20], ['crouch-1', 20], ['crouch-1', 20], 
                ['crouch-1', FrameDelay.TRANSITION]
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
 
 
