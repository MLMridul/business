// Preloader Js

$(window).on("load", function () {
    $('.pre-main').delay(2700).fadeOut();
    $('.pre-main .preloader').delay(2000).fadeOut();
    $('.pre-main span:first-of-type').css({
        'left': '-50%'
    })
    $('.pre-main span:last-of-type').css({
        'right': '-50%'

    })

})

// Preloader Js

// $(window).scroll(function () {
//     var scrooling = $(this).scrollTop();
//     if (scrooling > 400) {
//         $('.scrolltop').css({
//             'right': '30px',
//             'visibility': 'visible'

//         });
//     } else {
//         $('.scrolltop').css({
//             'right': '100%'
//         });
//     }
//     if (scrooling > 300) {
//         $('.menu-bg').addClass('bg');
//     } else {
//         $('.menu-bg').removeClass('bg');
//     }
// });

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