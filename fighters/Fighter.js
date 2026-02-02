import { CHARACTER_START_DISTANCE, characterDirection, CharacterState } from "../src/constants/character.js";
import { Ctrl } from "../src/constants/ctrl.js";
import { BATTLE_FLOOR, BATTLE_MID_POINT, BATTLE_PADDING } from "../src/constants/stage.js";
import * as ctrl from "../src/InputHandler.js";
import { rectsOverlap } from "../src/utils/collisions.js";

export class Fighter {
    constructor(name, playerId){
        this.name = name;        
        this.playerId = playerId;
        this.position = {
            x: BATTLE_MID_POINT + BATTLE_PADDING + (playerId === 0 ? -CHARACTER_START_DISTANCE : CHARACTER_START_DISTANCE), 
            y: BATTLE_FLOOR
        };
        this.velocity = { x: 0, y: 0};
        this.initialVelocity = {};
        this.direction = playerId === 0 ? characterDirection.RIGHT : characterDirection.LEFT;
        this.gravity = 0;
        this.frames = new Map();
        this.animationFrame = 0;
        this.animationTimer = 0;
        this.animations = {};

        this.image = new Image();

        this.opponent;

        this.pushBox = { x: 0, y: 0, width: 0, height: 0 };

        this.states = {
            [CharacterState.IDLE]: {
                init: this.handleIdleInit.bind(this),
                update: this.handleIdleState.bind(this),
                validFrom: [
                    undefined, CharacterState.IDLE, CharacterState.RUN_FORWARD, CharacterState.RUN_BACKWARD, CharacterState.JUMP_BACKWARDS, CharacterState.JUMP_FORWARDS, CharacterState.JUMP_UP, CharacterState.CROUCH_UP, CharacterState.LIGHT_MEELE, CharacterState.MED_MEELE, CharacterState.HEAVY_MEELE
                
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
            [CharacterState.JUMP_START]: {
                init: this.handleJumpStartInit.bind(this),
                update: this.handleJumpStartState.bind(this),
                validFrom: [
                    CharacterState.IDLE, CharacterState.RUN_FORWARD, CharacterState.RUN_BACKWARD, 
                ]
            }, 

             [CharacterState.JUMP_UP]: {
                init: this.handleJumpInit.bind(this),
                update: this.handleJumpState.bind(this),
                validFrom: [
                    CharacterState.JUMP_START
                ],
            },
            [CharacterState.JUMP_FORWARDS]: {
                 init: this.handleJumpInit.bind(this),
                update: this.handleJumpState.bind(this),
                validFrom: [
                    CharacterState.JUMP_START
                ],
            },
            [CharacterState.JUMP_BACKWARDS]: {
                 init: this.handleJumpInit.bind(this),
                update: this.handleJumpState.bind(this),
                validFrom: [
                    CharacterState.JUMP_START
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
            }, 
            [CharacterState.LIGHT_MEELE]: {
                init: this.handleLightMeeleInit.bind(this),
                update: this.handleLightMeeleState.bind(this),
                validFrom: [CharacterState.IDLE, CharacterState.RUN_FORWARD, CharacterState.RUN_BACKWARD]
            },
             [CharacterState.MED_MEELE]: {
                init: this.handleMedMeeleInit.bind(this),
                update: this.handleMedMeeleState.bind(this),
                validFrom: [CharacterState.IDLE, CharacterState.RUN_FORWARD, CharacterState.RUN_BACKWARD]
            },
             [CharacterState.HEAVY_MEELE]: {
                init: this.handleHeavyMeeleInit.bind(this),
                update: this.handleMedMeeleState.bind(this),
                validFrom: [CharacterState.IDLE, CharacterState.RUN_FORWARD, CharacterState.RUN_BACKWARD]
            },

        };
        this.changeState(CharacterState.IDLE);
    }

    isAnimationCompleted = () => this.animations[this.currentState][this.animationFrame][1] === -2;
    
    hasCollidedWithOpponent = () => rectsOverlap(
        this.position.x + this.pushBox.x, 
        this.position.y + this.pushBox.y, 
        this.pushBox.width, this.pushBox.height, 
        this.opponent.position.x + this.opponent.pushBox.x, 
        this.opponent.position.y + this.opponent.pushBox.y, 
        this.opponent.pushBox.width, 
        this.opponent.pushBox.height,
    );

    resetVelocities(){
        this.velocity.x = 0;
        this.velocity.y = 0;
    }


    getDirection(){
       if (this.position.x + this.pushBox.x + this.pushBox.width <= this.opponent.position.x + this.opponent.pushBox.x){
        return characterDirection.RIGHT;
       } else if (
        this.position.x + this.pushBox.x 
        >= this.opponent.position.x + this.opponent.pushBox.x + this.opponent.pushBox.width
    ){
        return characterDirection.LEFT;
       }
       
       return this.direction;
    }
    getPushBox(frameKey){
        const [, [x, y, width, height] = [0, 0, 0, 0]] = this.frames.get(frameKey);

        return { x, y, width, height };
    }

    changeState(newState){ 
        if(newState === this.currentState || !this.states[newState].validFrom.includes(this.currentState)) return;
        this.currentState = newState;
        this.animationFrame = 0;
        this.states[this.currentState].init();
    }

    handleIdleInit(){
        this.resetVelocities();
    }


    handleMoveInit(){
        this.velocity.x = this.initialVelocity.x[this.currentState] ?? 0;
    }

  
    handleJumpInit() {
        this.velocity.y = this.initialVelocity.jump;
        this.handleMoveInit();
    }

    handleCrouchDownInit(){
        this.resetVelocities();
    }

    handleJumpStartInit(){
        this.resetVelocities();
    }

    handleLightMeeleInit(){
        this.handleIdleInit();
    }

    handleMedMeeleInit(){
        this.resetVelocities();
    }


    handleHeavyMeeleInit(){
        this.resetVelocities();
    }




    handleIdleState() {
        if(ctrl.isUp(this.playerId)) {
            this.changeState(CharacterState.JUMP_START);
        } else if (ctrl.isDown(this.playerId)) {
            this.changeState(CharacterState.CROUCH_DOWN);
        }
        else if (ctrl.isBackward(this.playerId, this.direction)) {
            this.changeState(CharacterState.RUN_BACKWARD);
        }
        else if(ctrl.isForward(this.playerId, this.direction)) {
            this.changeState(CharacterState.RUN_FORWARD);
    }
    else if (ctrl.isLightPunch(this.playerId)){
        this.changeState(CharacterState.LIGHT_MEELE);
    }
      else if (ctrl.isMedMeele(this.playerId)){
        this.changeState(CharacterState.MED_MEELE);
    }
      else if (ctrl.isHeavyMeele(this.playerId)){
        this.changeState(CharacterState.HEAVY_MEELE);
    }
}
    


    handleRunForwardState(){
        if(!ctrl.isForward(this.playerId, this.direction)) this.changeState(CharacterState.IDLE);
        if(ctrl.isUp(this.playerId)) this.changeState(CharacterState.JUMP_START);
        if(ctrl.isDown(this.playerId)) this.changeState(CharacterState.CROUCH_DOWN);
    }

    handleRunBackwardState(){
        if(!ctrl.isBackward(this.playerId, this.direction)) this.changeState(CharacterState.IDLE);
         if(ctrl.isUp(this.playerId)) this.changeState(CharacterState.JUMP_START);
         if(ctrl.isDown(this.playerId)) this.changeState(CharacterState.CROUCH_DOWN);
    }

    handleCrouchDownState(){
        if(this.isAnimationCompleted()){
            this.changeState(CharacterState.CROUCH);    
        }
    }

    handleCrouchUpState(){
         if(this.isAnimationCompleted()){
            this.changeState(CharacterState.IDLE);
        }
    }

    handleJumpStartState(){
        if(this.animations[this.currentState][this.animationFrame][1] === -2){
            if(ctrl.isBackward(this.playerId, this.direction)){
                this.changeState(CharacterState.JUMP_BACKWARDS)
            } else if (ctrl.isForward(this.playerId, this.direction)) {
                this.changeState(CharacterState.JUMP_FORWARDS);
            } else {
                this.changeState(CharacterState.JUMP_UP);
            }
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

    handleLightMeeleState(){
        if(this.animationFrame < 2) return;
        if(ctrl.isLightPunch(this.playerId)) this.animationFrame = 0;
        if(!this.isAnimationCompleted()) return;
        this.changeState(CharacterState.IDLE);
    }

    handleMedMeeleState(){
        if(!this.isAnimationCompleted()) return;
        this.changeState(CharacterState.IDLE);
    }


   


    updateStageConstraints(time, ctx, camera){
    if(this.position.x > camera.position.x + ctx.canvas.width - this.pushBox.width ){
       this.position.x = camera.position.x + ctx.canvas.width - this.pushBox.width;
    }

    if (this.position.x < camera.position.x +  this.pushBox.width){    
        this.position.x = camera.position.x + this.pushBox.width;
    }

    if(this.hasCollidedWithOpponent()){
        if(this.position.x <= this.opponent.position.x){
            this.position.x = Math.max(
                (this.opponent.position.x + this.opponent.pushBox.x) - (this.pushBox.x + this.pushBox.width),
                camera.position.x + this.pushBox.width,
            );
        

            if([
                CharacterState.IDLE, CharacterState.CROUCH, CharacterState.JUMP_UP, CharacterState.JUMP_FORWARDS, CharacterState.JUMP_BACKWARDS,
            ].includes(this.opponent.currentState)){
                this.opponent.position.x += 66 * time.secondsPassed;
            }
        }

        if(this.position.x >= this.opponent.position.x){
            this.position.x = Math.min(
                (this.opponent.position.x + this.opponent.pushBox.x + this.opponent.pushBox.width) + (this.pushBox.width + this.pushBox.x),
                camera.position.x + ctx.canvas.width - this.pushBox.width,
            );
              if([
                CharacterState.IDLE, CharacterState.CROUCH, CharacterState.JUMP_UP, CharacterState.JUMP_FORWARDS, CharacterState.JUMP_BACKWARDS,
            ].includes(this.opponent.currentState)){
                this.opponent.position.x -= 66 * time.secondsPassed;
            }
        }
    }
    }

    updateAnimation(time) {
     const animation = this.animations[this.currentState];
        const [frameKey, frameDelay] = animation[this.animationFrame];

         if (time.previous > this.animationTimer + frameDelay){
        this.animationTimer = time.previous;

            if(frameDelay > 0) {
                this.animationFrame++;
                this.pushBox = this.getPushBox(frameKey);
            }

         if (this.animationFrame >= animation.length) {
            this.animationFrame = 0;
        }
        }
    }

    update(time, ctx, camera) {
         
    this.position.x += (this.velocity.x * this.direction) * time.secondsPassed;
    this.position.y += this.velocity.y * time.secondsPassed;

    if([CharacterState.IDLE, CharacterState.RUN_FORWARD, CharacterState.RUN_BACKWARD].includes(this.currentState)){
        this.direction = this.getDirection();
    }

    

    this.states[this.currentState].update(time, ctx);
    this.updateAnimation(time);
    this.updateStageConstraints(time, ctx, camera);
    }

    drawDebug(ctx, camera){
        const [frameKey] = this.animations[this.currentState][this.animationFrame];
        const pushBox = this.getPushBox(frameKey);

        ctx.beginPath();
        ctx.strokeStyle = 'lime';
        ctx.fillStyle = '#ff55cc55'
        ctx.fillRect(
            Math.floor(this.position.x + (pushBox.x * this.direction) - camera.position.x) + 0.5,
            Math.floor(this.position.y + pushBox.y - camera.position.y) + 0.5,
            pushBox.width * this.direction,
            pushBox.height,
        );
        

        ctx.rect(
            Math.floor(this.position.x + (pushBox.x * this.direction) - camera.position.x) + 0.5,
            Math.floor(this.position.y + pushBox.y - camera.position.y) + 0.5,
            pushBox.width * this.direction,
            pushBox.height,
        )

        ctx.stroke();

        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.strokeStyle = 'lime';
        ctx.moveTo(Math.floor(this.position.x - camera.position.x) - 4, Math.floor(this.position.y - camera.position.y) - 0.5);
        ctx.lineTo(Math.floor(this.position.x - camera.position.x) + 5, Math.floor(this.position.y - camera.position.y) - 0.5);
        ctx.moveTo(Math.floor(this.position.x - camera.position.x), + 0.5, Math.floor(this.position.y - camera.position.y) - 5);
        ctx.lineTo(Math.floor(this.position.x - camera.position.x), + 0.5, Math.floor(this.position.y - camera.position.y) + 4);
        ctx.stroke();
    }

    draw(ctx, camera){
        const [frameKey] = this.animations[this.currentState][this.animationFrame];
        const [[
            [x, y, width, height], 
            [originX, originY],
        ]] = this.frames.get(frameKey);
        
        ctx.scale(this.direction, 1);

        ctx.drawImage(this.image, x, y, width, height, Math.floor((this.position.x - camera.position.x) * this.direction) - originX, Math.floor(this.position.y - camera.position.y) - originY, width, height); 
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        this.drawDebug(ctx, camera);
    }
}