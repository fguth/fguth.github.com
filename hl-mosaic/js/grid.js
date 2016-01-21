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