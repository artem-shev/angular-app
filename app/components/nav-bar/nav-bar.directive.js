(function() {
	'use strict';

	angular.module('myApp')
		.directive('navBar', navBarDirective);

	function navBarDirective() {
		var directive = {
			templateUrl: 'components/nav-bar/nav-bar.html',
			controller: 'NavBarCtrl',
			controllerAs: 'ctrl'
		};

		return directive;
	}
})();
