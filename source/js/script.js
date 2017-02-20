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

    $('.share-button').one('click', function () {
        $('.share-qrcode').qrcode({text: window.location.href});
    });

    $('header').headroom();

    $('article').each(function () {
        $(this).find('img').each(function () {
            if ($(this).parent().hasClass('fancybox') || $($(this).parent())[0].tagName == 'A') return;
            $(this).wrap('<a href="' + this.src + '" title="' + this.alt + '" class="fancybox"></a>');
        });
    });
    if ($.fancybox) {
        $('.fancybox').fancybox();
    }
    
    $('pre').addClass('prettyprint linenums');
    PR.prettyPrint();

    if (!$('#myCanvas').tagcanvas({
            textColour: '#4d4d4d',
            textFont: null,
            bgOutline: null,
            frontSelect: true,
            shadow: 'rgba(0, 0, 0, 0.2)',
            shadowBlur: 1,
            shadowOffset: [0, 1],
            shuffleTags: true,
            outlineMethod: 'colour',
            outlineColour: '#6ac2c0',
            outlineRadius: 3,
            weight: true,
            weightSizeMax: 16,
            weightSizeMin: 12,
            weightSize: 1.5
        })) {
        // TagCanvas failed to load
        $('#tagcloud').hide();
    }
});