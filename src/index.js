import { Spork } from "../fighters/Spork.js";
import { Stage } from "./entities/Stage.js";
import { Vexel } from "../fighters/Vexel.js";
import { FpsCounter } from "./entities/FpsCounter.js";


const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
   
}


window.addEventListener('load', function() {
    const canvasElement = document.querySelector('canvas');
    const ctx = canvasElement.getContext('2d');

    canvasElement.width = GameViewport.WIDTH;
    canvasElement.height = GameViewport.HEIGHT;

    const entities = [
        new Stage(),
        new Spork(90, 150, 150),
        new Vexel(90, 150, -150),
        new FpsCounter()
    ]
   

    let frameTime = {
     previous: 0,
    secondsPassed: 0,
    }



    function frame(time) {
        window.requestAnimationFrame(frame);

    frameTime = {
        secondsPassed: (time - frameTime.previous) / 1000,
        previous:  time
        }
        


    for (const entity of entities){
        entity.update(frameTime, ctx);
    }

    for (const entity of entities){
        entity.draw(ctx);
    }

      console.log(time);

    
    }

    window.requestAnimationFrame(frame);

   
}
)