(function() {
	'use strict';

	angular.module('myApp')
		.config(config);

	config.$inject = ['$locationProvider', '$routeProvider'];
	function config($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('!');

		$routeProvider
			.when('/users', {
				template: '<user-list></user-list>'
			})
			.when('/users/:userId', {
				template: '<user></user>'
			})
			.when('/articles', {
				template: '<articles-list></articles-list>'
			})
			.when('/articles/:articleId', {
				template: '<article-item></article-item>'
			})
			.otherwise('/users');
	}

})();
