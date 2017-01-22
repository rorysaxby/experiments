(function(){
	'use strict';

	var exampleCarousel = new rslib.carousel({
		containerId: 'rsCarousel',
		viewTarget: 'li',
		activeClass: 'active',
		nextClass: 'right',
		prevClass: 'left',
		startAt: 1,
		autoRotate: true,
		rotateTime: 3000
	});


	/*var profNotif = new rtCarousel();

	profNotif.opts = {
		container: '.prof-notif',
		items: '.notif-item',
		animation: 'spin',
		interactStop: true,
		timeDelay: 6
	};*/

	/*var mainBanner = new rtCarousel({
		container: 'carousel',
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
	});*/

	// var calc = {};

	// calc.answer = 3;

	// calc.runCount = 0;
	// calc.num1 = 0;
	// calc.num2 = 1;
	// calc.num3 = 2;
	// calc.decimal = 20;

	// calc.setCalc = function(){
	// 	calc.runCount++;
	// 	calc.num1 = calc.num1 + 2;
	// 	calc.num2 = calc.num2 + 2;
	// 	calc.num3 = calc.num3 + 2;

	// 	if(calc.runCount % 2 === 0){
	// 		calc.runNegCalc();
	// 	} else{
	// 		calc.runPosCalc();
	// 	};
	// };

	// calc.runPosCalc = function(){
	// 	var pi = 4 / (calc.num1 * calc.num2 * calc.num3);
	// 	calc.answer = calc.answer + pi;
	// 	console.log(calc.answer.toFixed(calc.decimal));
	// };

	// calc.runNegCalc = function(){
	// 	var pi = 4 / (calc.num1 * calc.num2 * calc.num3);
	// 	calc.answer = calc.answer - pi;
	// 	console.log(calc.answer.toFixed(calc.decimal));
	// };

	// calc.init = function(){
	// 	setInterval(function(){
	// 		calc.setCalc();
	// 	},1000);
	// };

	//calc.init();

})();