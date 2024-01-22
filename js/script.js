const explodeSound = new Audio('./sound/creeper-sound.wav');
const creeper = document.querySelector('#creeper');
const egg = document.querySelector('#egg');

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

egg.addEventListener('click', () => {
    if (eggClicks === 0) {
        toggleClass(egg, 'egg1Animate');
    } else {
        toggleClass(egg, 'egg2Animate');
        setTimeout(() => {
            toggleClass(egg, 'hidden');
            toggleClass(creeper, 'hidden');
            egg.classList.remove('egg1Animate');
            egg.classList.remove('egg2Animate');
        }, 2000)
    }
    
    eggClicks++;
})

function toggleClass(element, className) {
    element.classList.toggle(className);
}