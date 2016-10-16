(function() {
	'use strict';

	angular.module('myApp.common')
		.factory('articleService', articleService);

	articleService.$inject = ['$http'];
	function articleService ($http) {
		var service = {
			firstLaunch: true,
			getArticles: getArticles
		};
		return service;

		function getArticles () {
			return $http.get('data/lorem-articles.json')
				.then(getArticlesComplete);

			function getArticlesComplete (respond) {
				// console.log('service', respond)
				return respond.data;
			}
		}
	}
})();
