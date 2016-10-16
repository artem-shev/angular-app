describe('articleService', function() {
	var articleService, articles, request;

	beforeEach(function() {
		module('myApp.common');

		inject(function ($httpBackend, _articleService_, $http) {

			articleService = _articleService_;
			request = $http;
			$httpBackend
				.when('GET', 'data/lorem-articles.json')
				.respond({data: [1, 2, 3]});
		});
	});

	describe('tests', function() {
		it('should be first launch', function () {
			console.log('articleService', articleService);
			expect(articleService.firstLaunch).toBe(true);
		});
	});
});
