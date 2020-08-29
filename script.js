$(document).ready(function () {

    const burgerOn = $('.mobile-menu');
    let burger = $('.burger-menu');
    const burgerOff = $('.mobile-menu__burger');
    let overview = $('.overview-skip');
    let features = $('.features-skip');
    let technology = $('.technology-skip');
    let contact = $('.contact-skip');
    let signUp = $('.sign-up-skip');

    burgerOn.on('click', function () {
        burger.addClass('active');
    })
    burgerOff.on('click', function () {
        burger.removeClass('active');
    })
    overview.on('click', function () {
        burger.removeClass('active');
        $('body, html').animate({
            scrollTop: $('.video-section').offset().top + 1
        }, 1000);

    })
    features.on('click', function () {
        burger.removeClass('active');
        $('body, html').animate({
            scrollTop: $('.features').offset().top + 1
        }, 1000);

    })
    technology.on('click', function () {
        burger.removeClass('active');
        $('body, html').animate({
            scrollTop: $('.technology').offset().top + 1
        }, 1000);

    })
    contact.on('click', function () {
        burger.removeClass('active');
        $('body, html').animate({
            scrollTop: $('.contact').offset().top + 1
        }, 1000);

    })





})