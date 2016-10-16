(function() {
	'use strict';

	angular.module('myApp')
		.controller('UserCtrl', UserCtrl);

	UserCtrl.$inject = ['$routeParams', 'userService'];

	function UserCtrl($routeParams, userService) {

		var vm = this;

		vm.id = $routeParams.userId;
		vm.user = _.find(userService.users, {id: parseInt($routeParams.userId)}) || {};

		activate();

		function activate() {
			if (userService.firstLaunch) {
				userService.firstLaunch = false;
				userService.getUsers()
					.then(writeUsers);
			}

			function writeUsers(data) {
				userService.users = data;
				findUser();
				// console.log('data wrote to service from UserCtrl', userService.users);
			}

			function findUser() {
				vm.user = _.find(userService.users, {id: parseInt($routeParams.userId)});
			}
		}
	}

})();
