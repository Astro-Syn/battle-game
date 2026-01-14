import { Fighter } from "./Fighter.js";

 export class Spork extends Fighter {
    constructor(x, y, velocity){
        super('Spork', x, y, velocity);
        this.image = document.querySelector('img[alt="spork"]');
    }
 }
 
 
