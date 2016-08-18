(function() {
	'use strict';

	angular
		.module('starter')
		.controller('Modal1Controller', Modal1Controller);

	Modal1Controller.$inject = ['IonicModalNavService'];

	/* @ngInject */
	function Modal1Controller(IonicModalNavService) {

		var vm = angular.extend(this, {
			openModal2: openModal2,
			closeModal1: closeModal1
		});

		//*********************************************

		function closeModal1() {		
			IonicModalNavService.hide('canceled')
		}

		function openModal2() {
			IonicModalNavService.go('modal-2')
		}
	}
})();
