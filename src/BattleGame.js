import { pollGamepads, registerKeyEvents, regGamepadEvents } from "./InputHandler.js";
import { getContext } from "./utils/ctx.js";
import { StartScreen } from "./entities/levels/StartScreen.js";
import { BattleScene } from "./entities/levels/BattleScene.js";
import { playMusic} from "./utils/AudioManager.js";

export class BattleGame {
    ctx = getContext();

    frameTime = {
        previous: 0,
        secondsPassed: 0,
    };

    constructor() {
        const firstUserGesture = () => {
            playMusic('./sounds/MS-opening.mp3');
            window.removeEventListener('click', firstUserGesture);
            window.removeEventListener('keydown', firstUserGesture);
        };
        window.addEventListener('click', firstUserGesture);
        window.addEventListener('keydown', firstUserGesture);

        this.setScene(
            new StartScreen(() => {
                this.setScene(new BattleScene());
            })
        );
    }

    setScene(scene) {
        if (this.scene && this.scene.destroy) {
            this.scene.destroy();
        }

        this.scene = scene;

        if (scene instanceof BattleScene) {
            playMusic('./sounds/Track1mp3.mp3');
        }
    }

    frame(time) {
        window.requestAnimationFrame(this.frame.bind(this));

        this.frameTime = {
            secondsPassed: (time - this.frameTime.previous) / 1000,
            previous: time,
        };

        pollGamepads();

        if (this.scene) {
            this.scene.update(this.frameTime, this.ctx);
            this.scene.draw(this.ctx);
        }
    }

    start() {
        registerKeyEvents();
        regGamepadEvents();
        window.requestAnimationFrame(this.frame.bind(this));
    }
}
