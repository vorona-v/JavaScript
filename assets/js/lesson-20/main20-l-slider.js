console.log('Lesson 20');
console.log();

/*
function handler1() {
    console.log('tick');
}
function handler2() {
    console.log('tick');
}
*/


//Slider
(function () {
    const container = document.querySelector('#carousel');
    const slides = container.querySelectorAll('.slide');
    const indicatorsContainer = container.querySelector('#indicators-container');
    const indicators = indicatorsContainer.querySelectorAll('.indicator');
    const controlsContainer = container.querySelector('#controls-container');
    const pauseBtn = controlsContainer.querySelector('#pause-btn');
    const prevBtn = controlsContainer.querySelector('#prev-btn');
    const nextBtn = controlsContainer.querySelector('#next-btn');


    let currentSlide = 0;
    let slidesCount = slides.length;
    let timerID = null;
    let isPlaying = true;
    let interval = 2000;
    let swipeStartX = null;
    let swipeEndX = null;

    const ACTIVE = 'active';
    const PAUSE = '<i class="far fa-pause-circle"></i>';
    const PLAY = '<i class="far fa-play-circle"></i>';
    const SPACE = ' ';
    const LEFT_ARROW = ' ';
    const RIGHT_ARROW = ' ';

    function goToNth (n) {
        slides[currentSlide].classList.toggle(ACTIVE);
        indicators[currentSlide].classList.toggle(ACTIVE);
        /* if (currentSlide < 4) currentSlide++;
         else currentSlide = 0;*/
        currentSlide = (n + slidesCount) % slidesCount;
        slides[currentSlide].classList.toggle(ACTIVE);
        indicators[currentSlide].classList.toggle(ACTIVE);
    }

    const goToPrev = () => goToNth(currentSlide - 1);
    const goToNext = () => goToNth(currentSlide + 1);
    const pausePlay = () => isPlaying ? pause() : play();

    function pause() {
        pauseBtn.innerHTML = PLAY;
        clearInterval(timerID);
        isPlaying = false;
    }

    function play() {
        pauseBtn.innerHTML = PAUSE;
        timerID = setInterval(goToNext, interval);
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

    function indicate (e) {
        let target = e.target;

        if (target.classList.contains('indicator')) {
            pause();
            goToNth(+target.dataset.slideTo);
        }
    }

    function pressKey(e) {
        if (e.key === LEFT_ARROW) prev();
        if (e.key === RIGHT_ARROW) next();
        if (e.key === SPACE) pausePlay();
    }

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

    pauseBtn.addEventListener('click', pausePlay);
    prevBtn.addEventListener('click', prev);
    nextBtn.addEventListener('click', next);
    indicatorsContainer.addEventListener('click', indicate);
    container.addEventListener('touchstart', swipeStart);
    container.addEventListener('touchend', swipeEnd);
    document.addEventListener('keydown', pressKey);

    timerID = setInterval(goToNext, interval);
}());

