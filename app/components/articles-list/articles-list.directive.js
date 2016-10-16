(function() {
	'use strict';

	angular.module('myApp')
		.directive('articlesList', articles);

	function articles() {
		var directive = {
			restrict: 'E',
			templateUrl: 'components/articles-list/articles-list.html',
			controller: 'ArticlesListCtrl',
			controllerAs: 'ctrl',
		};
		return directive;
	}

})();
