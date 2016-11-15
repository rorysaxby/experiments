(function(){
	'use strict';

	
	/*var profNotif = new rtCarousel();

	profNotif.opts = {
		container: '.prof-notif',
		items: '.notif-item',
		animation: 'spin',
		interactStop: true,
		timeDelay: 6
	};*/

	var mainBanner = new rtCarousel({
		container: 'carousel-wrap',
		items: 'carousel-item',
		activeClass: 'active',
		nextClass:'next',
		nextLeft:'left',
		nextRight:'right',
		animation: 'scoll',
		hoverPauseTime: 0,
		timeDelay: 8,
		activateItems: 1,
		navControl: true
	});

})();