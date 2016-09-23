var app = angular.module('starter', ['ionic']);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('app', {
			url: '/app',
			abstract: true,
			templateUrl: 'templates/menu.html'
		})
		.state('app.program-tabs', {
			url: '/program-tabs',
			abstract: true,
			templateUrl: 'templates/program/program-tabs.html'
		})

		//home
		.state('app.home-tabs', {
			url: '/home-tabs',
			abstract: true,
			templateUrl: 'templates/home/home-tabs.html'
		})
		.state('app.home-tabs.home-category-1', {
			url: '/home-category-1',
			views: {
				'category-1-tab': {
					templateUrl: 'templates/home/home-category.html',
					controller: 'categoryController'
				}
			}
		})
		.state('app.home-tabs.home-category-2', {
			url: '/home-category-2',
			views: {
				'category-2-tab': {
					templateUrl: 'templates/home/home-category.html',
					controller: 'categoryController'
				}
			},
		})
		.state('app.home-tabs.home-category-3', {
			url: '/home-category-3',
			views: {
				'category-3-tab': {
					templateUrl: 'templates/home/home-category.html',
					controller: 'categoryController'
				}
			},
		})

		.state('app.home-details-tabs', {
			url: '/home-details-tabs/:category/:movie',
			abstract: true,
			templateUrl: 'templates/home/home-details-tabs.html',
			controller: 'detailTabsController'
		})
		.state('app.home-details-tabs.home-info', {
			url: '/home-details-info',
			views: {
				'details-info-tab': {
					templateUrl: 'templates/home/home-info.html',
					controller: 'infoController'
				}
			}
		})
		.state('app.home-details-tabs.home-hours', {
			url: '/home-details-hours',
			views: {
				'details-hours-tab': {
					templateUrl: 'templates/home/home-hours.html',
					controller: 'hoursController'
				}
			}
		})

		//**********************************************
		//program
		//**********************************************
		.state('app.program-tabs.program-category-1', {
			url: '/program-category-1',
			views: {
				'category-1-tab': {
					templateUrl: 'templates/program/program-category-1.html'
				}
			}
		})
		.state('app.program-details-tabs.program-category-1-1', {
			url: '/program-details-1-1',
			views: {
				'details-1-tab': {
					templateUrl: 'templates/program/program-details-1-1.html',
					controller: 'controller'
				}
			}
		})
		.state('app.program-details-tabs.program-category-1-2', {
			url: '/program-details-1-2',
			views: {
				'details-2-tab': {
					templateUrl: 'templates/program/program-details-1-2.html',
					controller: 'controller'
				}
			}
		})
		.state('app.program-tabs.program-category-2', {
			url: '/program-category-2',
			views: {
				'category-2-tab': {
					templateUrl: 'templates/program/program-category-2.html'
				}
			}
		})
		.state('app.program-details-tabs.program-category-2-1', {
			url: '/program-details-2-1',
			views: {
				'details-2-tab': {
					templateUrl: 'templates/program/program-details-1-1.html',
					controller: 'controller'
				}
			}
		})
		.state('app.program-details-tabs.program-category-2-2', {
			url: '/program-details-2-2',
			views: {
				'details-2-tab': {
					templateUrl: 'templates/program/program-details-1-2.html',
					controller: 'controller'
				}
			}
		})
		.state('app.program-tabs.program-category-3', {
			url: '/program-category-3',
			views: {
				'category-3-tab': {
					templateUrl: 'templates/program/program-category-3.html'
				}
			}
		})
		.state('app.program-details-tabs.program-category-3-1', {
			url: '/program-details-3-1',
			views: {
				'details-2-tab': {
					templateUrl: 'templates/program/program-details-1-1.html',
					controller: 'controller'
				}
			}
		})
		.state('app.program-details-tabs.program-category-3-2', {
			url: '/program-details-3-2',
			views: {
				'details-2-tab': {
					templateUrl: 'templates/program/program-details-1-2.html',
					controller: 'controller'
				}
			}
		})
		//**********************************************
		//news
		//**********************************************
		.state('app.articles', {
			url: '/articles',
			templateUrl: 'templates/news/articles.html'
		})
		.state('app.article', {
			url: '/article',
			templateUrl: 'templates/news/article.html'
		})

		//**********************************************
		//information
		//**********************************************
		.state('app.info', {
			url: '/info',
			templateUrl: 'templates/information/info.html'
		})

	$urlRouterProvider.otherwise('/app/home-tabs/home-category-1');
});