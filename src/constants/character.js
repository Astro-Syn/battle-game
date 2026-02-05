export const PUSH_FRICTION = 66;
export const CHARACTER_START_DISTANCE = 88;

export const characterDirection = {
    LEFT: -1,
    RIGHT: 1,
}

export const CharacterId = {
    SPORK: 'Spork',
    VEXEL: 'Vexel',
}

export const CharacterAttackType = {
    PUNCH: 'punch',
    KICK: 'kick',
}

export const CharacterState = {
    IDLE: 'idle',
    RUN_FORWARD: 'runForward',
    RUN_BACKWARD: 'runBackward',
    JUMP_START: 'jumpStart',
    JUMP_UP: 'jumpUp',
    JUMP_FORWARDS: 'jumpForwards',
    JUMP_BACKWARDS: 'jumpBackwards',
    JUMP_FINISH: 'jumpFinish',
    CROUCH: 'crouch',
    CROUCH_DOWN: 'crouchDown',
    CROUCH_UP: 'crouchUp',
    LIGHT_MEELE: 'lightMeele',
    MED_MEELE: 'medMeele',
    HEAVY_MEELE: 'heavyMeele',
    LIGHT_KICK: 'lightKick', 
    MED_KICK: 'medKick',
    HEAVY_KICK: 'heavyKick',
}

export const FrameDelay = {
    FREEZE: 0,
    TRANSITION: -2,
}

export const PushBox = {
    IDLE: [-16, -60, 25, 55],
    JUMP: [-16, -60, 21, 55],
    BEND: [-16, -58, 21, 65],
    CROUCH: [-16, -50, 21, 55],
}

export const HurtBoxVexel = {
     IDLE: [[-5, -65, 20, 22], [-10, -65, 20, 40], [-15, -25, 27, 22]],
    BACKWARDS: [[-8, -56, 22, 16], [-10, -40, 30, 20], [-10, -20, 24, 25]],
    FORWARDS: [[-8, -56, 22, 16], [-10, -40, 30, 20], [-10, -20, 24, 25]],
    JUMP: [[-8, -56, 22, 16], [-10, -40, 30, 20], [-10, -20, 24, 25]],
    CROUCH: [[-10, -50, 22, 16], [-20, -33, 30, 20], [-18, -20, 24, 25]],
    PUNCHHEAVY: [[-10, -56, 22, 16], [-20, -40, 60, 20], [-18, -20, 24, 25]],
    KICK: [[-10, -60, 20, 22], [-10, -40, 20, 15], [-15, -35, 50, 22]],
}

export const HurtBoxSpork = {
    IDLE: [[-10, -60, 20, 22], [-10, -40, 20, 15], [-15, -25, 27, 22]],
    BACKWARDS: [[-8, -56, 22, 16], [-10, -40, 30, 20], [-10, -20, 24, 25]],
    FORWARDS: [[-8, -56, 22, 16], [-10, -40, 30, 20], [-10, -20, 24, 25]],
    JUMP: [[-8, -56, 22, 16], [-10, -40, 30, 20], [-10, -20, 24, 25]],
    CROUCH: [[-10, -50, 22, 16], [-20, -33, 30, 20], [-18, -20, 24, 25]],
    PUNCHHEAVY: [[-10, -56, 22, 16], [-20, -40, 60, 20], [-18, -20, 24, 25]],
    KICK: [[-10, -60, 20, 22], [-10, -40, 20, 15], [-15, -35, 50, 22]],
}