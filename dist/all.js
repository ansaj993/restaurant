$(".header__icon").on("click",function(){$(this).toggleClass("active"),$("nav").toggleClass("open")}),$("nav a").on("click",function(){$(".header__icon").toggleClass("active"),$("nav").removeClass("open")}),$(".menu__button").on("click",function(){$(".modal").show()}),$(".modal__icon").on("click",function(){$(".modal").hide()}),$(".dish__heart").on("click",function(){var e=$(this).parent().find(".dish__number");"♡"==$(this).attr("title")?($(this).attr("title","♥").css("color","#F34949"),e.html(parseInt(e.html())+1)):($(this).attr("title","♡").css("color","#555555"),e.html(parseInt(e.html())-1))});var slideIndex=1;function plusSlides(e){showSlides(slideIndex+=e)}function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){var n,t=document.getElementsByClassName("banner__wrapper"),s=document.getElementsByClassName("banner__dot");for(e>t.length&&(slideIndex=1),e<1&&(slideIndex=t.length),n=0;n<t.length;n++)t[n].style.display="none";for(n=0;n<s.length;n++)s[n].style.background="#b7b7b7";t[slideIndex-1].style.display="flex",s[slideIndex-1].style.background="#f34949"}showSlides(slideIndex);var lightbox=document.getElementById("imageLightbox");function showLightbox(){lightbox.style.display="flex"}function hideLightbox(){lightbox.style.display="none"}var imageIndex=1;function plusImages(e){showImages(imageIndex+=e)}function currentImage(e){showImages(imageIndex=e)}function showImages(e){var n,t=document.getElementsByClassName("lightbox__image");for(e>t.length&&(imageIndex=1),e<1&&(imageIndex=image.length),n=0;n<t.length;n++)t[n].style.display="none";t[imageIndex-1].style.display="flex"}showImages(imageIndex);var cardIndex=1;function currentCard(e){showCard(cardIndex=e)}function showCard(){document.getElementsByClassName("dish__wrap");for(var e=document.getElementsByClassName("dishes__dot"),n=0;n<e.length;n++)e[n].style.background="#b7b7b7";e[cardIndex-1].style.background="#f34949"}showCard(cardIndex);