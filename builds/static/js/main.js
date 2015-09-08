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
