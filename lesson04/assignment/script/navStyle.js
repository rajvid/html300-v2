//Adding new class --open to the Navbar__links and class open to the Navbar__toggle container 
//when someone clicks on hamburger menu

$('.navbar__toggle').click(function() {

    $('.navbar__links').toggleClass('navbar__links--open', 500);
    $(this).toggleClass('open');
    
});