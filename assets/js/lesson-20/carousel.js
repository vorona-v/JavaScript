function Carousel() {
    this.container = document.querySelector('#carousel');
     this.slides = this.container.querySelectorAll('.slide');

    this.interval = 2000;

   this._initProps();
    this._initIndicators();
    this._initControls();
    this._initListeners();

}

Carousel.prototype = {
    _initProps() {
        this.currentSlide = 0;
        this.slidesCount = this.slides.length;
        this.timerID = null;
        this.isPlaying = true;
        this.swipeStartX = null;
        this.swipeEndX = null;

        this.ACTIVE = 'active';
        this.PAUSE = '<i class="far fa-pause-circle"></i>';
        this.PLAY = '<i class="far fa-play-circle"></i>';
        this.ARROW_PREV = '<i class="far fa-angle-left"></i>';
        this.ARROW_NEXT = '<i class="far fa-angle-right"></i>';
        this.SPACE = ' ';
        this.LEFT_ARROW = 'ArrowLeft';
        this.RIGHT_ARROW = 'ArrowRight';
    },

    _initControls() {
        const controls = document.createElement('div');

        const PAUSE = `<span id="pause-btn" class="control control-pause">${this.PAUSE}</span>`;
        const PREV = `<span id="prev-btn" class="control control-prev">${this.ARROW_PREV}</span>`;
        const NEXT = `<span id="pause-btn" class="control control-next">${this.ARROW_NEXT}</span>`;

        controls.setAttribute('class', 'controls');
        controls.setAttribute('id', 'controls-container');

        controls.innerHTML = PAUSE + PREV + NEXT;

        this.container.appendChild(controls);

        this.pauseBtn = this.container.querySelector('#pause-btn');
        this.prevBtn = this.container.querySelector('#prev-btn');
        this.nextBtn = this.container.querySelector('#next-btn');

    },

    _initIndicators() {
        const indicators = document.createElement('ol');

        indicators.setAttribute('class', 'indicators');
        indicators.setAttribute('id', 'indicators-container');

        for (let i = 0; i < this.slidesCount; i++) {
            const indicator = document.createElement('li');

            indicator.setAttribute('class', 'indicator');
            if ( i === 0 ) indicator.classList.add('active');
            indicator.dataset.slideTo = `${i}`;
            indicators.appendChild(indicator);
        }

        this.container.appendChild(indicators);
        this.indicatorsContainer = this.container.querySelector('#indicators-container');
        this.indicators = this.indicatorsContainer.querySelectorAll('.indicator');
    },

    _initListeners() {
        this.pauseBtn.addEventListener('click', this.pausePlay.bind(this));
        this.prevBtn.addEventListener('click', this.prev.bind(this));
        this.nextBtn.addEventListener('click', this.next.bind(this));
        this.indicatorsContainer.addEventListener('click', this._indicate.bind(this));
        this.container.addEventListener('touchstart', this._swipeStart.bind(this));
        this.container.addEventListener('touchend', this._swipeEnd.bind(this));
        document.addEventListener('keydown', this._pressKey.bind(this));
    },

    _indicate: function (e) {
        let target = e.target;

        if (target.classList.contains('indicator')) {
            this.pause();
            this.goToNth(+target.dataset.slideTo);
        }
    },

    _pressKey(e) {
        if (e.key === this.LEFT_ARROW) this.prev();
        if (e.key === this.RIGHT_ARROW) this.next();
        if (e.key === this.SPACE) this.pausePlay();
    },
    _swipeStart(e) {
        if (e.changedTouches.length === 1) this.swipeStartX = e.changedTouches[0].pageX;
    },
    _swipeEnd(e) {
        if (e.changedTouches.length === 1) {
            this.swipeEndX = e.changedTouches[0].pageX;
            if ((this.swipeStartX - this.swipeEndX) < 0) this.prev();
            if ((this.swipeStartX - this.swipeEndX) > 0) this.next();
        }
    },

    goToNth(n) {
        this.slides[this.currentSlide].classList.toggle(this.ACTIVE);
        this.indicators[this.currentSlide].classList.toggle(this.ACTIVE);
        this.currentSlide = (n + this.slidesCount) % this.slidesCount;
        this.slides[this.currentSlide].classList.toggle(this.ACTIVE);
        this.indicators[this.currentSlide].classList.toggle(this.ACTIVE);
    },
    goToPrev() {
        this.goToNth(this.currentSlide - 1);
    },
    goToNext() {
        this.goToNth(this.currentSlide + 1);
    },
    pausePlay() {
        this.isPlaying ? this.pause() : this.play();
    },
    pause() {
        this.pauseBtn.innerHTML = this.PLAY;
        clearInterval(this.timerID);
        this.isPlaying = false;
    },
    play() {
        this.pauseBtn.innerHTML = this.PAUSE;
        this.timerID = setInterval(() => {
            this.goToNext()
        }, this.interval);
        this.isPlaying = true;
    },
    prev() {
        this.pause();
        this.goToPrev();
    },
    next() {
        this.pause();
        this.goToNext();
    },


     init() {
         this.timerID = setInterval(() => {
             this.goToNext()
         }, this.interval);
     }
};