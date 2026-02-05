import { Fighter } from "./Fighter.js";
import { CharacterState, FrameDelay, PushBox, HurtBoxSpork } from "../src/constants/character.js";


 export class Spork extends Fighter {
    constructor(playerId){
        super('Spork', playerId);
        this.image = document.querySelector('img[alt="spork"]');

        const spriteWidth = 50;
        const spriteHeight = 59;

        this.frames = new Map([

        ['idle-1', [[[6, 135, spriteWidth, spriteHeight], [22, 58]], PushBox.IDLE, HurtBoxSpork.IDLE]],
        ['idle-2', [[[69, 135, spriteWidth, spriteHeight], [22, 58]], PushBox.IDLE, HurtBoxSpork.IDLE]],
          

        ['forwards-1', [[[0, 0, 40, spriteHeight], [18, 56]], PushBox.IDLE, HurtBoxSpork.FORWARDS]],
        ['forwards-2', [[[42, 0, 52, spriteHeight], [18, 57]], PushBox.IDLE, HurtBoxSpork.FORWARDS]],  
        ['forwards-3', [[[141, 0, 35, spriteHeight], [18, 58]], PushBox.IDLE, HurtBoxSpork.FORWARDS]],  
        ['forwards-4', [[[182, 0, spriteWidth, spriteHeight ], [20, 58]], PushBox.IDLE, HurtBoxSpork.FORWARDS]],
        ['forwards-5', [[[228, 0, spriteWidth, spriteHeight], [20, 58]], PushBox.IDLE, HurtBoxSpork.FORWARDS]],
        ['forwards-6', [[[272, 0, 57, spriteHeight], [20, 58]], PushBox.IDLE, HurtBoxSpork.FORWARDS]],
        ['forwards-7', [[[388, 0, 52, spriteHeight], [20, 58]], PushBox.IDLE, HurtBoxSpork.FORWARDS]],
        ['forwards-8', [[[435, 0, spriteWidth, spriteHeight], [20, 58]], PushBox.IDLE, HurtBoxSpork.FORWARDS]],

        ['backwards-1', [[[388, 0, 52, spriteHeight], [20, 58]], PushBox.IDLE, HurtBoxSpork.BACKWARDS]],
        ['backwards-2', [[[272, 0, 57, spriteHeight], [20, 58]], PushBox.IDLE, HurtBoxSpork.BACKWARDS]],
        ['backwards-3', [[[228, 0, spriteWidth, spriteHeight], [20, 58]], PushBox.IDLE, HurtBoxSpork.BACKWARDS]],
        ['backwards-4', [[[182, 0, spriteWidth, spriteHeight], [18, 57]], PushBox.IDLE, HurtBoxSpork.BACKWARDS]],
        ['backwards-5', [[[141, 0, 35, spriteHeight], [18, 58]], PushBox.IDLE, HurtBoxSpork.BACKWARDS]],
        ['backwards-6', [[[42, 0, 52, spriteHeight ], [18, 57]], PushBox.IDLE, HurtBoxSpork.BACKWARDS]],
        ['backwards-7', [[[0, 0, 40, spriteHeight], [18, 56]], PushBox.IDLE, HurtBoxSpork.BACKWARDS]],
        ['backwards-8', [[[435, 0, spriteWidth, spriteHeight], [20, 58]], PushBox.IDLE, HurtBoxSpork.BACKWARDS]],

        ['jumpUp-1', [[[10, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP, HurtBoxSpork.JUMP]],
        ['jumpUp-2', [[[77, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP, HurtBoxSpork.JUMP]], 
        ['jumpUp-3', [[[140, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP, HurtBoxSpork.JUMP]],
        ['jumpUp-4', [[[209, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP, HurtBoxSpork.JUMP]],
        ['jumpUp-5', [[[288, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP, HurtBoxSpork.JUMP]],
        ['jumpUp-6', [[[378, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP, HurtBoxSpork.JUMP]],

        ['jumpForwards-1', [[[10, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP, HurtBoxSpork.JUMP]],
        ['jumpForwards-2', [[[77, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP, HurtBoxSpork.JUMP]],
        ['jumpForwards-3', [[[140, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP, HurtBoxSpork.JUMP]],
        ['jumpForwards-4', [[[209, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP, HurtBoxSpork.JUMP]],
        ['jumpForwards-5', [[[288, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP, HurtBoxSpork.JUMP]],
        ['jumpForwards-6', [[[378, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP, HurtBoxSpork.JUMP]],

         ['jumpBackwards-1', [[[10, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP, HurtBoxSpork.JUMP]],
        ['jumpBackwards-2', [[[77, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP, HurtBoxSpork.JUMP]],  
        ['jumpBackwards-3', [[[140, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP, HurtBoxSpork.JUMP]],
        ['jumpBackwards-4', [[[209, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP, HurtBoxSpork.JUMP]],
        ['jumpBackwards-5', [[[288, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP, HurtBoxSpork.JUMP]],
        ['jumpBackwards-6', [[[378, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP, HurtBoxSpork.JUMP]],

        ['jumpFinish', [[[288, 262, spriteWidth, spriteHeight], [21, 65]], PushBox.JUMP, HurtBoxSpork.JUMP]],

        ['crouch-1', [[[458, 267, spriteWidth, spriteHeight], [26, 52]], PushBox.CROUCH, HurtBoxSpork.CROUCH]],

        ['lightMeele-1', [[[14, 345, spriteWidth, spriteHeight], [35, 54]], PushBox.IDLE, HurtBoxSpork.IDLE, [10, -45, 20, 18]]],
        ['lightMeele-2', [[[88, 347, 59, spriteHeight], [30, 52]], PushBox.IDLE, HurtBoxSpork.IDLE, [20, -45, 20, 18]]],


          ['medMeele-1', [[[14, 345, spriteWidth, spriteHeight], [21, 52]], PushBox.IDLE, HurtBoxSpork.IDLE, [20, -45, 20, 18]]],
         ['medMeele-2', [[[179, 346, spriteWidth, spriteHeight], [21, 52]], PushBox.IDLE, HurtBoxSpork.IDLE, [20, -45, 20, 18]]],
       

        ['heavyMeele-1', [[[15, 409, spriteWidth, spriteHeight], [21, 55]], PushBox.IDLE, HurtBoxSpork.IDLE, [20, -50, 20, 18]]],
        ['heavyMeele-2', [[[91, 409, spriteWidth, spriteHeight], [21, 55]], PushBox.IDLE, HurtBoxSpork.IDLE, [20, -50, 20, 18]]],
        ['heavyMeele-3', [[[174, 409, 76, spriteHeight], [21, 55]], PushBox.IDLE, HurtBoxSpork.PUNCHHEAVY, [25, -40, 35, 20]]],

        ['lightKick-1', [[[15, 488, 54, spriteHeight], [35, 54]], PushBox.IDLE, HurtBoxSpork.KICK, [20, -50, 20, 18]]],
        ['lightKick-2', [[[71, 491, 59, spriteHeight], [30, 52]], PushBox.IDLE, HurtBoxSpork.KICK, [20, -50, 20, 18]]],


         ['medKick-1', [[[15, 488, 54, spriteHeight], [21, 52]], PushBox.IDLE, HurtBoxSpork.KICK, [30, -50, 20, 18]]],
         ['medKick-2', [[[71, 491, 59, spriteHeight], [21, 52]], PushBox.IDLE, HurtBoxSpork.KICK, [30, -50, 20, 18]]],
       

        ['heavyKick-1', [[[15, 568, spriteWidth, spriteHeight], [21, 55]], PushBox.IDLE, HurtBoxSpork.KICK, [30, -50, 20, 18]]],
        ['heavyKick-2', [[[75, 570, spriteWidth, spriteHeight], [21, 55]], PushBox.IDLE, HurtBoxSpork.KICK, [30, -50, 20, 18]]],
        ['heavyKick-3', [[[144, 571, 59, spriteHeight], [21, 55]], PushBox.IDLE, HurtBoxSpork.KICK, [30, -50, 20, 18]]],      
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
               ['jumpBackwards-4', 120], ['jumpBackwards-4', 100], ['jumpBackwards-6', -1], 
               ['jumpBackwards-6', -1], ['jumpBackwards-6', -1], 
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
            [CharacterState.LIGHT_MEELE] : [
            ['lightMeele-1', 33], ['lightMeele-2', 66], ['lightMeele-1', 66], ['lightMeele-2', FrameDelay.TRANSITION], 
            ],

            [CharacterState.MED_MEELE] : [
               ['medMeele-1', 11], ['medMeele-2', 33], ['medMeele-2', 33], ['medMeele-1', 11], ['medMeele-2', 33], ['medMeele-2', 33], ['medMeele-1', 11], ['medMeele-1', FrameDelay.TRANSITION],
            ],

            [CharacterState.HEAVY_MEELE] : [
               ['medMeele-1', 33], ['medMeele-2', 33], ['heavyMeele-2', 33], ['heavyMeele-3', 66], ['heavyMeele-3', 66], ['heavyMeele-1', 33], ['heavyMeele-2', 66], ['medMeele-2', FrameDelay.TRANSITION], 
            
            ],
             [CharacterState.LIGHT_KICK] : [
            ['lightKick-1', 33], ['lightKick-2', 66], ['lightKick-1', 66], ['lightKick-2', FrameDelay.TRANSITION], 
            ],

            [CharacterState.MED_KICK] : [
               ['medKick-1', 11], ['medKick-2', 33], ['medKick-2', 33], ['medKick-1', 11], ['medKick-2', 33], ['medKick-2', 33], ['medKick-1', 11], ['medKick-1', FrameDelay.TRANSITION],
            ],

            [CharacterState.HEAVY_KICK] : [
               ['medKick-1', 33], ['medKick-2', 33], ['heavyKick-2', 33], ['heavyKick-3', 66], ['heavyKick-3', 66], ['heavyKick-1', 33], ['heavyKick-2', 66], ['medKick-2', FrameDelay.TRANSITION], 
            
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
 
 
