/* global define, $ */

define(function () {

    'use strict';

    var Scroll = function () {

        var $win = $(window),
            two = $('.two'),
            three = $('.three'),
            four = $('.four'),
            five = $('.five'),

            yellow = $('.max-bg-yellow'),
            aquaOne = $('.max-bg-aqua-one'),
            purple = $('.max-bg-purple'),
            aquaTwo = $('.max-bg-aqua-two'),

            section2 = $('.section-2'),
            section3 = $('.section-3'),
            section4 = $('.section-4'),

            sideLine = $('.side-line');

        $win.on('load, scroll resize', function () {

            var sct = $(this).scrollTop();
            var halfH = $win.height() / 2;

            /*==================
            Side line
            ===================*/
            if (sct > section2.offset().top - halfH) {
                sideLine.removeClass('bg-aqua bg-yellow').addClass('show');
            }

            if (sct > section3.offset().top - halfH) {
                sideLine.removeClass('bg-yellow').addClass('bg-aqua');
            }

            if (sct > section4.offset().top - halfH) {
                sideLine.removeClass('bg-aqua').addClass('bg-yellow');
            }

            /*==================
            Colored backgrounds
            ===================*/
            var slidesPosY = {
                two: two.offset().top,
                three: three.offset().top,
                four: four.offset().top,
                five: five.offset().top
            };

            if (sct > slidesPosY.two - halfH) {
                yellow.addClass('standby');

            } else {
                yellow.removeClass('standby');
            }

            if (sct > slidesPosY.three - halfH) {
                aquaOne.addClass('standby');

            } else {
                aquaOne.removeClass('standby');
            }

            if (sct > slidesPosY.four - halfH) {
                purple.addClass('standby');

            } else {
                purple.removeClass('standby');
            }

            if (sct > slidesPosY.five - halfH) {
                aquaTwo.addClass('standby');

            } else {
                aquaTwo.removeClass('standby');
            }
        });
    };

    return Scroll;

});
