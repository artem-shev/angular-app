(function() {
	'use strict';

	angular.module('myApp')
		.directive('articleItem', articleItem);

	function articleItem() {
		var directive = {
			restrict: 'E',
			controller: 'ArticleCtrl',
			controllerAs: 'ctrl',
			templateUrl: 'components/article-item/article-item.html'
		};
		return directive;
	}

})();
