(function () {
    'use strict';

    angular.module('placesSearch.controller', [])
    	.controller('placesSearch', placesSearch);

        placesSearch.$inject = ['$scope', 'placesFactory', 'placesOpts', 'placesServ', 'multiSelect'];

        function placesSearch($scope, placesFactory, placesOpts, placesServ, multiSelect){

            /************************************
            - controller config
            *************************************/

            //Notes: 'vm' - View model 

            var vm = this;

            /************************************
            - Places
            *************************************/

            vm.prepData = function(){
                vm.places = placesFactory;
                $scope.placesDisplay = angular.copy(vm.places);
                vm.placesOpts = placesOpts;
            };

            vm.searchFilter = function(item){
                return placesServ.filterSearch(item, vm.placesOpts.filters.search);
            };

            vm.selectPlaces = function(e, item){
                multiSelect.smartMulti(e, item, $scope.placesDisplay, "active");
            };

            vm.init = function (){
                vm.prepData();
            }();

    	};
})();