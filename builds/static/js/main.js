$(document).ready(function () {
    $('a[data-click="modal"]').click(function () {
        var modalName = $(this).data('item');
        $(modalName).addClass('active');
        $('.mask').addClass('active');
    });
    $('.mask, .modal__close').click(function () {
        $('.modal, .mask').removeClass('active');
    });
});
$(window).scroll(function () {
    var top = $(document).scrollTop();
    if (top > 1) {
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
jQuery(document).ready(function ($) {
    $('.slider').slick({
        accessibility: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: true,
        prevArrow: '<span class="slick-prev slick-nav slick-nav--prev" aria-label="previous"></span>',
        nextArrow: '<span class="slick-next slick-nav slick-nav--next" aria-label="next"></span>'
    });
});

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