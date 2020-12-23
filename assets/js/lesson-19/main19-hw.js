function createCarousel(slidesCount = 5) {
    const container = document.querySelector('#carousel');

    let currentSlide = 0;
    let timerID = null;
    let isPlaying = true;
    let interval = 2000;

    const ACTIVE = 'active';
    const PAUSE_ICON = '<i class="fas fa-pause-circle"></i>';
    const PLAY_ICON = '<i class="fas fa-play"></i>';
    const BTN_PREV = '<i class="fas fa-chevron-left"></i>';
    const BTN_NEXT = '<i class="fas fa-chevron-right"></i>';

    const style = document.createElement('style');
    container.appendChild(style);
    style.innerHTML = `
        .slides { position: relative }
        .controls { position: relative }
        .indicators { display: flex }
    `;

    const indicatorsContainer = document.createElement('div');
    const btnPause = document.createElement('div');
    const btnPrev = document.createElement('div');
    const btnNext = document.createElement('div');



    const slides = [];
    const indicators = [];


    function initSlides() {
        const slidesContainer = document.createElement('ul');
        slidesContainer.setAttribute('class', 'slides');

        for (let i = 0; i < slidesCount; i++) {

            let arr = [1,2,3,4,5,6,7,8,9,10];
            let out;

            const slide = document.createElement('li');
            slide.innerHTML = '<a href="#"></a>';
            slide.setAttribute('class', 'slides__item');
            slide.style.backgroundImage = 'url(assets/images/lesson-19/'+arr[i]+'.jpg)';

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

        btnPrev.setAttribute('class', 'controls__item controls__prev');
        btnNext.setAttribute('class', 'controls__item controls__next');
        btnPause.setAttribute('class', 'controls__item controls__pause');

        btnPrev.innerHTML = `${BTN_PREV}`;
        btnNext.innerHTML = `${BTN_NEXT}`;
        btnPause.innerHTML = `${PLAY_ICON}`;

        controls.appendChild(btnPrev);
        controls.appendChild(btnNext);
        controls.appendChild(btnPause);

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
            indicators[currentSlide].style.backgroundColor = '';
            goToNth(+target.dataset.slideTo);
            indicators[currentSlide].style.backgroundColor = 'red';
        }

    }

    btnPause.addEventListener('click', pausePlay);
    btnPrev.addEventListener('click', prev);
    btnNext.addEventListener('click', next);
    indicatorsContainer.addEventListener('click', indicate);

}

createCarousel(8);