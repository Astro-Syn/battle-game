import { characterDirection } from "./constants/character.js";
import { Ctrl, ctrls } from "./constants/ctrl.js";
import { GamepadThumbStick } from "./constants/ctrl.js";

const heldKeys = new Set();
const gamePads = new Map();

function handleKeyDown(e){
    e.preventDefault();
    heldKeys.add(e.code);
}

function handleKeyUp(e){
     e.preventDefault();
    heldKeys.delete(e.code);

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
        }
    }
}

export const isButtonDown = (padId, button) => gamePads.get(padId)?.buttons[button].pressed;
export const isButtonUp = (padId, button) => !gamePads.get(padId)?.buttons[button].pressed;

export const isAxeGreater = (padId, axeId, value) => gamePads.get(padId)?.axes[axeId] >= value;
export const isAxeLower = (padId, axeId, value) => gamePads.get(padId)?.axes[axeId] <= value;

export const isKeyDown = (code) => heldKeys.has(code);
export const isKeyUp = (code) => !heldKeys.has(code);

export const isLeft = (id) => isKeyDown(ctrls[id].keyboard[Ctrl.LEFT]) 
|| isButtonDown(id, ctrls[id].gamePad[Ctrl.LEFT])
|| isAxeLower(id, ctrls[id].gamePad[GamepadThumbStick.HORIZONTAL_AXE_ID],
    -ctrls[id].gamePad[GamepadThumbStick.DEADZONE]
)

export const isRight = (id) => isKeyDown(ctrls[id].keyboard[Ctrl.RIGHT]);
export const isUp = (id) => isKeyDown(ctrls[id].keyboard[Ctrl.UP]);
export const isDown = (id) => isKeyDown(ctrls[id].keyboard[Ctrl.DOWN]);

export const isForward = (id, direction) => direction === characterDirection.RIGHT ? isRight(id) : isLeft(id);
export const isBackward = (id, direction) => direction === characterDirection.LEFT ? isRight(id) : isLeft(id);