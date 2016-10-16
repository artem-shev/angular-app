(function() {
	'use strict';

	angular.module('myApp')
		.controller('NavBarCtrl', NavBarCtrl);

	NavBarCtrl.$inject = ['$routeParams', '$location', '$window'];
	function NavBarCtrl($routeParams, $location, $window) {
		var vm = this;

		vm.checkLocUsers = checkLocUsers;
		vm.checkLocArticles = checkLocArticles;
		vm.isCollapsed = true;
		vm.collapseNavbar = collapseNavbar;
		
		function checkLocUsers() {
			var loc = $location.$$path;
			if (loc === '/users' || loc === ('/users/' + $routeParams.userId)) {
				return true;
			}
		}

		function checkLocArticles() {
			var loc = $location.$$path;
			if (loc === '/articles' || loc === ('/articles/' + $routeParams.articleId)) {
				return true;
			}
		}

		function collapseNavbar() {
			if($window.innerWidth < 768){
				vm.isCollapsed = !vm.isCollapsed;
			}
		} 
	}


})();
