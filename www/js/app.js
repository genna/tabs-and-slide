var app = angular.module('starter', ['ionic']);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('app', {
			url: '/app',
			abstract: true,
			templateUrl: 'templates/menu.html'
		})

		.state('app.tabs', {
			url: '/tab',
			templateUrl: 'templates/tabs.html'
		})
		.state('app.tabs.home', {
			url: '/home',
			views: {
				'home-tab': {
					templateUrl: 'templates/home.html'
				}
			}
		})
		.state('app.tabs.home-1', {
			url: '/home-1',
			views: {
				'home-tab': {
					templateUrl: 'templates/home-1.html'
				}
			},
			// hideTabs: true
		})
		.state('app.tabs.home-2', {
			url: '/home-2',
			views: {
				'home-tab': {
					templateUrl: 'templates/home-2.html'
				}
			},
			// hideTabs: true
		})

		.state('app.tabs.settings', {
			url: '/settings',
			views: {
				'settings-tab': {
					templateUrl: 'templates/settings.html'
				}
			}
		})
		.state('app.tabs.settings-1', {
			url: '/settings-1',
			views: {
				'settings-tab': {
					templateUrl: 'templates/settings-1.html'
				}
			},
			// hideTabs: true
		})
		.state('app.tabs.settings-2', {
			url: '/settings-2',
			views: {
				'settings-tab': {
					templateUrl: 'templates/settings-2.html'
				}
			},
			// hideTabs: true
		})

		.state('app.login', {
			url: '/login',
			templateUrl: 'templates/login.html'
		})

		.state('app.flow', {
			url: '/flow',
			templateUrl: 'templates/flow-start.html'
		})
		.state('app.flow-first-child', {
			url: '/flow-first-child',
			templateUrl: 'templates/flow-first-child.html'
		})
		.state('app.flow-second-child', {
			url: '/flow-second-child',
			templateUrl: 'templates/flow-second-child.html'
		});

	$urlRouterProvider.otherwise('/app/login');
});

app.run(function($rootScope) {
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
		$rootScope.hideTabs = !!toState.hideTabs;
	});
});
