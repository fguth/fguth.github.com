window.app = {};

$(document).ready(function(){
  var before_slide = function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
    currentSlideNumber == "0" ? $(".no-home").fadeOut() : $(".no-home").fadeIn();
    currentSlideNumber == (totalSlideQty - 1) ? $(".next").fadeOut() : $(".next").fadeIn();
    
    $("#navigator ul li").removeClass("current");
    $("#slide-link-" + currentSlideNumber).addClass("current")
  }
  
	app.slider = $('#slider').bxSlider({
		infiniteLoop: false,
		hideControlOnEnd: true,
		controls: false,
		onBeforeSlide: before_slide
	});
	
	$('.next').click(function(){ app.slider.goToNextSlide(); return false; });
	$('.prev').click(function(){ app.slider.goToPreviousSlide(); return false; });
	
	$('.slideLink').click(function(){
	  app.slider.goToSlide(parseInt($(this).attr("data-index")));
	});
	
	$(".modal").fancybox();
	
	var visibleHeight = function() {
		var e = window, a = 'inner';
		if ( !( 'innerWidth' in window ) ) {
			a = 'client';
			e = document.documentElement || document.body;
		}
		return (e[a + 'Height']);
	}
	
	$(".innerSlide").height(visibleHeight());
	
	$(".smoothScroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
	
	$(".smoothScrollAndHide").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
		$(this).parent(".innerSlide").delay(500).fadeOut(10);
	});
	
});
