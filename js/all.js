$(document).ready(function () {
    //navbar menu 收合
    $('.nav-link, .navbar-brand').on('click', function(){
        $('.navbar-collapse').removeClass('show');
        $('.navbar-toggler').addClass('collapsed');
        $('nav .navbar-toggler ').attr("aria-expanded","false");
    });
    //navbar menu動態
    $('.navbar-brand').on('click', function () {
        $('html,body').animate({
            scrollTop: 0,
         }, 500);
    });
    $('.navbar-nav>li>a[href="#menu1"]').on('click', function () {
        $('html,body').animate({
            scrollTop: $('#menu1').offset().top - 56,
         }, 500);
    });
    $('.navbar-nav>li>a[href="#menu2"]').on('click', function () {
        $('html,body').animate({
            scrollTop: $('#menu2').offset().top - 56,
         }, 500);
    });
    $('.navbar-nav>li>a[href="#menu4"]').on('click', function () {
        $('html,body').animate({
            scrollTop: $('#menu4').offset().top - 56,
         }, 500);
    });
});