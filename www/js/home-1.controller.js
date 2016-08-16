(function() {
	'use strict';

	angular
		.module('starter')
		.controller('Home1Controller', Home1Controller);

	Home1Controller.$inject = ['$scope', '$ionicModal'];

	/* @ngInject */
	function Home1Controller($scope, $ionicModal) {

		var vm = angular.extend(this, {
			modal1: null,
			modal2: null,
			modal3: null,
			openModal1: openModal1,
			openModal2: openModal2,
			openModal3: openModal3,
			closeModal1: closeModal1,
			closeModal2: closeModal2,
			closeModal3: closeModal3,
			backModal3: backModal3

		});

		//*********************************************

		$ionicModal.fromTemplateUrl('templates/modal-1.html', {
			scope: $scope,
			animation: 'slide-in-right'
		}).then(function(modal) {
			vm.modal1 = modal;
		})

		$ionicModal.fromTemplateUrl('templates/modal-2.html', {
			scope: $scope,
			animation: 'slide-in-right'
		}).then(function(modal) {
			vm.modal2 = modal;
		})

		$ionicModal.fromTemplateUrl('templates/modal-3.html', {
			scope: $scope,
			animation: 'slide-in-right'
		}).then(function(modal) {
			vm.modal3 = modal;
		})

		function openModal1() {
			vm.modal1.show()
		}

		function closeModal1() {
			vm.modal1.hide()
		}

		function openModal2() {
			vm.modal2.show()
		}

		function closeModal2() {
			vm.modal2.hide()
		}

		function openModal3() {
			vm.modal3.show()
		}

		function backModal3() {
			vm.modal3.hide()
		}

		function closeModal3() {
			vm.modal1.hide()
			vm.modal2.hide()
			vm.modal3.hide()
		}
	}
})();