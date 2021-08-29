(function($) {
    "use strict";
    /* -------------------------------------
               Prealoder
         -------------------------------------- */
    $(window).on('load', function(event) {
        $('.js-preloader').delay(500).fadeOut(500);
    });



    /* -------------------------------------
          Language Dropdown
    -------------------------------------- */
    $(".language-option").each(function() {
        var each = $(this)
        each.find(".lang-name").html(each.find(".language-dropdown-menu a:nth-child(1)").text());
        var allOptions = $(".language-dropdown-menu").children('a');
        each.find(".language-dropdown-menu").on("click", "a", function() {
            allOptions.removeClass('selected');
            $(this).addClass('selected');
            $(this).closest(".language-option").find(".lang-name").html($(this).text());
        });
    })


    /* -------------------------------------
              Counter 
        -------------------------------------- */
    $(".odometer").appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });
    /* -------------------------------------
          Product Quantity
    -------------------------------------- */
    var minVal = 1,
        maxVal = 20;
    $(".increaseQty").on('click', function() {
        var $parentElm = $(this).parents(".qtySelector");
        $(this).addClass("clicked");
        setTimeout(function() {
            $(".clicked").removeClass("clicked");
        }, 100);
        var value = $parentElm.find(".qtyValue").val();
        if (value < maxVal) {
            value++;
        }
        $parentElm.find(".qtyValue").val(value);
    });
    // Decrease product quantity on cart page
    $(".decreaseQty").on('click', function() {
        var $parentElm = $(this).parents(".qtySelector");
        $(this).addClass("clicked");
        setTimeout(function() {
            $(".clicked").removeClass("clicked");
        }, 100);
        var value = $parentElm.find(".qtyValue").val();
        if (value > 1) {
            value--;
        }
        $parentElm.find(".qtyValue").val(value);
    });

     /* -------------------------------------
          Service Slider 
    -------------------------------------- */
    var about_slider_one = new Swiper('.about-slider-one', {
        spaceBetween: 30,
        slidesPerView: 1,
        autoplay: {
            delay: 6000,
            disableOnInteraction: true,
        },
        effect:'fade',
        observer: true,
        observeParents: true,
        speed: 1500,
        loop: true,
        navigation: {
            nextEl: ".about-one-next",
            prevEl: ".about-one-prev",
        }

    });
     var about_slider_two = new Swiper('.about-slider-two', {
        spaceBetween: 30,
        slidesPerView: 1,
        autoplay: {
            delay: 6000,
            disableOnInteraction: true,
        },
        effect:'fade',
        observer: true,
        observeParents: true,
        speed: 1500,
        loop: true,
        navigation: {
            nextEl: ".ab-one-next",
            prevEl: ".ab-one-prev",
        }

    });

    /* -------------------------------------
          Why Choose us  Slider 
    -------------------------------------- */
    var swiper = new Swiper(".wh-img-slider", {
        spaceBetween: 20,
        speed: 1500,
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".wh-img-next",
            prevEl: ".wh-img-prev",
        },
    });

    /* -------------------------------------
          Project Slider 
    -------------------------------------- */
    var testimonial_slider_one = new Swiper('.testimonial-slider-one', {
        spaceBetween: 30,
        slidesPerView: 1,
        autoplay: {
            delay: 6000,
            disableOnInteraction: true,
        },
        observer: true,
        observeParents: true,
        speed: 1500,
        loop: true,
        pagination: {
            el: ".testimonial-one-pagination",
            clickable: true,
        },

    });
    var testimonial_slider_two = new Swiper('.testimonial-slider-two', {
        spaceBetween: 30,
        slidesPerView: 1,
        autoplay: {
            delay: 6000,
            disableOnInteraction: true,
        },
        observer: true,
        observeParents: true,
        speed: 1500,
        loop: true,
        pagination: {
            el: ".testimonial-two-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1

            },
            768: {
                slidesPerView: 2

            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 25,

            }
        }
    });
    var testimonial_slider_three = new Swiper('.testimonial-slider-three', {
        spaceBetween: 30,
        autoplay: {
            delay: 6000,
            disableOnInteraction: true,
        },
        observer: true,
        observeParents: true,
        speed: 1500,
        loop: true,
        pagination: {
            el: ".testimonial-three-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1

            },
            992: {
                slidesPerView: 2

            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 25,

            }
        }
    });

    /* -------------------------------------
          Instagram Slider 
    -------------------------------------- */
    var instagram_slider_one = new Swiper('.instagram-slider', {
        spaceBetween: 6,
        autoplay: {
            delay: 4000,
            disableOnInteraction: true,
        },
        centeredSlide: true,
        // observer: true,
        // observeParents: true,
        speed: 1500,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 3,
                spaceBetween: 4,

            },
            768: {
                slidesPerView: 3,

            },
            992: {
                slidesPerView: 4,

            },
            1200: {
                slidesPerView: 5,

            },

            1500: {
                slidesPerView: 6,

            }
        }
    });
    /* ----------------------------------------
           Magnific Popup Video
     ------------------------------------------*/
    $('.video-play').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        preloader: true,
    });


    $('.btn-gallery').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },

        zoom: {
            enabled: true,

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            opener: function(openerElement) {

                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }

    });

    /* -------------------------------------
          Mobile Topbar 
    -------------------------------------- */

    $('.mobile-top-bar').on('click', function() {
        $('.header-top-right').addClass('open')
    });
    $('.close-header-top').on('click', function() {
        $('.header-top-right').removeClass('open')
    });

    /* -------------------------------------
          sticky Header
    -------------------------------------- */
    var wind = $(window);
    var sticky = $('.header-wrap');
    wind.on('scroll', function() {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });
  
    /*---------------------------------
        Responsive mmenu
    ---------------------------------*/
    $('.mobile-menu a').on('click', function() {
        $('.main-menu-wrap').addClass('open');
        $('.mobile-bar-wrap.style2 .mobile-menu').addClass('open');
    });

    $('.mobile_menu a').on('click', function() {
        $(this).parent().toggleClass('open');
        $('.main-menu-wrap').toggleClass('open');
    });

    $('.menu-close').on('click', function() {
        $('.main-menu-wrap').removeClass('open')
    });
    $('.mobile-top-bar').on('click', function() {
        $('.header-top').addClass('open')
    });
    $('.close-header-top button').on('click', function() {
        $('.header-top').removeClass('open')
    });
    var $offcanvasNav = $('.main-menu'),
        $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
    $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="las la-angle-down"></i></span>');

    $offcanvasNavSubMenu.slideUp();

    $offcanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if (($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.siblings('ul').slideUp('slow');
            } else {
                $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                $this.siblings('ul').slideDown('slow');
            }
        }
        if ($this.is('a') || $this.is('span') || $this.attr('class').match(/\b(menu-expand)\b/)) {
            $this.parent().toggleClass('menu-open');
        } else if ($this.is('li') && $this.attr('class').match(/\b('has-children')\b/)) {
            $this.toggleClass('menu-open');
        }
    });

    /*-------------------------------------
         Scroll to top
    ----------------------------------*/

    // Show or hide the  button
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to top
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


})(jQuery);