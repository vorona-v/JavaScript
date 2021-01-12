$(document).on('click', '.item-header-js', function() {
    let $this = $(this);
    let $parent = $this.parent('.content__item');

    $parent.toggleClass('active');
    $this.next().slideToggle(300);
});

$(document).on('click', '#button-up', function(e) {
    $('html, body').animate({scrollTop: '0px'}, 800);
});

$(document).on('click', '#sub-title', function(e) {
    $('html, body').animate({
        scrollTop: $(".content__sub-title").offset().top  // класс объекта к которому приезжаем
    }, 800);
});