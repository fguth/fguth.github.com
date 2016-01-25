function sizing() {
  var divWidth = $('.height').width();
  var divSmallWidth = $('.height-small').width();
  var articleHeight = $('.height').width() * 2 - $('.height').width() / 4;
  var articleSmallHeight = $('.height-small').width() * 2 - $('.height-small').width() / 4;

  $('.image-holder').height(divWidth);
  $('.article-image-mask').height(divWidth);
  
  $('.height-small .image-holder').height(divSmallWidth);
  $('.height-small .article-image-mask').height(divSmallWidth);
  
  $('height').height(articleHeight);
  $('height-small').height(articleSmallHeight);
}

$(document).ready(sizing);
$(window).resize(sizing);


function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('.menu').offset().top;
    if (window_top > 294) {
        $('.menu').addClass('stick');
    } else {
        $('.menu').removeClass('stick');
    }
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});


