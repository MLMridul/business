// Preloader Js

// $(window).on("load", function () {
//     $('.pre-main').delay(2700).fadeOut();
//     $('.pre-main .preloader').delay(2000).fadeOut();
//     $('.pre-main span:first-of-type').css({
//         'left': '-50%'
//     })
//     $('.pre-main span:last-of-type').css({
//         'right': '-50%'

//     })

// })

// Preloader Js

$(window).scroll(function () {
    var scrooling = $(this).scrollTop();
    if (scrooling > 400) {
        $('.scrollTop').slideDown();
    } else {
        $('.scrollTop').slideUp()
    };
    if (scrooling > 300) {
        $('#navbar').addClass('bg');
    } else {
        $('#navbar').removeClass('bg');
    }

});

$('.scrollTop').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 2000)
});

//animation scroll js
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 0
            }, 1500, );
            return false;
        }
    }
});


// Fixed Nav




// Banner SLider
$('.banner-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    prevArrow: '<i class="fa fa-angle-left banner-prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right banner-next" aria-hidden="true"></i>',
});

// Wow Js

new WOW().init();

// init Isotope
var $grid = $('.gallery-image').isotope();
// filter items on button click
$('.fillter-menu').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue
    });
});

// Fillter Button Actice Class

$('.gallery-menu ul li').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
})

// Venobox Js

$('.venobox').venobox();


// Testimonial SLider

$('.testimonial-slider').slick({
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false
});


// Countdown Timer

// var flipdown = new FlipDown(2022, 1, 1);
// flipdown.start();
document.addEventListener('DOMContentLoaded', () => {

    // Unix timestamp (in seconds) to count down to
    var twoDaysFromNow = (new Date('January 01, 2022').getTime() / 1000) + (86400 * 2) + 1;

    // Set up FlipDown
    var flipdown = new FlipDown(twoDaysFromNow)

        // Start the countdown
        .start()

        // Do something when the countdown ends
        .ifEnded(() => {
            console.log('The countdown has ended!');
        });

    // Show version number
    // var ver = document.getElementById('ver');
    // ver.innerHTML = flipdown.version;
});