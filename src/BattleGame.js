
import { pollGamepads, registerKeyEvents, regGamepadEvents } from "./InputHandler.js";
import { getContext } from "./utils/ctx.js";
import { StartScreen } from "./entities/levels/StartScreen.js";
import { BattleScene } from "./entities/levels/BattleScene.js";


export class BattleGame {
    ctx = getContext();

    frameTime = {
        previous: 0,
        secondsPassed: 0,
    };

    constructor() {
     
        this.setScene(
            new StartScreen(() => {
                this.setScene(new BattleScene());
            })
        );
    }

    setScene(scene) {
        this.scene = scene;
    }

    frame(time) {
        window.requestAnimationFrame(this.frame.bind(this));

        this.frameTime = {
            secondsPassed: (time - this.frameTime.previous) / 1000,
            previous: time,
        };

        pollGamepads();

        this.scene.update(this.frameTime, this.ctx);
        this.scene.draw(this.ctx);
    }

    start() {
        registerKeyEvents();
        regGamepadEvents();
        window.requestAnimationFrame(this.frame.bind(this));
    }
}


