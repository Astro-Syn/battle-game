import { Level } from "./Level.js";
import { Spork } from '../../fighters/Spork.js';
import { Vexel } from "../../fighters/Vexel.js";
import { Camera } from "../../Camera.js";
import { Shadow } from "../../fighters/Shadow.js";
import { StatusBar } from "../ol/StatusBar.js";
import {FpsCounter} from "../FpsCounter.js";
import { BATTLE_MID_POINT, BATTLE_PADDING } from "../../constants/stage.js";
import { gameState } from "../../state/gameState.js";
import { CharacterId } from "../../constants/character.js";

export class BattleScene {
    characters = [];
    camera = undefined;
    shadows = [];
    entities = [];
    

    constructor(){
        
        this.stage = new Level();

         this.overlays = [
                new StatusBar(this.characters),
                new FpsCounter(),
            ];

            this.characters = this.getCharacterEntities();
            this.camera = new Camera(BATTLE_MID_POINT + BATTLE_PADDING - 192, -10, this.characters);
            this.shadows = this.characters.map(charater => new Shadow(charater));
    }

    getCharacterEntityClass(id){
        switch (id) {
            case CharacterId.SPORK:
                return Spork;
            case CharacterId.VEXEL:
                return Vexel;
            default:
                throw new Error('Character request cannot be made')
        }
    }

    getCharacterEntity(characterState, index){
        const CharacterEntityClass = this.getCharacterEntityClass(characterState.id);
        return new CharacterEntityClass(index);
    }

    getCharacterEntities(){
        const characterEntities = gameState.characters.map(this.getCharacterEntity.bind(this));

    characterEntities[0].opponent = characterEntities[1];
    characterEntities[1].opponent = characterEntities[0];

    return characterEntities;
    }

    updateCharacters(time, ctx){
        for (const character of this.characters) {
            character.update(time, ctx, this.camera);
        }

    }

    updateShadows(time, ctx){
        for( const shadow of this.shadows){
            shadow.update(time, ctx, this.camera);
        }

    }

    updateEntities(time, ctx){
        for (const entity of this.entities){
            entity.update(time, ctx, this.camera);
        }
    }

    updateOverlays(time, ctx){
        for (const overlay of this.overlays){
            overlay.update(time, ctx, this.camera);
        }

    }

    update(time, ctx) {
        this.updateCharacters(time, ctx);
        this.updateShadows(time, ctx);
        this.stage.update(time);
        this.updateEntities(time, ctx);
        this.camera.update(time, ctx);
        this.updateOverlays(time, ctx);
    }

    drawCharacters(ctx){
        for(const character of this.characters){
            character.draw(ctx, this.camera);
        }
    }

    drawShadows(ctx){
          for(const shadow of this.shadows){
            shadow.draw(ctx, this.camera);
        }
    }

    drawEntities(ctx){
          for(const entity of this.entities){
            entity.draw(ctx, this.camera);
        }
    }

    drawOverlays(ctx){
          for(const overlay of this.overlays){
            overlay.draw(ctx, this.camera);
        }
    }

    draw(ctx){
        this.stage.draw(ctx, this.camera);
        this.drawShadows(ctx);
        this.drawCharacters(ctx);
        this.drawEntities(ctx);
        this.drawOverlays(ctx);

    }
}