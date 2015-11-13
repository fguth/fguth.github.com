$(document).ready(function () {

    'use strict';

    var Scroll = function () {

        var $win = $(window),

            vcard = $('.vcard'),
            work = $('.work'),
            projectOne = $('.project-one'),
            captionOne = $('.project-one h2'),
            projectTwo = $('.project-two'),
            captionTwo = $('.project-two h2'),
            projectThree = $('.project-three'),
            captionThree = $('.project-three h2'),
            projectFour = $('.project-four'),
            captionFour = $('.project-four h2');

        $win.on('load, scroll resize', function () {

            var sct = $(this).scrollTop();
            var halfH = $win.height() / 2;

            if (sct >= projectOne.offset().top - halfH) {
                vcard.addClass('hide'),
                captionOne.addClass("show");
            } else {
                vcard.removeClass('hide');
                captionOne.removeClass("show");
            }
            
            if (sct >= projectTwo.offset().top - halfH) {
                captionOne.removeClass("show");
                captionTwo.addClass("show");
            } else {
                captionTwo.removeClass('show');
            }
          
            if (sct >= projectThree.offset().top - halfH) {
                captionTwo.removeClass("show");
                captionThree.addClass("show");
            } else {
                captionThree.removeClass('show');
            }
          
            if (sct >= projectFour.offset().top - halfH) {
                captionThree.removeClass("show");
                captionFour.addClass("show");
            } else {
                captionFour.removeClass('show');
            }
          
            if (sct >= projectFour.offset().top + projectFour.innerHeight() - halfH) {
                vcard.removeClass('hide'),
                captionFour.removeClass("show");
            }
          
        });
    };

    Scroll()

});