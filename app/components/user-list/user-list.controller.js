
(function() {
	'use strict';

	angular.module('myApp')
		.controller('UserListCtrl', UserListCtrl);

	UserListCtrl.$inject = ['userService'];

	function UserListCtrl(userService) {
		var vm = this;

		vm.users = userService.users || [];
		activate();

		function activate() {
			if (userService.firstLaunch) {
				userService.firstLaunch = false;
				return userService.getUsers()
					.then(writeUsers);
			}

			function writeUsers(data) {
				userService.users = data;
				vm.users = userService.users;
				// console.log('data wrote to service from UserListCtrl', vm.users);
			}
		}
	}
})();
