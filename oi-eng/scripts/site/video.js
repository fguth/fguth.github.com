define(['viewport'], function (viewport) {

	$(document)

})


require('./viewport');

$(document).ready(function() {
  $(window).scroll(function(){
      $("video:in-viewport").get(0).play();
  });
});