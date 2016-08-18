(function() {
	'use strict';

	angular
		.module('starter')
		.controller('Home1Controller', Home1Controller);

	Home1Controller.$inject = ['IonicModalNavService'];

	/* @ngInject */
	function Home1Controller(IonicModalNavService) {

		var vm = angular.extend(this, {
			openModal1: openModal1
		});

		(function initialize(){
			IonicModalNavService.onClose(function(value){
				alert('Transaction: ' + value);
			});
		})();

		//*********************************************

		function openModal1() {
			IonicModalNavService.show('modal-1')
		}
	}
})();
