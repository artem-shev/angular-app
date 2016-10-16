(function() {
	'use strict';

	angular.module('myApp.common')
		.filter('firstLetter', firstLetter);

	function firstLetter() {
		return function(item) {
			if (item) {
				var firstLetter = item[0].toUpperCase();

				var text = firstLetter + item.substr(1);

				return text;
			}
		};
	}

})();
