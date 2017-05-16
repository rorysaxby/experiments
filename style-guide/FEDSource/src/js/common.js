/* Config */
var phoneBreakpoint = 500;
var tabletBreakpoint = 768;

$(document).ready(function () {
    deviceCheck();
    components();
    colorboxModal();
    imageEffects();
    svg4everybody(); //IE external SVG support
});

$(window).on('resize', function () {
    changeEvents();
});

$(window).on('orientationchange', function () {
    changeEvents();
});

function changeEvents() {
    deviceCheck();
}

function components() {
    responsiveVideoEmbed();
    responsiveTables();
    responsiveTabs();
    accordion();
}

function deviceCheck() {
    if ($(window).width() < tabletBreakpoint && $(window).width() >= phoneBreakpoint) {
        isMobile = true;
        isTablet = true;
        isPhone = false;
    }
    else if ($(window).width() < phoneBreakpoint) {
        isMobile = true;
        isPhone = true;
        isTablet = false;
    }
    else {
        isMobile = false;
        isTablet = false;
        isPhone = false;
    }
    if ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) {
        isTouch = true;
    }
    else {
        isTouch = false;
    }
}

function responsiveVideoEmbed() {
    // make each embedded YouTube or Vimeo iframes responsive automatically
    $('iframe').each(function () {
        var thisSrc = $(this).attr('src');
        if (thisSrc.indexOf('youtu') || thisSrc.indexOf('youtube') || thisSrc.indexOf('vimeo')) {
            $(this).wrap('<div class="video-wrapper"></div>');
        }
    });
}

function responsiveTables() {
    //initialise responsive tables
    $('table').footable({
        breakpoints: {
            phone: phoneBreakpoint,
            tablet: tabletBreakpoint
        }
    });
}

function responsiveTabs() {
    // Responsive tabs to mobile accordions init
    //RESPONSIVEUI.responsiveTabs();
}

function accordion() {
    // initialise each accordion
    $('.accordion').each(function () {
        $(this).addClass('enabled');
        var hasActiveSection = $(this).find('.accordion-title.active').length > 0;
        if (hasActiveSection) {
            $(this).find('.accordion-title.active').next('.accordion-content').addClass('active').removeClass('inactive').siblings('.accordion-content').removeClass('active').addClass('inactive');
        }
        else {
            $(this).find('.accordion-content').addClass('inactive');
        }
    });
    // accordion heading click event
    $('.accordion-title').click(function () {
        var independentAccordion = $(this).parents('.accordion').attr('data-independent') == 'true';
        var isActive = $(this).hasClass('active');
        if (independentAccordion) {
            if (isActive) {
                $(this).next('.accordion-content').removeClass('active').addClass('inactive');
                $(this).removeClass('active');
            }
            else {
                $(this).next('.accordion-content').addClass('active').removeClass('inactive');
                $(this).addClass('active');
            }
        }
        else {
            if (isActive) {
                $(this).next('.accordion-content').removeClass('active').removeClass('active').addClass('inactive');
                $(this).removeClass('active');
            }
            else {
                $(this).next('.accordion-content').addClass('active').removeClass('inactive');
                $(this).addClass('active');
            }
            $(this).next('.accordion-content').siblings('.accordion-content').removeClass('active').addClass('inactive');
            $(this).siblings('.accordion-title').removeClass('active');
        }
        return false;
    });
}
function colorboxModal() {
    $(".cbox").colorbox({ iframe: true, scrolling: true, width: "80%", height: "80%" });
}

function imageEffects() {
    $("img[data-src-popout]").click(function () {
        $.colorbox({ iframe: true, href: "/images/colorbox/overlay.png", width: "80%", height: "80%" });
    });
    $("img[data-src-hover]").hover(
        function () {
            var src = $(this).attr('data-src-hover');
            $(this).attr('data-src-hover', $(this).attr('src'));
            $(this).attr('src', src);
        }
    );
}