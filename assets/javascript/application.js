$(function() {
  $('.more a').click(function(){
    if($(this).prevAll('.details').hasClass('visible')) {
      $(this).prevAll('.details').removeClass('visible');
    }
    else {
      $(this).prevAll('.details').addClass('visible');  
    }
  });
-});

