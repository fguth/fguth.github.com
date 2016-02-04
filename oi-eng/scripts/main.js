/* global requirejs */

requirejs.config({
	paths: {
		modernizr: 'vendor/modernizr',
		jquery: 'vendor/jquery.min',
		easing: 'vendor/jquery.easing',
		inViewport: 'vendor/isInViewport.min',
		counter: 'vendor/counter.min'
	},
	shim: {
		modernizr: {
			exports: 'Modernizr'
		},
		easing: ['jquery'],
		inViewport: ['jquery'],
		counter: ['jquery']
	}
});

require(
  [
    'jquery',
    'site/scroll',
    'site/top-countdown',
    'site/media-control',
    'modernizr',
    'easing',
    'inViewport'
  ],
  function ($, scroll, mediaControl, topCountdown) {
    'use strict';

    $(document).ready(function () {
      scroll();
      topCountdown();
      mediaControl();

      $(window).scroll(function () {
        $('video').each(function (i, el) {
          if($(el).is(':in-viewport')) {
            $(el).get(0).play();
          }
        });
      });


      $(".social-sharing a").on("click", function(e){
          e.preventDefault();
          var windowLeft = (window.screen.width / 2) - ((575 / 2) + 10),
              windowTop = (window.screen.height / 2) - ((350 / 2) + 50);
          window.open($(this).attr("href"), "_blank", "width=575, height=350,top="+windowTop+",left="+windowLeft);
      });

      if (document.OiDatalayer === undefined || document.OiDatalayer.productInfo === undefined) {
          if (document.OiDatalayer === undefined) {
              document.OiDatalayer = {};
          }
          if (document.OiDatalayer.pageInfo === undefined) {
              document.OiDatalayer.pageInfo = {};
          }
       
      }

      document.OiDatalayer.pageInfo.URL = window.location.host;
      document.OiDatalayer.pageInfo.pageName = window.location.host;
      
      (function(d, script) {
          script = d.createElement('script');
          script.type = 'text/javascript';
          script.async = true;
          script.onload = function(){
          };
          script.src = window.location.protocol + '//nexus.ensighten.com/oi/portal/Bootstrap.js';
          d.getElementsByTagName('head')[0].appendChild(script);
      }(document));

    });
  }
);
