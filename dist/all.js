$(".header__icon").on("click",function(){$(this).toggleClass("active"),$("nav").toggleClass("open")}),$("nav a").on("click",function(){$(".header__icon").toggleClass("active"),$("nav").removeClass("open")}),$(".menu__button").on("click",function(){$(".modal").show()}),$(".modal__icon").on("click",function(){$(".modal").hide()});