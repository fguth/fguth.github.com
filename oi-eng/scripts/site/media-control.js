/* global define */

define(function() {
  'use strict';

  var MediaControl = function() {
    var html = document.querySelector('html');
    var videosSources = html.getElementsByTagName('source');
    var imagesSources = {
      desktop: html.getElementsByClassName('load-image-for-desktop'),
      tablet: html.getElementsByClassName('load-image-for-tablet'),
      phone: html.getElementsByClassName('load-image-for-phone')
    };

    function getBreakpoint() {
      var width = window.innerWidth;

      if (width < 768) {
        return 'phone';
      } else if (width >= 768 && width < 1024) {
        return 'tablet';
      } else {
        return 'desktop';
      }
    }

    function cleanSources(sources) {
      var sourcesTotal = sources.length - 1;

      for (var k = sourcesTotal; k >= 0; k--) {
        sources[k].parentElement.removeChild(sources[k]);
      }
    }

    if (html.classList.contains('no-touch')) {
      var videosSourcesTotal = videosSources.length;

      for (var i = 0; i < videosSourcesTotal; i++) {
        var source = videosSources[i];

        var src = source.getAttribute('data-src-no-touch');
        var type = source.getAttribute('type');

        var newSource = document.createElement('source');
        newSource.setAttribute('type', type);
        newSource.setAttribute('src', src);

        source.parentElement.appendChild(newSource);
        source.parentElement.removeChild(source);
      }
    }

    var images = imagesSources[getBreakpoint()];
    var imagesTotal = images.length;

    for (var j = 0; j < imagesTotal; j++) {
      var image = images[j];
      var imageSrc = image.getAttribute('data-src');

      var newImage = document.createElement('img');
      newImage.setAttribute('src', imageSrc);

      image.parentElement.appendChild(newImage);
    }

    cleanSources(images);
  };

  window.addEventListener('resize', MediaControl);

  return MediaControl;
});
