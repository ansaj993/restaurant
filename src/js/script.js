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
    var dots = document.getElementsByClassName('banner__dot');

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

//gallery lightbox

var lightbox = document.getElementById('imageLightbox')

function showLightbox() {
    lightbox.style.display = "flex";
}

function hideLightbox() {
    lightbox.style.display = "none";
}

var imageIndex = 1;
showImages(imageIndex);

//arrows

function plusImages(n) {
    showImages(imageIndex += n);
}

function currentImage(n) {
    showImages(imageIndex = n);
}


function showImages(n) {
    var i;
    var images = document.getElementsByClassName('lightbox__image');

    if (n > images.length){
        imageIndex = 1;
    }

    if (n < 1) {
        imageIndex = image.length;
    }

    for (i = 0; i < images.length; i++){
        images[i].style.display = "none";
    }

    images[imageIndex - 1].style.display = "flex";
}

/*carousel*/

 $('.dishes__wrap').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:true
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
              
