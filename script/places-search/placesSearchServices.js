(function () {
    'use strict';
    angular
        .module('places.service', [])
        .service('placesServ', function () {
            return{
                filterSearch: function(item, value){
                    if(value === null || value === ""){
                        return true;
                    } else{

                        if(item.name !== null && item.name.toLowerCase().indexOf(value.toLowerCase()) > -1){
                            return true;
                        };
                        return false;
                    }
                }
            }
        });
})();