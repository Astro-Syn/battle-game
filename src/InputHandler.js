import { characterDirection } from "./constants/character.js";
import { Ctrl, ctrls } from "./constants/ctrl.js";

const heldKeys = new Set();

function handleKeyDown(e){
    e.preventDefault();
    heldKeys.add(e.code);
}

function handleKeyUp(e){
     e.preventDefault();
    heldKeys.delete(e.code);

}

export function registerKeyEvents(){
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
}

export const isKeyDown = (code) => heldKeys.has(code);
export const isKeyUp = (code) => !heldKeys.has(code);

export const isLeft = (id) => isKeyDown(ctrls[id].keyboard[Ctrl.LEFT]);
export const isRight = (id) => isKeyDown(ctrls[id].keyboard[Ctrl.RIGHT]);
export const isUp = (id) => isKeyDown(ctrls[id].keyboard[Ctrl.UP]);
export const isDown = (id) => isKeyDown(ctrls[id].keyboard[Ctrl.DOWN]);

export const isForward = (id, direction) => direction === characterDirection.RIGHT ? isRight(id) : isLeft(id);
export const isBackward = (id, direction) => direction === characterDirection.LEFT ? isRight(id) : isLeft(id);