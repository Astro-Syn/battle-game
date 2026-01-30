export const PUSH_FRICTION = 66;
export const CHARACTER_START_DISTANCE = 88;

export const characterDirection = {
    LEFT: -1,
    RIGHT: 1,
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
    IDLE: [-16, -60, 23, 55],
    JUMP: [-16, -60, 21, 55],
    BEND: [-16, -58, 21, 65],
    CROUCH: [-16, -50, 21, 55],
}