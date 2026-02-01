export const GamepadThumbStick = {
    DEADZONE: 'deadZone',
    HORIZONTAL_AXE_ID: 'horizontalAxeId',
    VERTICAL_AXE_ID: 'verticalAxeId',
}

export const Ctrl = {
    LEFT: 'left',
    RIGHT: 'right',
    UP: 'up',
    DOWN: 'down',
    LIGHT_MEELE: 'lightMeele',
    MED_MEELE: 'medMeele',
    HEAVY_MEELE: 'heavyMeele',
    LIGHT_KICK: 'lightKick', 
    MED_KICK: 'medKick',
    HEAVY_KICK: 'heavyKick',

}

export const ctrls = [
    {

         gamePad: {

            [GamepadThumbStick.DEADZONE]: 0.5,
            [GamepadThumbStick.HORIZONTAL_AXE_ID]: 0,
            [GamepadThumbStick. VERTICAL_AXE_ID]: 1,

            [Ctrl.LEFT]: 14,
            [Ctrl.RIGHT]: 15,
            [Ctrl.UP]: 12,
            [Ctrl.DOWN]: 13,
            [Ctrl.LIGHT_MEELE]: 0,

        },

        keyboard: {
            [Ctrl.LEFT]: 'ArrowLeft',
            [Ctrl.RIGHT]: 'ArrowRight',
            [Ctrl.UP]: 'ArrowUp',
            [Ctrl.DOWN]: 'ArrowDown',
            [Ctrl.LIGHT_MEELE]: 'KeyO',
        },
        },
        {
         gamePad: {

            [GamepadThumbStick.DEADZONE]: 0.5,
            [GamepadThumbStick.HORIZONTAL_AXE_ID]: 0,
            [GamepadThumbStick. VERTICAL_AXE_ID]: 1,

            
            [Ctrl.LEFT]: 14,
            [Ctrl.RIGHT]: 15,
            [Ctrl.UP]: 12,
            [Ctrl.DOWN]: 13,
            [Ctrl.LIGHT_MEELE]: 0,
        },
    
          keyboard: {
            [Ctrl.LEFT]: 'KeyA',
            [Ctrl.RIGHT]: 'KeyD',
            [Ctrl.UP]: 'KeyW',
            [Ctrl.DOWN]: 'KeyS',
            [Ctrl.LIGHT_MEELE]: 'KeyQ',
        },
    },
]