(function() {
	'use strict';

	angular.module('myApp')
		.directive('user', userDirective);

	function userDirective() {
		var directive = {
			restrict: 'E',
			templateUrl: 'components/user/user.html',
			controller: 'UserCtrl',
			controllerAs: 'ctrl'
		};

		return directive;
	}
})();
