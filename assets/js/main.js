const container = document.querySelector('#carousel');
let slides = container.querySelectorAll('.slides__item');
let currentSlide = 0;
let isPlaying = true;

let controls = document.querySelectorAll('.controls');

for (let i = 0; i < controls.length; i++){
    controls[i].style.display = 'flex';
}

let goToNth = (n) => {

    slides[currentSlide].classList.toggle('active');
    indicators[currentSlide].classList.toggle('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.toggle('active');
    indicators[currentSlide].classList.toggle('active');
};

let goToNext = () => goToNth(currentSlide + 1);
let goToPrev = () => goToNth(currentSlide - 1);
let pausePlay = () => isPlaying ? pause() : play();



let pauseBtn = container.querySelector('#pause');
let prevBtn = container.querySelector('#previous');
let nextBtn = container.querySelector('#next');

function pause() {
    pauseBtn.innerHTML = 'Play';
    clearInterval(slideInterval);
    isPlaying = false;
}

function play() {
    pauseBtn.innerHTML = 'Pause';
    slideInterval = setInterval(goToNext, 2000);
    isPlaying = true;
}

function prev() {
    pause();
    goToPrev();
}
function next() {
    pause();
    goToNext();
}

pauseBtn.addEventListener('click', pausePlay);
prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);

let indicatorsContainer = container.querySelector('#indicators-container');
let indicators = indicatorsContainer.querySelectorAll('.indicators__item');

function indicate (e) {
    let target = e.target;
    let item = target.closest('.indicators__item');

    if (item) {
        pause();
        goToNth(+item.dataset.slideTo);
    }
}

indicatorsContainer.addEventListener('click', indicate);


let SPACE = 32;
let LEFT_ARROW = 37;
let RIGHT_ARROW = 39;

function pressKey(e) {
    if (e.keyCode === LEFT_ARROW) prev();
    if (e.keyCode === RIGHT_ARROW) next();
    if (e.keyCode === SPACE) pausePlay();
}
document.addEventListener('keydown', pressKey);


let swipeStartX = null;
let swipeEndX = null;

function swipeStart(e) {
    if (e.changedTouches.length === 1) swipeStartX = e.changedTouches[0].pageX;
}

function swipeEnd(e) {
    if (e.changedTouches.length === 1) {
        swipeEndX = e.changedTouches[0].pageX;
        if ((swipeStartX - swipeEndX) < 0) prev();
        if ((swipeStartX - swipeEndX) > 0) next();
    }
}

container.addEventListener('touchstart', swipeStart);
container.addEventListener('touchend', swipeEnd);

let slideInterval = setInterval(goToNext, 2000);
