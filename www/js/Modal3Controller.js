(function() {
	'use strict';

	angular
		.module('starter')
		.controller('Modal3Controller', Modal3Controller);

	Modal3Controller.$inject = ['IonicModalNavService'];

	/* @ngInject */
	function Modal3Controller(IonicModalNavService) {

		var vm = angular.extend(this, {
			closeModal3: closeModal3,
			backModal3: backModal3
		});

		//*********************************************

		function backModal3() {
			IonicModalNavService.goBack()
		}

		function closeModal3() {
			IonicModalNavService.hide()
		}
	}
})();