import { HEALTH_DAMAGE_COLOR, HEALTH_MAX_HIT_POINTS, TIME_DELAY, TIME_FRAME_KEYS, TIME_RED_DELAY } from "../../constants/battle.js";
import { gameState } from "../../state/gameState.js";
import { drawFrame } from "../../utils/ctx.js";



export class StatusBar {
    constructor(){
        this.image = document.querySelector('img[alt="randol"]');

        this.time = 99;
        this.timeTimer = 0;
        this.timeRedTimer = 0;
        this.useRedFrames = false;

        this.healthBars = [{
            timer: 0,
            hitPoints: HEALTH_MAX_HIT_POINTS,
        }, {
            timer: 0,
            hitPoints: HEALTH_MAX_HIT_POINTS,
        }];
        

        this.frames = new Map([
            ['health-bar-1', [6, 6, 150, 15]],
            ['health-bar-2', [7, 23, 150, 15]],
            ['spork-name', [10, 86, 40, 10]],
            ['vexel-name', [52, 86, 40, 10]],
            ['player-1-score', [6, 118, 27, 16]],
            ['player-2-score', [48, 119, 33, 16]],

           
            [`${TIME_FRAME_KEYS[0]}-1`, [3, 66, 14, 16]],
            [`${TIME_FRAME_KEYS[0]}-2`, [14, 66, 14, 16]],
            [`${TIME_FRAME_KEYS[0]}-3`, [28, 66, 14, 16]],
            [`${TIME_FRAME_KEYS[0]}-4`, [43, 66, 14, 16]],
            [`${TIME_FRAME_KEYS[0]}-5`, [57, 66, 14, 16]],
            [`${TIME_FRAME_KEYS[0]}-6`, [72, 66, 14, 16]],
            [`${TIME_FRAME_KEYS[0]}-7`, [86, 66, 14, 16]],
            [`${TIME_FRAME_KEYS[0]}-8`, [101, 66, 14, 16]],
            [`${TIME_FRAME_KEYS[0]}-9`, [114, 66, 14, 16]],
            [`${TIME_FRAME_KEYS[0]}-0`, [129, 66, 14, 16]],

            [`${TIME_FRAME_KEYS[1]}-1`, [3, 98, 14, 16]],
            [`${TIME_FRAME_KEYS[1]}-2`, [14, 98, 14, 16]],
            [`${TIME_FRAME_KEYS[1]}-3`, [28, 98, 14, 16]],
            [`${TIME_FRAME_KEYS[1]}-4`, [43, 98, 14, 16]],
            [`${TIME_FRAME_KEYS[1]}-5`, [57, 98, 14, 16]],
            [`${TIME_FRAME_KEYS[1]}-6`, [72, 98, 14, 16]],
            [`${TIME_FRAME_KEYS[1]}-7`, [86, 98, 14, 16]],
            [`${TIME_FRAME_KEYS[1]}-8`, [101, 98, 14, 16]],
            [`${TIME_FRAME_KEYS[1]}-9`, [114, 98, 14, 16]],
            [`${TIME_FRAME_KEYS[1]}-0`, [129, 98, 14, 16]],

            ['score-1', [10, 152, 11, 9]],
            ['score-2', [25, 152, 11, 9]],
            ['score-3', [39, 152, 11, 9]],
            ['score-4', [54, 152, 11, 9]],
            ['score-5', [69, 163, 11, 9]],
            ['score-6', [11, 163, 11, 9]],
            ['score-7', [25, 163, 11, 9]],
            ['score-8', [39, 163, 11, 9]],
            ['score-9', [55, 163, 11, 9]],
            ['score-0', [69, 163, 11, 9]],
        

        ]);        

        this.names = gameState.characters.map(({id}) => `tag-${id.toLowerCase()}`);


    }

    


    drawFrame(ctx, frameKey, x, y, direction = 1){
     drawFrame(ctx, this.image, this.frames.get(frameKey), x, y, direction);
    }



    updateTime(time){
        if(time.previous > this.timeTimer + TIME_DELAY){
            this.time -= 1;
            this.timeTimer = time.previous;
        }

        if(this.time < 15 && this.time > -1 && time.previous > this.timeRedTimer + TIME_RED_DELAY){
            this.useRedFrames = !this.useRedFrames;
            this.timeRedTimer = time.previous;
        }
    }


    updateHealthBars(time){
        for (const index in this.healthBars){
            if (this.healthBars[index].hitPoints <= gameState.characters[index].hitPoints) continue;
            this.healthBars[index].hitPoints = Math.max(0, this.healthBars[index].hitPoints - (time.secondsPassed * 60))
        }
    }

    update(time) {
        this.updateTime(time);
        this.updateHealthBars(time);
    }

    healthBarDisplay(ctx){
         this.drawFrame(ctx, 'health-bar-1', 250, 20);
        this.drawFrame(ctx, 'health-bar-2', 50, 20);

        ctx.fillStyle = HEALTH_DAMAGE_COLOR;
        ctx.beginPath();
        ctx.fillRect(
            32, 21,
            HEALTH_MAX_HIT_POINTS - Math.floor(this.healthBars[0].hitPoints), 9,
        );

        ctx.fillRect(
            208 + Math.floor(this.healthBars[1].hitPoints), 21,
            HEALTH_MAX_HIT_POINTS - Math.floor(this.healthBars[1].hitPoints), 9
        )
    }

    
    nameDisplay(ctx){
        this.drawFrame(ctx, 'spork-name', 250, 35);
        this.drawFrame(ctx, 'vexel-name', 50, 35);
    }

    timeDisplay(ctx){
          const timeString = String(Math.max(this.time, 0)).padStart(2, '00');
          const redFrame = TIME_FRAME_KEYS[Number(this.useRedFrames)];

        this.drawFrame(ctx, `${redFrame}-${timeString.charAt(0)}`, 185, 30);  
        this.drawFrame(ctx, `${redFrame}-${timeString.charAt(1)}`, 200, 30);  

    }

 drawScore(ctx, score, x){
        const strValue = String(score);
        const buffer = ((6 * 9) - strValue.length * 9);

        for(let i = 0; i < strValue.length; i++ ){
            this.drawFrame(ctx, `score-${strValue[i]}`, x + buffer + i * 9, 1);
        }
    }

    drawScoreName(ctx, name, x, y){

    }


    drawScores(ctx){
        
        this.drawFrame(ctx, 'player-1-score', 10, 2);       
        this.drawFrame(ctx, 'player-2-score', 250, 2);
        

        this.drawScore(ctx, 1, 45);
        this.drawScore(ctx, 60000, 177);
        this.drawScore(ctx, 1, 309);
    }

    draw(ctx) {
         this.drawScores(ctx);
        this.healthBarDisplay(ctx);
        this.nameDisplay(ctx);
        this.timeDisplay(ctx);
      
    }
}