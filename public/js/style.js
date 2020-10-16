$(document).ready(function () {
    //silder
    $('#ahahahha').owlCarousel({
        loop: true,
        // autoplay: true,
        margin: 10,
        dots: false,
        autoplayTimeout: 1000,
        nav: true,
        navText: [
            "<i class='fa fa-angle-left' aria-hidden='true'></i>",
            "<i class='fa fa-angle-right' aria-hidden='true'></i>"
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    //silder
    $('#slider2').owlCarousel({
        loop: true,
        // autoplay: true,
        margin: 10,
        dots: false,
        autoplayTimeout: 1000,
        nav: true,
        navText: [
            "<i class='fa fa-angle-left' aria-hidden='true'></i>",
            "<i class='fa fa-angle-right' aria-hidden='true'></i>"
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
});
