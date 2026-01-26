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
}

export const PushBox = {
    IDLE: [-16, -60, 23, 55],
    JUMP: [-16, -60, 21, 55],
    BEND: [-16, -58, 21, 65],
    CROUCH: [-16, -50, 21, 55],
}