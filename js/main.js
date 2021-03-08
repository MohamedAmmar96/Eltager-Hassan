$(window).on('load', function() {

    $(".loading-overlay .loading-overlay-box").fadeOut(500,
        function() {
            $(this).parent().fadeOut(500);
            $("body").removeClass("overflow")
        });
})


// // Scroll To Top Button 
// var scrollButton = $(".scroll-top");
// $(window).scroll(function() {
//     ($(this).scrollTop() >= 500) ? scrollButton.show(600): scrollButton.hide(600);
// });
// // Click Button to scroll top 
// scrollButton.click(function() {
//     $("html,body").animate({ scrollTop: 0 }, 600);
// });

var wow = new WOW();
wow.init();

$(document).ready(function() {

    var text = $(".cats-btn");
    $(".cats-btn").click(function() {
        $(".overlay-box").fadeIn(200);
        $(".cats-btn-list").slideDown(400);
    });
    $(".overlay-box").click(function() {
        $(".overlay-box").fadeOut(200);
        $(".cats-btn-list").slideUp(400);
    });
    $(".cats-btn-link").click(function() {
        text.text($(this).text());
        $(".overlay-box").fadeOut(200);
        $(".cats-btn-list").slideUp(400);
    });


    if ($(window).width() >= 992) {
        $(".cats-box").click(function() {
            $(".cats-name").addClass("rotate");
            $(".overlay-box2").fadeIn(200);
            $(".cats-list").slideDown(400);
        });
        $(".overlay-box2").click(function() {
            $(".cats-name").removeClass("rotate");
            $(this).fadeOut(200);
            $(".cats-list").slideUp(400);
        });
    }
    if ($(window).width() <= 991) {
        $(".cats-box .nav-link").click(function() {
            $(".cats-name").toggleClass("rotate");
            $(".cats-list").slideToggle(400);
        });
    }
    //Main Slider Carousel
    $('.main-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        rtl: true,
        margin: 20,
        navText: ["<span class='fa fa-chevron-right'></span>", "<span class='fa fa-chevron-left'></span>"],
        responsiveClass: true,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        }
    });

    $('.cats .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 20,
        // stagePadding: 5,
        rtl: true,
        navText: ["<span class='fa fa-chevron-right'></span>", "<span class='fa fa-chevron-left'></span>"],
        responsiveClass: true,
        dots: true,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 2,
            },
            500: {
                items: 3,
            },
            768: {
                items: 4,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 6,
            }
        }
    });

    //This is To make sub-sliders as slider in small screens
    if ($(window).width() <= 991) {
        $(".sub-sliders .items-box").addClass("owl-carousel owl-theme");
        $(".items-box .sub-item").removeClass("owl-carousel");
        $('.sub-sliders .owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            rtl: true,
            responsiveClass: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 4000,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 2

                }
            }
        })
    } else {
        $(".sub-sliders .items-box").removeClass("owl-carousel");
        $(".items-box .sub-item").removeClass("owl-carousel");
    };



    //This is To make features as slider in small screens
    if ($(window).width() <= 991) {
        $(".features .features-box").addClass("owl-carousel owl-theme");
        $(".features-box .feature").removeClass("owl-carousel");
        $('.features .owl-carousel').owlCarousel({
            loop: false,
            margin: 0,
            rtl: true,
            responsiveClass: true,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2

                }
            }
        })
    } else {
        $(".features .features-box").removeClass("owl-carousel");
        $(".features-box .feature").removeClass("owl-carousel");
    };

    // Footer Section Start --------------------------------------------------------------------------------------------------------------------
    // To Toggle Between Footer Slide Menus
    if ($(window).width() <= 991) {
        $('.collapse[data-parent="#parent"]').on('show.bs.collapse', function() {
            $('.collapse[data-parent="#parent"]').not(this).collapse('hide');
        });
    } else {
        $(".slide-list").addClass("in")
        $('.footer-link').on('click', function(e) {
            e.stopPropagation();
        });
    }
    //This is To Change between footer collapse link ----------------------------------------------------------------
    // First Collapse ---------------------------
    $(".first .footer-heading .footer-link").click(function() {
        var x = $(".first .slide-list")
        if (x.hasClass("collapse")) {
            $(".first .footer-heading .footer-link").addClass("rotate")
            $(".first .footer-heading .footer-link").removeClass("rotate-reverse")
            $(".second .footer-heading .footer-link").removeClass("rotate")
            $(".second .footer-heading .footer-link").addClass("rotate-reverse")
            $(".third .footer-heading .footer-link").removeClass("rotate")
            $(".third .footer-heading .footer-link").addClass("rotate-reverse")
            $(".last .footer-heading .footer-link").removeClass("rotate")
            $(".last .footer-heading .footer-link").addClass("rotate-reverse")
        }
    });
    $(".first .footer-heading .footer-link").click(function() {
        var x = $(".first .slide-list")
        if (x.hasClass("in")) {
            $(".first .footer-heading .footer-link").removeClass("rotate")
            $(".first .footer-heading .footer-link").addClass("rotate-reverse")
        }
    });

    // Second Collapse ---------------------------
    $(".second .footer-heading .footer-link").click(function() {
        var x = $(".second .slide-list")
        if (x.hasClass("collapse")) {
            $(".second .footer-heading .footer-link").addClass("rotate")
            $(".second .footer-heading .footer-link").removeClass("rotate-reverse")
            $(".first .footer-heading .footer-link").removeClass("rotate")
            $(".first .footer-heading .footer-link").addClass("rotate-reverse")
            $(".third .footer-heading .footer-link").removeClass("rotate")
            $(".third .footer-heading .footer-link").addClass("rotate-reverse")
            $(".last .footer-heading .footer-link").removeClass("rotate")
            $(".last .footer-heading .footer-link").addClass("rotate-reverse")
        }
    });
    $(".second .footer-heading .footer-link").click(function() {
        var x = $(".second .slide-list")
        if (x.hasClass("in")) {
            $(".second .footer-heading .footer-link").removeClass("rotate")
            $(".second .footer-heading .footer-link").addClass("rotate-reverse")
        }
    });

    // Third Collapse ---------------------------
    $(".third .footer-heading .footer-link").click(function() {
        var x = $(".third .slide-list")
        if (x.hasClass("collapse")) {
            $(".third .footer-heading .footer-link").addClass("rotate")
            $(".third .footer-heading .footer-link").removeClass("rotate-reverse")
            $(".first .footer-heading .footer-link").removeClass("rotate")
            $(".first .footer-heading .footer-link").addClass("rotate-reverse")
            $(".second .footer-heading .footer-link").removeClass("rotate")
            $(".second .footer-heading .footer-link").addClass("rotate-reverse")
            $(".last .footer-heading .footer-link").removeClass("rotate")
            $(".last .footer-heading .footer-link").addClass("rotate-reverse")
        }
    });
    $(".third .footer-heading .footer-link").click(function() {
        var x = $(".third .slide-list")
        if (x.hasClass("in")) {
            $(".third .footer-heading .footer-link").removeClass("rotate")
            $(".third .footer-heading .footer-link").addClass("rotate-reverse")
        }
    });


    // Last Collapse ---------------------------
    $(".last .footer-heading .footer-link").click(function() {
        var x = $(".last .slide-list")
        if (x.hasClass("collapse")) {
            $(".last .footer-heading .footer-link").addClass("rotate")
            $(".last .footer-heading .footer-link").removeClass("rotate-reverse")
            $(".first .footer-heading .footer-link").removeClass("rotate")
            $(".first .footer-heading .footer-link").addClass("rotate-reverse")
            $(".second .footer-heading .footer-link").removeClass("rotate")
            $(".second .footer-heading .footer-link").addClass("rotate-reverse")
            $(".third .footer-heading .footer-link").removeClass("rotate")
            $(".third .footer-heading .footer-link").addClass("rotate-reverse")
        }
    });
    $(".last .footer-heading .footer-link").click(function() {
        var x = $(".last .slide-list")
        if (x.hasClass("in")) {
            $(".last .footer-heading .footer-link").removeClass("rotate")
            $(".last .footer-heading .footer-link").addClass("rotate-reverse")
        }
    });


    // This is To Open search Box
    $(".search").click(function() {
        $("body").addClass("overflow");
        $(".overlay-box3").slideDown(300);
    });

    $(".search").click(function() {
        $(".search .search-icon").removeClass("open-search")
        $(".search .search-icon").addClass("close-search")
        $(".close-search-btn").fadeIn(500)
        $(".search-box").fadeIn(500);
    });

    $(".close-search-btn,.overlay-box3").click(function() {
        $("body").removeClass("overflow");
        $(".overlay-box3").slideUp(500);
    });

    $(".close-search-btn,.overlay-box3").click(function() {
        $(".search .search-icon").addClass("open-search")
        $(".search .search-icon").removeClass("close-search")
        $(".close-search-btn").fadeOut(300)
        $(".search-box").fadeOut(300);
    });


    //This is to Open Side Menu in Small Screens
    $(".menu").click(function() {
        $("body").addClass("overflow")
        $(".menu .menu-icon").removeClass("open-menu")
        $(".menu .menu-icon").addClass("close-menu")
        $(".overlay-box4").fadeIn(200);
        $(".mo-nav").addClass("menu-open");
    });
    $(".overlay-box4, .close").click(function() {
        $("body").removeClass("overflow")
        $(".menu .menu-icon").addClass("open-menu")
        $(".menu .menu-icon").removeClass("close-menu")
        $(".overlay-box4").fadeOut(200);
        $(".mo-nav").removeClass("menu-open");
    });

    if ($(window).width() <= 991) {
        $(".sub-menu .cats-link").click(function() {
            $(this).toggleClass("rotate")
            $(this).siblings(".sub-list").slideToggle(300);
        });
    }

});