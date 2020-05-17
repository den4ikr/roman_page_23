$(document).ready(function(){
	$(".slider").slick({
		dots:true,
		arrows:true,
		responsive:[
			{
				breakpoint: 1024,
				settings: {
					arrows:false,
					slidersToShow:1,
				}
			}
		]
	})
	$(".header__burger").click(function(event){
		$(".header__list_1").toggleClass("active");
		$(".header__list_2").toggleClass("active");
	})
})