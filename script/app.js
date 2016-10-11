(function () {
    'use strict';
    angular.module('app',[

    	'places.module',


    	/***********************
		- Global
		************************/

		// Directives


		// Services

		'multiSelect.service'

		// Factories


		// Filters



    ]);
})();



if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(function(reg) {
        console.log('Successfully registered service worker', reg);
    }).catch(function(err) {
        console.warn('Error whilst registering service worker', err);
    });
}
