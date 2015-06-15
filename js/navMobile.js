$(document).ready(function () {

    var menuMobile = $('#menu-mobile-middle, #menu-mobile-bottom');
    var navMobile = $('#nav-mobile');

    $('.menu-mobile-button').toggle(function () {
        menuMobile.hide();
        navMobile.show();

    }, function () {
        navMobile.hide();
        menuMobile.show();
    });
});
