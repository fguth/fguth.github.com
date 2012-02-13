$(function() {
	$('.work').mouseover(function() {
  	$(this).find('a').show();
	});
<<<<<<< HEAD:javascript/application.js
	$('.work').mouseout(function() {
  	$(this).find('a').hide();
	});
});
=======
	$('#find-fguth ul li a').hover(function(){ 
		$('div.tipsy.' + $(this).attr('class')).toggleClass('hover');
	});
});
>>>>>>> development:assets/javascript/application.js
