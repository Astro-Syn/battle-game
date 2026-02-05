import { CharacterId } from "../constants/character.js";
import { createDefaultCharacterState } from "./characterState.js";

export const gameState = {
    characters: [
        createDefaultCharacterState(CharacterId.SPORK),
        createDefaultCharacterState(CharacterId.VEXEL),
    ],
}