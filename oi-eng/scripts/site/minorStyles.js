define(function () {

	'use strict';

	var minorStyles = function () {

		var link = document.createElement('link');

		link.addEventListener('load', link.removeAttribute.bind(link, 'media'));

		link.href = 'styles/minor.css';
		link.media = 'none';
		link.rel = 'stylesheet';

		document.head.appendChild(link);

	}

	return minorStyles;

});