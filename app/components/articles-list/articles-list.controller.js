(function() {
	'use strict';

	angular.module('myApp')
		.controller('ArticlesListCtrl', ArticlesCtrl);

	ArticlesCtrl.$inject = ['$location', 'articleService', '$scope'];
	function ArticlesCtrl($location, articleService, $scope) {
		var vm = this;
		vm.articles = articleService.articles || [];

		vm.currentPage = 1;
		vm.itemsPerPage = '5';
		vm.prevQuant = 100;
		vm.prevSelect = [];
		vm.prevStep = 20;
		vm.maxPrevSize = 200;
		//functions
		vm.setItemsPerPage = setItemsPerPage;
		vm.setPage = setPage;
		vm.setPreview = setPreview;
		activate();
		function setItemsPerPage(num) {
			vm.itemsPerPage = num;
			vm.currentPage = 1; //reset to first paghe
		}

		function setPage(pageNo) {
			vm.currentPage = pageNo;
		}

		function setPreview(num) {
			if (typeof num !== 'number') {
				num = parseInt(num);
				vm.prevQuant = num;
			} else {
				vm.prevQuantSelect = vm.prevQuant.toString();				
			}
			vm.articles.forEach(function(item) {
				item.textPrev = item.text.slice(0, num) + '...';
			});
		}

		function activate() {
			if (articleService.firstLaunch) {
				articleService.getArticles()
					.then(writeArticles);
				articleService.firstLaunch = false;
			} else {
				buildView();
			}

			function writeArticles(data) {
				articleService.articles = data;
				vm.articles = articleService.articles;
				// console.log('articles wrote from ArticlesListCtrl', articleService.articles);
				buildView();
			}

			function buildView() {
				setPreview(vm.prevQuant);
				vm.totalItems = vm.articles.length;
				$scope.$watch('ctrl.currentPage + ctrl.itemsPerPage', function() {
					vm.filteredArticles = vm.articles.slice((vm.currentPage-1)*vm.itemsPerPage, ((vm.currentPage)*vm.itemsPerPage));
				});
				prevSelectOpt(vm.maxPrevSize, vm.prevStep);
			}

			function prevSelectOpt (size, step) {
				for (let i = 0; i < (size / step); i++) {
					vm.prevSelect.push((i + 1) * step);
				}
			}
		}
	}
})();
