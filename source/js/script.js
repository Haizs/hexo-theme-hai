function isClickArea(target, area) {
    return (area.is(target) || area.has(target).length);
}

$(function () {
    $('html').on('click touchstart', function (e) {
        // switchOff(e.target, $('.nav-switch-on'));
        // switchOff(e.target, $('.search-switch-on'));
        if (!isClickArea(e.target, $('.nav-switch-on').parent()) && !isClickArea(e.target, $('.nav-popup-show'))) $('.nav-switch-on').trigger('click');
        if (!isClickArea(e.target, $('.search-switch-on').parent())) $('.search-switch-on').trigger('click');
    });

    $('body').on('touchstart', function () {
        $(this).removeClass('no-touch');
    });

    $('#nav-switch').on('click', function () {
        $('.search-switch-on').trigger('click');
        $('header').toggleClass('header-fixed');
        $(this).children().toggleClass('nav-switch-on');
        $(this).parent().next().toggleClass('nav-popup-show');
        return false;
    });

    $('#search-switch').on('click', function () {
        $('.nav-switch-on').trigger('click');
        $('header').toggleClass('header-fixed');
        $(this).children().toggleClass('search-switch-on');
        return false;
    });

    $('header').headroom();
});