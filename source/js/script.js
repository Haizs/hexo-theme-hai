function switchOff(touchT, switchT) {
    if (!switchT.is(touchT) && !switchT.parent().is(touchT)) {
        switchT.trigger('click');
    }
}

$(function () {
    $('html').on('click touchstart', function (e) {
        switchOff(e.target, $('.nav-switch-on'));
        switchOff(e.target, $('.search-switch-on'));
    });

    $('body').on('touchstart', function () {
        $(this).removeClass('no-touch');
    });

    $('#nav-switch').on('click', function () {
        $('.search-switch-on').trigger('click');
        $('header').toggleClass('header-fixed');
        $(this).children().toggleClass('nav-switch-on');
        $(this).parent().next().toggleClass('popup-show');
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