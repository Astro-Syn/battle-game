import { Spork } from "./spork.js";
import { Stage } from "./stage.js";
import { Vexel } from "./vexel.js";


const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
   
}


window.onload = function() {
    const canvasElement = document.querySelector('canvas');
    const ctx = canvasElement.getContext('2d');

    canvasElement.width = GameViewport.WIDTH;
    canvasElement.height = GameViewport.HEIGHT;


    const spork = new Spork(90, 150, 1);
    const vexel = new Vexel(90, 150, -1);
    const stage = new Stage();

    function frame() {
      spork.update(ctx);
      vexel.update(ctx);
      stage.draw(ctx);
      spork.draw(ctx);
      vexel.draw(ctx);

    window.requestAnimationFrame(frame);
    }

    window.requestAnimationFrame(frame);

   
}