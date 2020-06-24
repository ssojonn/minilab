(function ($) {
    "use strict";

    $(window).on('load', function () {
        // $('.loader-wrapper').addClass('loaded');
        setTimeout(function(){ $('.loader-wrapper').addClass('loaded'); },100);
        setTimeout(function(){
            $('.wow').addClass('show');
            var wow = new WOW().init();
        },200);
    });

    $(window).on('scroll', function () {

    });

    $(document).ready(function () {
        menuToggle();
        searchToggle();
        testimonialCarousel();
        videoPopup();
    });

    function menuToggle() {
        $(".menu-open").on('click', function(){
            $('.menu-wrap').addClass('show-menu');
        });
        $(".close-menu").on('click', function(){
            $('.menu-wrap').removeClass('show-menu');
        });
    };

    function searchToggle() {
        $(".search-open").on('click', function(){
            $('.search-form').addClass('show-search');
        });
        $(".close-search-form").on('click', function(){
            $('.search-form').removeClass('show-search');
        });
    };

    function testimonialCarousel() {
        $(".owl-carousel.testimonial-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1,
                    margin: 50
                },
                576: {
                    items: 2,
                    margin: 30
                },
                991: {
                    items: 2,
                    margin: 30
                },
                1920: {
                    items: 2,
                    margin: 50
                }
            }
        });
    };

    // videoPopup Init
    function videoPopup() {
        if ($('.video-popup').length > 0) {
            $('.video-popup').magnificPopup({
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 200,
                preloader: true,
                fixedContentPos: false,
            });
        };
    };

    


})(jQuery);