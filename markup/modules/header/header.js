$(window).scroll(function () {
    var top = $(document).scrollTop();
    if (top > 100) {
        $('.header').addClass('fixed');
        $('.to-top').addClass('active');
        $('.top-menu__list').removeClass('active');
    } else {
        $('.header').removeClass('fixed');
        $('.to-top').removeClass('active');
    }
});

$(document).ready(function () {
    $('.to-top').click(function () {
        $('body').animate({ scrollTop: 0 }, 1100);
    });
});