$(function() {
	$('.work').mouseover(function() {
  	$(this).find('a').fadeIn("fast");
	});
	$('.work').mouseout(function() {
  	$(this).find('a').hide();
	});
});