(function() {
	'use strict';
	angular.module('myApp.common')
		.factory('userService', userService);

	userService.$inject = ['$http'];
	function userService ($http) {
		var service = {
			firstLaunch: true,
			getUsers: getUsers
		};
		return service;

		function getUsers () {
			return $http.get('data/users10.json')
				.then(getUsersComplete);

			function getUsersComplete(respond) {
				// console.log('service', respond)
				return respond.data.results;
			}
		}
	}
})();
