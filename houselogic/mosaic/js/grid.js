function sizing() {
  var divWidth = $('.height').width();
  var divSmallWidth = $('.height-small').width();
  var articleHeight = $('.height').width() * 1.6 - $('.height').width() / 5;
  var articleSmallHeight = $('.height-small').width() * 2 - $('.height-small').width() / 5.2;

  $('.image-holder').height(divWidth);
  $('.article-image-mask').height(divWidth);
  
  $('.height-small .image-holder').height(divSmallWidth);
  $('.height-small .article-image-mask').height(divSmallWidth);
  
  $('.height').height(articleHeight);
  $('.height-small-image').height(articleSmallHeight);
}

$(document).ready(sizing);
$(window).resize(sizing);


