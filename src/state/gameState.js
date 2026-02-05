import { CharacterId } from "../constants/character";
import { createDefaultCharacterState } from "./characterState";

export const gameState = {
    characters: [
        createDefaultCharacterState(CharacterId.SPORK),
    ],
}