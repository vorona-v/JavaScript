function createCarousel(slidesCount = 5) {
    const container = document.querySelector('#carousel');

    let currentSlide = 0;
    let timerID = null;
    let isPlaying = true;
    let interval = 2000;
    let swipeStartX = null;
    let swipeEndX = null;

    const ACTIVE = 'active';
    const PAUSE_ICON = '<i class="fas fa-pause-circle"></i>';
    const PLAY_ICON = '<i class="fas play"></i>';
    const BTN_PREV = '<i class="fas fa-chevron-left"></i>';
    const BTN_NEXT = '<i class="fas fa-chevron-right"></i>';
    const SPACE = ' ';
    const LEFT_ARROW = ' ';
    const RIGHT_ARROW = ' ';

    const style = document.createElement('style');
    container.appendChild(style);
    style.innerHTML = `
        .slides { 
            position: relative;
            height: 150px;
            margin-bottom: 20px;
        };
        .indicators {
            position: relative;
        };
        .controls {
            display: flex;
        }
    `;


    const btnPause = document.createElement('div');
    const btnPrev = document.createElement('div');
    const btnNext = document.createElement('div');

    const indicatorsContainer = document.createElement('div');

    const slides = [];
    const indicators = [];


    function initSlides() {
        const slidesContainer = document.createElement('ul');
        slidesContainer.setAttribute('class', 'slides');

        for (let i = 0; i < slidesCount; i++) {
            const slide = document.createElement('li');
            slide.innerHTML = '<a href="#"></a>';
            slide.setAttribute('class', 'slides__item');

            if ( i === 0 ) slide.classList.add(ACTIVE);
            slidesContainer.appendChild(slide);

            slides[slides.length] = slide;
        }

        container.appendChild(slidesContainer);
    }

    function initIndicators() {
        indicatorsContainer.setAttribute('class', 'indicators');

        for (let i = 0; i < slidesCount; i++) {
            const indicator = document.createElement('span');

            indicator.setAttribute('class', 'indicators__item');
            if ( i === 0 ) indicator.classList.add(ACTIVE);

            indicator.dataset.slideTo = `${i}`;
            indicatorsContainer.appendChild(indicator);

            indicators[indicators.length] = indicator;
        }
        container.appendChild(indicatorsContainer);
    }

    function initControls() {
        const controls = document.createElement('div');
        controls.setAttribute('class', 'controls');

        btnPause.setAttribute('class', 'controls__item controls__pause');
        btnPrev.setAttribute('class', 'controls__item controls__prev');
        btnNext.setAttribute('class', 'controls__item controls__next');

        btnPause.innerHTML = `${PLAY_ICON}`;
        btnPrev.innerHTML = `${BTN_PREV}`;
        btnNext.innerHTML = `${BTN_NEXT}`;

        controls.appendChild(btnPrev);
        controls.appendChild(btnPause);
        controls.appendChild(btnNext);

        container.appendChild(controls);
    }

    initSlides();
    initIndicators();
    initControls();

    function goToNth (n) {
        slides[currentSlide].classList.toggle(ACTIVE);
        indicators[currentSlide].classList.toggle(ACTIVE);
        currentSlide = (n + slidesCount) % slidesCount;
        slides[currentSlide].classList.toggle(ACTIVE);
        indicators[currentSlide].classList.toggle(ACTIVE);
    }

    const goToPrev = () => goToNth(currentSlide - 1);
    const goToNext = () => goToNth(currentSlide + 1);
    const pausePlay = () => isPlaying ? pause() : play();

    function pause() {
        btnPause.innerHTML = PLAY_ICON;
        clearInterval(timerID);
        isPlaying = false;
    }

    function play() {
        btnPause.innerHTML = PAUSE_ICON;
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

        if (target.classList.contains('indicators__item')) {
            pause();
            goToNth(+target.dataset.slideTo);
        }
    }

    btnPause.addEventListener('click', pausePlay);
    btnPrev.addEventListener('click', prev);
    btnNext.addEventListener('click', next);
    indicatorsContainer.addEventListener('click', indicate);

}

createCarousel(8);