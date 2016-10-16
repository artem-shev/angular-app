(function() {
	'use strict';

	angular.module('myApp')
		.directive('userList', userListDirective);

	function userListDirective() {
		var directive = {	
			templateUrl: 'components/user-list/user-list.html',
			controller: 'UserListCtrl',
			controllerAs: 'ctrl'
		};

		return directive;
	}

})();
