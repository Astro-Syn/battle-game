
import { pollGamepads, registerKeyEvents, regGamepadEvents } from "./InputHandler.js";

import { getContext } from "./utils/ctx.js";
import { BattleScene } from "./entities/levels/BattleScene.js";


export class BattleGame {
    ctx = getContext();
    
    frameTime = {
        previous: 0,
        secondsPassed: 0,
    };
    constructor(){
    this.level = new BattleScene();

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
        this.level.update(this.frameTime, this.ctx);
        this.level.draw(this.ctx);
    }



    start(){
       registerKeyEvents();
        regGamepadEvents();

    window.requestAnimationFrame(this.frame.bind(this));
    }
      
}


