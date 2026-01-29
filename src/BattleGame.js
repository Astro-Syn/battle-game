import { Spork } from "../fighters/Spork.js";
import { Level } from "./entities/Level.js";
import { Vexel } from "../fighters/Vexel.js";
import { FpsCounter } from "./entities/FpsCounter.js";
import { BATTLE_MID_POINT, BATTLE_PADDING } from "./constants/stage.js";
import { pollGamepads, registerKeyEvents, regGamepadEvents } from "./InputHandler.js";
import { Shadow } from "../fighters/Shadow.js";
import { StatusBar } from "./entities/ol/StatusBar.js";
import { Camera } from "./Camera.js";
import { getContext } from "./utils/ctx.js";


export class BattleGame {
    constructor(){
        this.ctx = getContext();
         this.characters = [new Spork(0), new Vexel(1)];

    this.characters[0].opponent = this.characters[1];
    this.characters[1].opponent = this.characters[0];

    this.camera = new Camera(BATTLE_MID_POINT + BATTLE_PADDING - (this.ctx.canvas.width / 2), -10, this.characters);
    
    this.entities = [
        new Level(),
        ...this.characters.map(character => new Shadow(character)),
       ...this.characters,
        new FpsCounter(),
        new StatusBar(this.characters),
    ]

    this.frameTime = {
     previous: 0,
    secondsPassed: 0,
    }
    }



update(){
    this.camera.update(this.frameTime, this.ctx);
     for (const entity of this.entities){
        entity.update(this.frameTime, this.ctx, this.camera);
    }
}

draw(){
     for (const entity of this.entities){
        entity.draw(this.ctx, this.camera);
    }
}

 frame(time) {
        window.requestAnimationFrame(this.frame.bind(this));

    this.frameTime = {
        secondsPassed: (time - this.frameTime.previous) / 1000,
        previous:  time
        }
        
        pollGamepads();
        this.update();
        this.draw();
    }



    start(){
       registerKeyEvents();
        regGamepadEvents();

    window.requestAnimationFrame(this.frame.bind(this));
    }
      
}


