var app = angular.module('starter');

app.controller('detailTabsController', function($stateParams, $scope, $state, $ionicHistory) {
	var category = $stateParams.category;
	var movie = $stateParams.movie;
	console.log(category, movie);
	$scope.category = category;
	$scope.movie = movie;
	$scope.$ionicHistory = $ionicHistory;

	$scope.openHours = function() {
		console.log($scope);
		$state.go('app.home-details-tabs.home-hours', {
			category: category,
			movie: movie
		});
	}

	$scope.openInfo = function() {
		console.log($scope);

		$state.go('app.home-details-tabs.home-info', {
			category: category,
			movie: movie
		});
	}
});

app.controller('categoryController', function($state, $scope) {
	var category;
	switch ($state.current.name) {
		case 'app.home-tabs.home-category-1':
			category = 1;
			break;
		case 'app.home-tabs.home-category-2':
			category = 2;
			break;
		case 'app.home-tabs.home-category-3':
			category = 3;
			break;
	}
	$scope.category = category;

	$scope.items = [];
	for (var i = 0; i < 10; i++) {
		$scope.items.push({
			id: category + '' + (i + 1),
			name: 'Item ' + category + (i + 1)
		});
	}

	$scope.go = function(item) {
		$state.go('app.home-details-tabs.home-info', {
			category: category,
			movie: item.id
		});
	}
});

app.controller('hoursController', function($ionicHistory, $scope, $stateParams, $state) {
	$scope.category = $stateParams.category;
	$scope.movie = $stateParams.movie;

	$scope.goBack = function() {
		$state.go('app.home-tabs.home-category-' + $scope.category);
	}
});

app.controller('infoController', function($ionicHistory, $scope, $stateParams, $state) {
	$scope.category = $stateParams.category;
	$scope.movie = $stateParams.movie;

	$scope.goBack = function() {
		$state.go('app.home-tabs.home-category-' + $scope.category);
	}
});
