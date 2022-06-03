var soundCreeper = new Audio('sounds/creeper-sound.wav');
var creeper = window.document.querySelector('main');
var body = window.document.querySelector('body');
var egg;

function explode() {
    creeper.style.animation = `explode 5s`;
    soundCreeper.play();
    creeper.style.cursor = `default`;
    setTimeout(() => {
        body.innerHTML = `<img class="egg" onclick="chocar()" src="images/egg.png">`;
        egg = window.document.querySelector('img.egg');
    }, 4500);
}

var contador = 0;
function chocar() {
    if (contador == 0) {
        egg.style.animation = "egg-1 2s";
        contador++;
    } else {
        egg.style.animation = "egg-2 2s";
        contador = 0;
        setTimeout(() => {
            body.innerHTML = `<main onclick="explode()">
                            <div class="eyes">
                                <div class="eye" id="eye-left"></div>
                                <div class="eye" id="eye-right"></div>
                            </div>
                            <div class="container-mouth">
                                <div class="mouth" id="mouth-left"></div>
                                <div class="mouth-center" id="mouth-center"></div>
                                <div class="mouth" id="mouth-right"></div>
                            </div>
                        </main>`;
            creeper = window.document.querySelector('main');
        },2000)
    }
}