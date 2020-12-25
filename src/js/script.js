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


$('.dish__heart').on('click',function(e){
    $(this).attr('title','♥').css('color','#F34949');

    $(this).next().html(parseInt($(".dish__number").html())+1);

})



