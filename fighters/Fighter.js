import { CharacterState } from "../src/constants/character.js";
import { BATTLE_FLOOR } from "../src/constants/stage.js";
import * as ctrl from "../src/InputHandler.js";

export class Fighter {
    constructor(name, x, y, direction, playerId){
        this.name = name;        
        this.playerId = playerId;
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
                init: this.handleIdleInit.bind(this),
                update: this.handleIdleState.bind(this),
                validFrom: [
                    undefined, CharacterState.IDLE, CharacterState.RUN_FORWARD, CharacterState.RUN_BACKWARD, CharacterState.JUMP_BACKWARDS, CharacterState.JUMP_FORWARDS, CharacterState.JUMP_UP, CharacterState.CROUCH_UP
                
                ],
            },
            [CharacterState.RUN_FORWARD]: {
                init: this.handleMoveInit.bind(this),
                update: this.handleRunForwardState.bind(this),
                validFrom: [
                    CharacterState.IDLE, CharacterState.JUMP_BACKWARDS
                ],
            },
            [CharacterState.RUN_BACKWARD]: {
                init: this.handleMoveInit.bind(this),
                update: this.handleRunBackwardState.bind(this),
                validFrom: [
                    CharacterState.IDLE, CharacterState.RUN_FORWARD
                ],
            },
             [CharacterState.JUMP_UP]: {
                init: this.handleJumpInit.bind(this),
                update: this.handleJumpState.bind(this),
                validFrom: [
                    CharacterState.IDLE
                ],
            },
            [CharacterState.JUMP_FORWARDS]: {
                 init: this.handleJumpInit.bind(this),
                update: this.handleJumpState.bind(this),
                validFrom: [
                    CharacterState.IDLE, CharacterState.RUN_FORWARD
                ],
            },
            [CharacterState.JUMP_BACKWARDS]: {
                 init: this.handleJumpInit.bind(this),
                update: this.handleJumpState.bind(this),
                validFrom: [
                    CharacterState.IDLE, CharacterState.JUMP_BACKWARDS
                ],
            },
            [CharacterState.CROUCH]: {
                init: () => {},
                update: this.handleCrouchState.bind(this),
                validFrom: [CharacterState.CROUCH_DOWN],
            },

            [CharacterState.CROUCH_UP]: {
                init: () => {},
                update: this.handleCrouchUpState.bind(this),
                validFrom: [CharacterState.CROUCH],
            }, 
            [CharacterState.CROUCH_DOWN]: {
                init: this.handleCrouchDownInit.bind(this),
                update: this.handleCrouchDownState.bind(this),
                validFrom: [CharacterState.IDLE, CharacterState.RUN_FORWARD, CharacterState.RUN_BACKWARD],
            }
        };
        this.changeState(CharacterState.IDLE);
    }

    changeState(newState){ 
        if(newState === this.currentState || !this.states[newState].validFrom.includes(this.currentState)) return;
        this.currentState = newState;
        this.animationFrame = 0;
        this.states[this.currentState].init();
    }

    handleIdleInit(){
        this.velocity.x = 0;
        this.velocity.y = 0;
    }


    handleMoveInit(){
        this.velocity.x = this.initialVelocity.x[this.currentState] ?? 0;
    }

  
    handleJumpInit() {
        this.velocity.y = this.initialVelocity.jump;
        this.handleMoveInit();
    }

    handleCrouchDownInit(){
        this.handleIdleInit();
    }

    handleIdleState() {
        if(ctrl.isUp(this.playerId)) this.changeState(CharacterState.JUMP_UP);
        if(ctrl.isDown(this.playerId)) this.changeState(CharacterState.CROUCH_DOWN);
        if(ctrl.isBackward(this.playerId, this.direction)) this.changeState(CharacterState.RUN_BACKWARD);
        if(ctrl.isForward(this.playerId, this.direction)) this.changeState(CharacterState.RUN_FORWARD);
    }

    handleRunForwardState(){
        if(!ctrl.isForward(this.playerId, this.direction)) this.changeState(CharacterState.IDLE);
        if(ctrl.isUp(this.playerId)) this.changeState(CharacterState.JUMP_FORWARDS);
    }

    handleRunBackwardState(){
        if(!ctrl.isBackward(this.playerId, this.direction)) this.changeState(CharacterState.IDLE);
         if(ctrl.isUp(this.playerId)) this.changeState(CharacterState.JUMP_BACKWARDS);
         if(ctrl.isDown(this.playerId)) this.changeState(CharacterState.CROUCH_DOWN);
    }

    handleCrouchDownState(){
        if(this.animations[this.currentState][this.animationFrame][1] === -2){
            this.changeState(CharacterState.CROUCH);
        }
    }

    handleCrouchUpState(){
         if(this.animations[this.currentState][this.animationFrame][1] === -2){
            this.changeState(CharacterState.IDLE);
        }
    }

    handleJumpState(time) {
        this.velocity.y += this.gravity * time.secondsPassed;
        
        if (this.position.y > BATTLE_FLOOR){
            this.position.y = BATTLE_FLOOR;
            this.changeState(CharacterState.IDLE);
        }
    }

    handleCrouchState(){
        if(!ctrl.isDown(this.playerId)) this.changeState(CharacterState.CROUCH_UP);
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
     const animation = this.animations[this.currentState];
        const [, frameDelay] = animation[this.animationFrame];

         if (time.previous > this.animationTimer + frameDelay){
        this.animationTimer = time.previous;

            if(frameDelay > 0) {
                this.animationFrame++;
            }

         if (this.animationFrame >= animation.length) {
            this.animationFrame = 0;
        }
        }
    }

    update(time, ctx) {
         
    this.position.x += (this.velocity.x * this.direction) * time.secondsPassed;
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
        const [frameKey] = this.animations[this.currentState][this.animationFrame];
        const [
            [x, y, width, height], 
            [originX, originY],
        ] = this.frames.get(frameKey);
        
        ctx.scale(this.direction, 1);

        ctx.drawImage(this.image, x, y, width, height, Math.floor(this.position.x * this.direction) - originX, Math.floor(this.position.y) - originY, width, height); 
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        this.drawDebug(ctx);
    }
}