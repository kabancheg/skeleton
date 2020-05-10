$(document).ready(function() {
	$(".card-carousel__slider").slick({
	  nextArrow: '.my__arrow',
	  prevArrow: '.my__arrow',
	  infinite: true,
	  centerMode: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  centerPadding: "0px",

	  responsive: [
		{
		  breakpoint: 960,
		  settings: {
			centerMode: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			centerPadding: "60px",
		  }
		}
	  ]
	});
});
