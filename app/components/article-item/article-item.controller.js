(function() {
	'use strict';

	angular.module('myApp')
		.controller('ArticleCtrl', ArticleCtrl);

	ArticleCtrl.$inject = ['$routeParams', 'articleService'];

	function ArticleCtrl($routeParams, articleService) {
		var vm = this;
		vm.id = $routeParams.articleId;
		vm.article =  _.find(articleService.articles, {id: parseInt(vm.id)}) || {};

		activate();
		function activate () {
			if (articleService.firstLaunch) {
				articleService.firstLaunch = false;
				articleService.getArticles()
					.then(writeArticles);
			}

			function writeArticles(data) {
				articleService.articles = data;
				vm.article = _.find(articleService.articles, {id: parseInt(vm.id)}) || {};
				// console.log('articles wrote from ArticleCtrl', articleService.articles);
			}
		}
	}

})();
