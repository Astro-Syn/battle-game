import { CharacterState } from "../src/constants/character.js";
import { BATTLE_FLOOR } from "../src/constants/stage.js";

export class Fighter {
    constructor(name, x, y, direction){
        this.name = name;        
        
        
        this.position = {x, y};
        this.velocity = { x: 0, y: 0};
        this.initialVelocity = {};
        this.direction = direction;
        
        this.gravity = 0;
        this.frames = new Map();
        this.animationFrame = 0;
        this.animationTimer = 0;
        this.animations = {};
        this.image = new Image();

        this.states = {
            [CharacterState.IDLE]: {
                init: this.handleRunIdleInit.bind(this),
                update: this.handleRunIdleState.bind(this),
            },
            [CharacterState.RUN_FORWARD]: {
                init: this.handleRunForwardInit.bind(this),
                update: this.handleRunForwardState.bind(this),
            },
            [CharacterState.RUN_BACKWARD]: {
                init: this.handleRunBackwardInit.bind(this),
                update: this.handleRunBackwardState.bind(this),
            },
             [CharacterState.JUMP_UP]: {
                init: this.handleJumpUpInit.bind(this),
                update: this.handleJumpUpState.bind(this),
            }
        }
        this.changeState(CharacterState.IDLE);
    }

    changeState(newState){ 
        this.currentState = newState;
        this.animationFrame = 0;
        this.states[this.currentState].init();
    }

    handleRunIdleInit(){
        this.velocity.x = 0;
        this.velocity.y = 0;
    }

    handleRunIdleState(){

    }

    handleRunForwardInit(){
        this.velocity.x = 150 * this.direction;
    }

    handleRunForwardState() {

    }

    handleRunBackwardInit(){
        this.velocity.x = -150 * this.direction;
    }

    handleRunBackwardState(){

    }

    handleJumpUpInit() {
        this.velocity.y = this.initialVelocity.jump;
    }

    handleJumpUpState(time) {
        this.velocity.y += this.gravity * time.secondsPassed;
        
        if (this.position.y > BATTLE_FLOOR){
            this.position.y = BATTLE_FLOOR;
            this.changeState(CharacterState.IDLE);
        }
    }

    updateStageConstraints(ctx){

        const WIDTH = 32;

    if(this.position.x > ctx.canvas.width - WIDTH ){
       this.position.x = ctx.canvas.width - WIDTH;
    }

    if (this.position.x < WIDTH){    
        this.position.x = WIDTH;
    }
    }

    updateAnimation(time) {
         if (time.previous > this.animationTimer + 70){
        this.animationTimer = time.previous;

         this.animationFrame++;
         if (this.animationFrame > this.animations[this.currentState].length) this.animationFrame = 0;
    }
    }

    update(time, ctx) {
         
         this.position.x += this.velocity.x * time.secondsPassed;
         this.position.y += this.velocity.y * time.secondsPassed;
    this.states[this.currentState].update(time, ctx);
    this.updateAnimation(time);
    this.updateStageConstraints(ctx);
    }

    drawDebug(ctx){
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.strokeStyle = 'lime';
        ctx.moveTo(Math.floor(this.position.x) - 4.5, Math.floor(this.position.y));
        ctx.lineTo(Math.floor(this.position.x) + 4.5, Math.floor(this.position.y));
        ctx.moveTo(Math.floor(this.position.x), Math.floor(this.position.y) - 4.5);
        ctx.lineTo(Math.floor(this.position.x), Math.floor(this.position.y) + 4.5);
        ctx.stroke();
    }

    draw(ctx){
        const [[x, y, width, height], [originX, originY],] = this.frames.get(this.animations[this.currentState][this.animationFrame]);
        
        ctx.scale(this.direction, 1);

        ctx.drawImage(this.image, x, y, width, height, Math.floor(this.position.x * this.direction) - originX, Math.floor(this.position.y) - originY, width, height); 
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        this.drawDebug(ctx);
    }
}