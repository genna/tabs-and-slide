(function() {
	'use strict';

	angular
		.module('starter')
		.controller('Modal2Controller', Modal2Controller);

	Modal2Controller.$inject = ['IonicModalNavService'];

	/* @ngInject */
	function Modal2Controller(IonicModalNavService) {

		var vm = angular.extend(this, {
			openModal3: openModal3,
			backModal2: backModal2
		});

		//*********************************************
		
		function backModal2() {
			IonicModalNavService.goBack()
		}

		function openModal3() {
			IonicModalNavService.go('modal-3')
		}
		
	}
})();