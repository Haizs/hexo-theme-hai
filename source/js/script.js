function isClickArea(target, area) {
    return (area.is(target) || area.has(target).length);
}

$(function () {
    $('html').on('click touchstart', function (e) {
        var switchArea = $('.nav-switch-on');
        if (!isClickArea(e.target, switchArea.parent()) && !isClickArea(e.target, $('.nav-popup-show'))) switchArea.trigger('click');
        switchArea = $('.search-switch-on');
        if (!isClickArea(e.target, switchArea.parent())) switchArea.trigger('click');
        switchArea = $('.share-button-on');
        if (!isClickArea(e.target, switchArea) && !isClickArea(e.target, $('.sharebox-show'))) switchArea.trigger('click');
    });

    $('body').on('touchstart', function () {
        $(this).removeClass('no-touch');
    });

    $('#nav-switch').on('click', function () {
        $('.search-switch-on').trigger('click');
        $('.share-button-on').trigger('click');
        $('header').toggleClass('header-fixed');
        $(this).children().toggleClass('nav-switch-on');
        $(this).parent().next().toggleClass('nav-popup-show');
        return false;
    });

    $('#search-switch').on('click', function () {
        $('.nav-switch-on').trigger('click');
        $('.share-button-on').trigger('click');
        $('header').toggleClass('header-fixed');
        $(this).children().toggleClass('search-switch-on');
        return false;
    });

    $('.share-button').on('click', function () {
        $('.nav-switch-on').trigger('click');
        $('.search-switch-on').trigger('click');
        $(this).toggleClass('share-button-on');
        $(this).siblings('.sharebox').toggleClass('sharebox-show');
    });

    pangu.spacingPage();
    $('header').headroom();
    $('.share-qrcode').qrcode({text: window.location.href});
    $('article').each(function () {
        $(this).find('img').each(function () {
            if ($(this).parent().hasClass('fancybox')) return;
            var alt = this.alt;
            $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
        });
    });
    if ($.fancybox) {
        $('.fancybox').fancybox();
    }
});