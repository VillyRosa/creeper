const explodeSound = new Audio('./sound/creeper-sound.wav');
const creeper = document.querySelector('#creeper');
const egg = document.querySelector('#egg');
let eggIsClickable = true;
let eggClicks = 0;

creeper.addEventListener('click', () => {
    toggleClass(creeper, 'explode');
    explodeSound.play();
    setTimeout(() => {
        toggleClass(creeper, 'hidden');
        toggleClass(creeper, 'explode');
        toggleClass(egg, 'hidden');
    }, 4000);
});

egg.addEventListener('click', handleClick);
function handleClick() {
    if (!eggIsClickable) return;
    eggIsClickable = false;

    if (eggClicks === 0) {
        toggleClass(egg, 'egg1Animate');
    } else {
        toggleClass(egg, 'egg2Animate');
        setTimeout(() => {
            toggleClass(egg, 'hidden');
            toggleClass(creeper, 'hidden');
            egg.classList.remove('egg1Animate');
            egg.classList.remove('egg2Animate');
            eggClicks = 0;
        }, 2000)
    }

    eggClicks++;

    setTimeout(() => {
        eggIsClickable = true;
    }, 2000);
}

function toggleClass(element, className) {
    element.classList.toggle(className);
}