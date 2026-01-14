import { Fighter } from "./Fighter.js";

 export class Vexel extends Fighter {
    constructor(x, y, velocity){
        super('Vexel', x, y, velocity);
        this.image = document.querySelector('img[alt="vexel"]');
    }
 }
 