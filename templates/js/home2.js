require('./../css/general.css');
require('./../css/home2.css');
require('./../library/fontawesome/fontawesome.js');
var $ = require('jquery');

function init() {

}

function scrollTo(element) {
    var vheight = element.offsetTop;
    $('html, body').animate({
        scrollTop: (Math.floor($(window).scrollTop() / vheight)+1) * vheight
    }, 1200);
}

$(document).ready(function() {
    init();

    $(document).on('click', '#menu', function () {
        $(this).closest('#header-wrapper').toggleClass('active');
    });

    $(window).resize(function(){
        if($(window).width() > 610) {
            $('#header-wrapper').removeClass('active');
        }
    });

    $(document).on('click', '#about-link', function (e) {
        e.stopPropagation();
        scrollTo(document.getElementById('mission-section'));
    });

    $(document).on('click', '#service-link', function (e) {
        e.stopPropagation();
        scrollTo(document.getElementById('services-section'));
    });

    $(document).on('click', '#contact-link, #contact-button', function (e) {
        e.stopPropagation();
        scrollTo(document.getElementById('contact-section'));
    });

    $(document).on('click', '#promotional-button', function (e) {
        e.stopPropagation();
        window.open('https://papco.dcpromosite.com/p/catalog');
    });
});