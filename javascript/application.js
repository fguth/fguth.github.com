$(function() {
	$('.work').mouseover(function() {
  	$(this).find('a').show();
	});
	$('.work').mouseout(function() {
  	$(this).find('a').hide();
	});
});