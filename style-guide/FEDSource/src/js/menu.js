$(document).ready(function () {
    changeEvents();
    if (isTouch) {
        touchDropDowns();
    }
});

$(window).on('scroll', function () {
    fixMenuOnScroll();
})

$(window).on('resize', function () {
    changeEvents();
});

$(window).on('orientationchange', function () {
    changeEvents();
});

// events to be recreated when window changes
function changeEvents() {
    mobileMenu();
    closeMenu();
    fixMenuOnScroll();
}

// initialise mobile menu functions
function mobileMenu() {
    mainMenuButton();
    subMenuToggle();
}

// main menu button toggle
function mainMenuButton() {
    $(".main-menu-button").off('click').on('click', function () { toggleAction(); });
    var isToggling = false;
    function toggleAction() {
        if (!$(".main-menu-button").is(":visible")) { return };
        if (isToggling) { return }
        isToggling = true;
        $('.main-menu-button').toggleClass('active');
        $(".main-menu-items").toggleClass('active').promise().done(function () { isToggling = false });
    }
}

// toggle sub menus
function subMenuToggle() {
    var mainMenuSubAnchor = $('.main-menu-sub').prev('a');
    if (mainMenuSubAnchor.find('.sub-menu-toggle').length == 0) {
        mainMenuSubAnchor.append('<span class="sub-menu-toggle" />');
    }
    if ($('a').attr("onClick") != undefined) { }
    $('.sub-menu-toggle').on('click', function () {
        $(this).parents('li').toggleClass('active');
        return false;
    });
}

// make nav areas touch compatible
function touchDropDowns() {
    var dropdownClass = 'dropdown';
    var activeClass = 'visible';
    $('.' + dropdownClass + ' > a').click(function () {
        var thisParent = $(this).parent('.' + dropdownClass);
        if (!thisParent.hasClass(activeClass)) {
            thisParent.removeClass(activeClass);
            thisParent.addClass(activeClass);
        }
        else {
            thisParent.removeClass(activeClass);
        }
        return false;
    });
    $('.main-menu-sub').append('<span class="fa fa-times main-menu-sub-close"></span>');
    $('.main-menu-sub-close').on('click', function () {
        $(this).parents('.main-menu-sub').hide();
    });
    $('.main-menu .has-sub-menu').click(function () {
        $(this).next('.main-menu-sub').show();
        return false;
    });
}

function closeMenu() {
    if ($(".main-menu-button").is(":visible") && $(".main-menu-items").is(":visible")) {
        $('.main-menu-button').removeClass('active');
        $(".main-menu-items").removeClass('active').promise().done(function () { isToggling = false });
        $('.sub-menu-toggle').parents('li').removeClass('active');
    };
}

// Fix Menu to top of window
var menuFixClassElement = 'body';
var menuFixClass = 'main-menu-fixed';
var menuHolder = '.row-menu-holder';
var menuContainer = '.outer-wrapper-menu';
var menuFixMinWidth = 768; // If no min width required delete variable.
var menuTopSet = false;
function fixMenuOnScroll() {
    var fixMenuInterval = 0;
    var menuHeight = $(menuContainer).outerHeight();
    var menuTop = $(menuContainer).attr('data-menutop');
    setMenuOriginalPosition();
    if (typeof menuFixMinWidth !== 'undefined') {
        if ($(window).width() >= menuFixMinWidth) {
            fixMenu();
        }
        else {
            unfixMenu();
        }
    }
    else {
        fixMenu();
    }
    function fixMenu() {
        fixMenuInterval = setInterval(function () {
            var windowScrollTop = $(window).scrollTop();
            menuHolder = $(menuHolder).height(menuHeight);
            if (windowScrollTop > menuTop) {
                $(menuFixClassElement).addClass(menuFixClass);
            }
            else {
                unfixMenu();
            }
        }, 10);
    }
    function unfixMenu() {
        clearInterval(fixMenuInterval);
        $(menuFixClassElement).removeClass(menuFixClass);
        menuHolder = $(menuHolder).height('auto');
    }
    function setMenuOriginalPosition() {
        if (typeof menuTop !== undefined && menuTop !== false && menuTopSet == false) {
            $(menuContainer).attr('data-menutop', $(menuContainer).position().top);
            menuTopSet = true;
        }
    }
}