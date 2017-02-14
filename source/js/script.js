$(function () {
    $("header").headroom();
});

$("#nav-switch").on('click', function () {
    $(this).toggleClass('header-switch-rotate');
    return false;
});

$("#search-switch").on('click', function () {
    $(this).toggleClass('header-switch-rotate');
    return false;
});