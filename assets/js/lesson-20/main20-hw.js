let slides = document.querySelectorAll('.slides__item');
let indicatorsContainer = document.querySelector('.indicators');
let indicators = indicatorsContainer.querySelectorAll('indicators__item');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    slides[currentSlide].classList.toggle('active');
    indicators[currentSlide].classList.toggle('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.toggle('active');
    indicators[currentSlide].classList.toggle('active');
}

let playing = true;
let pauseButton = document.querySelector('#pause');

function pauseSlideShow() {
    pauseButton.innerHTML = 'Play';
    playing = false;
    clearInterval(slideInterval);
}

function playSlideShow() {
    pauseButton.innerHTML = 'Pause';
    playing = true;
    slideInterval = setInterval(nextSlide, 2000);
}

let pausePlayBtn = () => playing ? pauseSlideShow() : playSlideShow();

pauseButton.onclick = function() {
    if (playing) {
        pauseSlideShow();
    } else {
        playSlideShow();
    }
};

let next = document.querySelector('#next');
let previous = document.querySelector('#previous');

next.onclick = function () {
    pauseSlideShow();
    nextSlide();
};

previous.onclick = function () {
    pauseSlideShow();
    previousSlide();
};

let indicate = (e) => {
    let target = e.target;

    if (target.classList.contains('indicators')) {
        pauseSlideShow();
        goToSlide(+target.dataset.slideTo);
    }
};

indicatorsContainer.addEventListener('click', indicate);

let controls = document.querySelectorAll('.controls');

for (let i = 0; i < controls.length; i++){
    controls[i].style.display = 'inline-block';
}

let spaceBtn = 32;
let leftArrowBtn = 37;
let rightArrowBtn = 39;

let pressKey = (e) => {
    if (e.keyCode === leftArrowBtn) previousSlide();
    if (e.keyCode === rightArrowBtn) nextSlide();
    if (e.keyCode === spaceBtn) pausePlayBtn();
};

document.addEventListener('keydown', pressKey);