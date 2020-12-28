/*show mobile menu*/

$('.header__icon').on('click',function(){
    $(this).toggleClass('active');
    $('nav').toggleClass('open');

})

$('nav a').on('click',function(){
    $('.header__icon').toggleClass('active');
    $('nav').removeClass('open');
})

/*show modal for menu*/

$('.menu__button').on('click',function() {
    $('.modal').show();
})

$('.modal__icon').on('click',function() {
    $('.modal').hide();
})


//dishes heart and counter


$('.dish__heart').on('click',function(){

    var number = $(this).parent().find('.dish__number');

    if($(this).attr('title') == '♡') {
        $(this).attr('title','♥').css('color','#F34949');
        number.html(parseInt(number.html())+1);
    }

    else {
        $(this).attr('title','♡').css('color','#555555');
        number.html(parseInt(number.html())-1);
    }
})

//banner

var slideIndex = 1;
showSlides(slideIndex);

//arrows

function plusSlides(n) {
    showSlides(slideIndex += n);
}

//dots

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('banner__wrapper');
    var dots = document.getElementsByClassName('dot');

    if (n > slides.length){
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].style.background = "#b7b7b7";
    }

    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].style.background = "#f34949";
}


