$(function() {
	$('.work').click(function(){
		if($(this).hasClass('opened')) {
		  $(this).removeClass('opened');
		}
		else {
		  $(this).addClass('opened');
		}
	});
	
	$('#find-fguth ul li a').hover(function(){ 
		$('div.tipsy.' + $(this).attr('class')).toggleClass('hover');
	});
	
});
