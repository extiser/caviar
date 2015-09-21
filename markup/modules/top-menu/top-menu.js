$(document).ready(function () {
    $('.top-menu__item').click(function () {
        var marginTop = 0;
        var blockId = $(this).attr('href');
        var destination = $(blockId).offset().top;
        var headerHeight = $('.header').height();
        if (headerHeight == 125) { marginTop = 100; }
        if (headerHeight == 60) { marginTop = 40; }
        $('body').animate({ scrollTop: destination - headerHeight - marginTop }, 1000);
        $('.top-menu__list').removeClass('active');
        return false;
    });
    $('.top-menu__mobile').click(function () {
        $('.top-menu__list').toggleClass('active');
    });
});