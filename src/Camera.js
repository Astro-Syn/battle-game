export class Camera {
    constructor(x, y, characters){
        this.position = {x, y };
        this.characters = characters;

        this.speed = 60;
    }

    update(time, ctx) {
        this.position.x += this.speed * time.secondsPassed;
        if (this.position.x >  640 || this.position.x < 256) this.speed = -this.speed;
    }
}