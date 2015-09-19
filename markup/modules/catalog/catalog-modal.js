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