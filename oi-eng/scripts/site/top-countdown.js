/* global define */

define(function() {
  'use strict';

  var TopCountdown = function() {
    var clock = document.getElementsByClassName('clock')[0];
    var oneMinute = 60;
    var oneHour = 60 * oneMinute;
    var oneDay = 24 * oneHour;

    function addDigit(number) {
      return number >= 10 ? number : '0' + number;
    }

    setInterval(function() {
      var deltaSeconds = (new Date() - new Date('2015-02-01T00:00:00-02:00')) / 1000;

      var days = Math.floor(deltaSeconds / oneDay);
      var hours = Math.floor((deltaSeconds % oneDay) / oneHour);
      var minutes = Math.floor(((deltaSeconds % oneDay) % oneHour) / oneMinute);
      var seconds = Math.floor(((deltaSeconds % oneDay) % oneHour) % oneMinute);

      clock.textContent = days + ' days ' + addDigit(hours) + 'h ' + addDigit(minutes) + 'm ' + addDigit(seconds) + 's';
    }, 1);
  };

  return TopCountdown;
});
