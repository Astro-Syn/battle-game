import { ctrls } from "./config/ctrls.js";
import { GamepadThumbStick, Ctrl } from "./constants/ctrl.js";
import { characterDirection } from "./constants/character.js";



const heldKeys = new Set();
const gamePads = new Map();
const pressedKeys = new Set();
const pressedButtons = new Set();

const mappedKeys = ctrls.map(({keyboard}) => Object.values(keyboard)).flat();

function handleKeyDown(e){
    if (!mappedKeys.includes(e.code)) return;
    e.preventDefault();
    heldKeys.add(e.code);
}

function handleKeyUp(e){
    if (!mappedKeys.includes(e.code)) return;
     e.preventDefault();
    heldKeys.delete(e.code);
    pressedKeys.delete(e.code);

}

function handleGamepadConnected(e) {
    const {gamepad: {index, axes, buttons }} = e;

    gamePads.set(index, {axes, buttons});
}

function handleGamepadDisconnected(e) {
    const {gamepad: {index}} = e;

    gamePads.delete(index);
}


export function registerKeyEvents(){
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
}


export function regGamepadEvents(){
     window.addEventListener('gamepadconnected', handleGamepadConnected);
    window.addEventListener('gamepaddisconnected', handleGamepadDisconnected);
}

export function pollGamepads() {
    for (const gamePad of navigator.getGamepads()) {
        if(!gamePad) continue;

        if(gamePads.has(gamePad.index)){
            const { index, axes, buttons } = gamePad;

            gamePads.set(index, {axes, buttons });

            for(const button in buttons){
                const key = `${gamePad.index}-${button}`;

                if(pressedButtons.has(key) && isButtonUp(gamePad.index, button)){
                    pressedButtons.delete(key);
                }
            }
        }
    }
}

export const isKeyDown = (code) => heldKeys.has(code);
export const isKeyUp = (code) => !heldKeys.has(code);

export function isKeyPressed(code) {
    if(heldKeys.has(code) && !pressedKeys.has(code)){
        pressedKeys.add(code);
        return true;
    }   
    return false;
}

export const isButtonDown = (padId, button) => gamePads.get(padId)?.buttons[button].pressed;
export const isButtonUp = (padId, button) => !gamePads.get(padId)?.buttons[button].pressed;

export function isButtonPressed(padId, button){
    const key = `${padId}-${button}`;
    if(isButtonDown(padId, button) && !pressedButtons.has(key)){
        pressedButtons.add(key);
        return true;
    }
    return false;
}

export const isAxeGreater = (padId, axeId, value) => gamePads.get(padId)?.axes[axeId] >= value;
export const isAxeLower = (padId, axeId, value) => gamePads.get(padId)?.axes[axeId] <= value;

export const isCtrlDown = (id, ctrl) => isKeyDown(ctrls[id].keyboard[ctrl])
|| isButtonDown(id, ctrls[id].gamePad[ctrl]);

export const isCtrlPressed = (id, ctrl) => isKeyPressed(ctrls[id].keyboard[ctrl])
|| isButtonPressed(id, ctrls[id].gamePad[ctrl]);



export const isLeft = (id) => isKeyDown(ctrls[id].keyboard[Ctrl.LEFT]) 
|| isButtonDown(id, ctrls[id].gamePad[Ctrl.LEFT])
|| isAxeLower(id, ctrls[id].gamePad[GamepadThumbStick.HORIZONTAL_AXE_ID],
    -ctrls[id].gamePad[GamepadThumbStick.DEADZONE]
)

export const isRight = (id) => isKeyDown(ctrls[id].keyboard[Ctrl.RIGHT])
|| isButtonDown(id, ctrls[id].gamePad[Ctrl.RIGHT])
|| isAxeGreater(id, ctrls[id].gamePad[GamepadThumbStick.HORIZONTAL_AXE_ID],
    ctrls[id].gamePad[GamepadThumbStick.DEADZONE]
)
export const isUp = (id) => isKeyDown(ctrls[id].keyboard[Ctrl.UP])
|| isButtonDown(id, ctrls[id].gamePad[Ctrl.UP])
|| isAxeGreater(id, ctrls[id].gamePad[GamepadThumbStick.VERTICAL_AXE_ID],
    -ctrls[id].gamePad[GamepadThumbStick.DEADZONE]
)

export const isDown = (id) => isKeyDown(ctrls[id].keyboard[Ctrl.DOWN])
|| isButtonDown(id, ctrls[id].gamePad[Ctrl.DOWN])
|| isAxeGreater(id, ctrls[id].gamePad[GamepadThumbStick.VERTICAL_AXE_ID],
    -ctrls[id].gamePad[GamepadThumbStick.DEADZONE]
)


export const isForward = (id, direction) => direction === characterDirection.RIGHT ? isRight(id) : isLeft(id);
export const isBackward = (id, direction) => direction === characterDirection.LEFT ? isRight(id) : isLeft(id);

export const isLightPunch = (id) => isCtrlPressed(id, Ctrl.LIGHT_MEELE);
export const isMedMeele = (id) => isCtrlPressed(id, Ctrl.MED_MEELE);
export const isHeavyMeele = (id) => isCtrlPressed(id, Ctrl.HEAVY_MEELE);

export const isLightKick = (id) => isCtrlPressed(id, Ctrl.LIGHT_KICK);
export const isMedKick = (id) => isCtrlPressed(id, Ctrl.MED_KICK);
export const isHeavyKick = (id) => isCtrlPressed(id, Ctrl.HEAVY_KICK);