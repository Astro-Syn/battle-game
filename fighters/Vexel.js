import { Fighter } from "./Fighter.js";
import { CharacterState, PushBox } from "../src/constants/character.js";

 export class Vexel extends Fighter {
    constructor(x, y, direction, playerId){
        super('Vexel', x, y, direction, playerId);
        this.image = document.querySelector('img[alt="vexel"]');

        
        const spriteWidth = 42;
        const spriteHeight = 77;
        

          this.frames = new Map([

        ['idle-1', [[[5, 172, spriteWidth, spriteHeight], [21, 70]], PushBox.IDLE]],
        ['idle-2', [[[85, 172, spriteWidth, spriteHeight], [21, 70]], PushBox.IDLE]],
       

        ['forwards-1', [[[0, 0, spriteWidth, spriteHeight], [21, 65]], PushBox.IDLE]],
        ['forwards-2', [[[85, 0, spriteWidth, spriteHeight ], [21, 65]], PushBox.IDLE]],   
        ['forwards-3', [[[159, 0, spriteWidth, spriteHeight], [21, 65]], PushBox.IDLE]],
        ['forwards-4', [[[244, 0, spriteWidth, spriteHeight], [21, 65]], PushBox.IDLE]],   
        ['forwards-5', [[[322, 0, spriteWidth, spriteHeight ], [21, 65]], PushBox.IDLE]],
        ['forwards-6', [[[407, 0, spriteWidth, spriteHeight], [21, 65]], PushBox.IDLE]], 
        ['forwards-7', [[[481, 0, spriteWidth, spriteHeight], [21, 65]], PushBox.IDLE]],  
        ['forwards-8', [[[557, 0, 124, spriteHeight], [21, 65]], PushBox.IDLE]],

          ['backwards-1', [[[481, 0, spriteWidth, spriteHeight], [21, 65]], PushBox.IDLE]],
        ['backwards-2', [[[407, 0, spriteWidth, spriteHeight], [21, 65]], PushBox.IDLE]],
        ['backwards-3', [[[322, 0, spriteWidth, spriteHeight ], [21, 65]], PushBox.IDLE]],
        ['backwards-4', [[[244, 0, spriteWidth, spriteHeight], [21, 65]], PushBox.IDLE]],
        ['backwards-5', [[[159, 0, spriteWidth, spriteHeight], [21, 65]], PushBox.IDLE]],
        ['backwards-6', [[[85, 0, spriteWidth, spriteHeight ], [21, 65]], PushBox.IDLE]],
        ['backwards-7', [[[0, 0, spriteWidth, spriteHeight], [21, 65]], PushBox.IDLE]],
        ['backwards-8', [[[557, 0, 124, spriteHeight], [21, 65]], PushBox.IDLE]],

        ['jumpUp-1', [[[0, 259, 55, spriteHeight], [21, 70]], PushBox.JUMP]],
        ['jumpUp-2', [[[56, 259, 55, spriteHeight], [21, 70]],  PushBox.JUMP]],  
        ['jumpUp-3', [[[125, 259, 55, spriteHeight], [21, 70]], PushBox.JUMP]],
        ['jumpUp-4', [[[209, 259, 55, spriteHeight], [21, 70]], PushBox.JUMP]],
        ['jumpUp-5', [[[280, 259, 55, spriteHeight], [21, 70]], PushBox.JUMP]],
        ['jumpUp-6', [[[351, 259, 55, spriteHeight], [21, 70]], PushBox.JUMP]],

        ['jumpFinish', [[[351, 259, 55, spriteHeight], [21, 70]], PushBox.JUMP]],

        ['jumpForwards-1', [[[0, 259, 55, spriteHeight], [21, 70]], PushBox.JUMP]],
        ['jumpForwards-2', [[[56, 259, 55, spriteHeight], [21, 70]], PushBox.JUMP]],  
        ['jumpForwards-3', [[[125, 259, 55, spriteHeight], [21, 70]], PushBox.JUMP]],
        ['jumpForwards-4', [[[209, 259, 55, spriteHeight], [21, 70]], PushBox.JUMP]],
        ['jumpForwards-5', [[[280, 259, 55, spriteHeight], [21, 70]], PushBox.JUMP]],
        ['jumpForwards-6', [[[351, 259, 55, spriteHeight], [21, 70]], PushBox.JUMP]],

        ['jumpBackwards-1', [[[0, 259, 55, spriteHeight], [21, 70]], PushBox.JUMP]],
        ['jumpBackwards-2', [[[56, 259, 55, spriteHeight], [21, 70]], PushBox.JUMP]],  
        ['jumpBackwards-3', [[[125, 259, 55, spriteHeight], [21, 70]], PushBox.JUMP]],
        ['jumpBackwards-4', [[[209, 259, 55, spriteHeight], [21, 70]], PushBox.JUMP]],
        ['jumpBackwards-5', [[[280, 259, 55, spriteHeight], [21, 70]], PushBox.JUMP]],
        ['jumpBackwards-6', [[[351, 259, 55, spriteHeight], [21, 70]], PushBox.JUMP]],

        ['crouch-1', [[[226, 372, spriteWidth, spriteHeight], [20, 55]], PushBox.CROUCH]],
        ]);

          this.animations = {
            [CharacterState.IDLE]: [
              ['idle-1', 70],  ['idle-2', 70], ['idle-2', 70], ['idle-2', 70], ['idle-2', 70], ['idle-1', 70], ['idle-1', 70],  ['idle-1', 70],
            ],

            [CharacterState.RUN_FORWARD]: [
              ['forwards-1', 75],  ['forwards-2', 75],  ['forwards-3', 75], ['forwards-4', 75], ['forwards-5', 75], ['forwards-6', 75], ['forwards-7', 75], ['forwards-8', 75]
            ],
            
            [CharacterState.RUN_BACKWARD]: [
              ['backwards-1', 75],  ['backwards-2', 75], ['backwards-3', 75], ['backwards-4', 75], ['backwards-5', 75], ['backwards-6', 75], ['backwards-7', 75], ['backwards-8', 75],
            ],

            [CharacterState.JUMP_START]: [
               ['jumpFinish', 50], ['jumpFinish', -2], ['jumpFinish', -2], ['jumpFinish', -2], ['jumpFinish', -2],['jumpFinish', -2], ['jumpFinish', -2],['jumpFinish', -2],
            ],

            [CharacterState.JUMP_UP]: [
              ['jumpUp-1', 150], ['jumpUp-2', 110], ['jumpUp-3', 110], ['jumpUp-4', 110], ['jumpUp-5', 110], ['jumpUp-6', -1], ['jumpUp-6', -1], ['jumpUp-6', 1]
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
               ['jumpFinish', 30], ['jumpFinish', 100], ['jumpFinish', -2], ['jumpFinish', -2], ['jumpFinish', -2], ['jumpFinish', -2], ['jumpFinish', -2], ['jumpFinish', -2], 
            ],
            
              [CharacterState.CROUCH]: [
                ['crouch-1', 0], ['crouch-1', 0], ['crouch-1', 0], ['crouch-1', 0], ['crouch-1', 0], ['crouch-1', 0], ['crouch-1', 0], ['crouch-1', 0]
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
        }
        this.gravity = 1000;
    }
 }
 