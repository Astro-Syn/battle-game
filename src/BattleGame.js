import { Spork } from "../fighters/Spork.js";
import { Stage } from "./entities/Stage.js";
import { Vexel } from "../fighters/Vexel.js";
import { FpsCounter } from "./entities/FpsCounter.js";
import { BATTLE_FLOOR } from "./constants/stage.js";
import { characterDirection} from "./constants/character.js";
import { registerKeyEvents } from "./InputHandler.js";

export class BattleGame {
    constructor(){
        this.ctx = this.getContext();
         this.characters = [
         new Spork(90, BATTLE_FLOOR, characterDirection.LEFT, 0),
        new Vexel(180, BATTLE_FLOOR, characterDirection.RIGHT, 1),
    ]
    
    this.entities = [
        new Stage(),
       ...this.characters,
        new FpsCounter(),
    ]

    this.frameTime = {
     previous: 0,
    secondsPassed: 0,
    }
    }

    getContext(){
    const canvasElement = document.querySelector('canvas');
    const ctx = canvasElement.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    return ctx;
}

update(){
     for (const entity of this.entities){
        entity.update(this.frameTime, this.ctx);
    }
}

draw(){
     for (const entity of this.entities){
        entity.draw(this.ctx);
    }
}

 frame(time) {
        window.requestAnimationFrame(this.frame.bind(this));

    this.frameTime = {
        secondsPassed: (time - this.frameTime.previous) / 1000,
        previous:  time
        }
        
        this.update();
        this.draw();
    }



    start(){
       registerKeyEvents()
    window.requestAnimationFrame(this.frame.bind(this));
    }
      
}


