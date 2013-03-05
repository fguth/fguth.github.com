/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'entypo\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-dribbble' : '&#x64;',
			'icon-dropbox' : '&#x62;',
			'icon-instagram' : '&#x69;',
			'icon-github' : '&#x67;',
			'icon-twitter' : '&#x74;',
			'icon-rdio' : '&#x72;',
			'icon-linkedin' : '&#x6c;',
			'icon-facebook' : '&#x66;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};