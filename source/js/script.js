function removeHoverState() {
    $("body").removeClass("no-touch");
}

$("#nav-switch").on('click', function () {
    $(this).toggleClass('header-switch-rotate');
    return false;
});

$("#search-switch").on('click', function () {
    $(this).toggleClass('header-switch-rotate');
    return false;
});

$(function () {
    $("header").headroom();
});