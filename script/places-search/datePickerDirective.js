(function(){
	/*
		** @name date picker
		** @description date picker directive, using jquery datepicker ui
	*/

	angular.module('datepicker.directive', []);
		.directive('datepicker', datepicker);

	function datepicker (){
		
		var directive = {
			restrict: EA,
			scope:{
				startDates:'=',
				endDates:'='
			},
			link: link,
			controller:dateController,
			controllerAs: 'vm',
			bindToController: true
		};

		return directive;

		function link (scope, ele, attrs, ctrl){

		};
	};

	dateController.$inject['$scope', 'dateCompareService', 'dateConvertService'];

	function dateController($scope, dateCompareService, dateConvertService){

	};

})();