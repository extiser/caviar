$(document).ready(function () {
    $('.top-menu__item').click(function () {
        var blockId = $(this).attr('href');
        var headerHeight = $('.header').height();
        var destination = $(blockId).offset().top;
        $('body').animate({ scrollTop: destination - headerHeight - 40 }, 1100);
        $('.top-menu__list').removeClass('active');
        return false;
    });
    $('.top-menu__mobile').click(function () {
        $('.top-menu__list').toggleClass('active');
    });
});