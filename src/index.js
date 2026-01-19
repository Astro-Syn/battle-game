import { Spork } from "../fighters/Spork.js";
import { Stage } from "./entities/Stage.js";
import { Vexel } from "../fighters/Vexel.js";
import { FpsCounter } from "./entities/FpsCounter.js";
import { BATTLE_FLOOR } from "./constants/stage.js";
import { characterDirection, CharacterState } from "./constants/character.js";



function populateMoveDropdown(){
    const dropdown = document.getElementById('state-dropdown');

    Object.entries(CharacterState).forEach(([, value]) => {
        const option = document.createElement('option');
        option.setAttribute('value', value);
        option.innerText = value;
        dropdown.appendChild(option);
    })
}

function handleFormSubmit(event, characters){
    event.preventDefault();
    const selectedCheckboxes = Array.from(event.target.querySelectorAll('input:checked')).map(checkbox => checkbox.value);

    const options = event.target.querySelector('select')

    characters.forEach(character => {
        if(selectedCheckboxes.includes(character.name)){
            character.changeState(options.value);
        }
    })
}

window.addEventListener('load', function() {
    populateMoveDropdown();
    const canvasElement = document.querySelector('canvas');
    const ctx = canvasElement.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    const characters = [
         new Spork(90, BATTLE_FLOOR, characterDirection.LEFT),
        new Vexel(180, BATTLE_FLOOR, characterDirection.RIGHT),
    ]
    

    const entities = [
        new Stage(),
       ...characters,
        new FpsCounter(),
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

    
    }
    this.document.addEventListener('submit', (event) => handleFormSubmit(event, characters));
    window.requestAnimationFrame(frame);

   
}
)