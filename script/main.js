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

	$(function(){ 
		var game = {
			countId:1
		};

		game.setup = function(){
			game.container = $('#game');
			game.view = game.container.find('#game-view')[0];
			game.viewHeight = game.view.offsetHeight;
			game.viewWidth = game.view.offsetWidth;
			game.player = game.container.find('#player')[0];
		};

		game.bindControls = function(){
			document.addEventListener("keydown", game.keypressEvents, false);
			document.addEventListener("mousedown", game.getMousePosition, false);
			/*document.addEventListener("keyup", game.resetEvent, false);*/
		};

		game.keypressEvents = function(e){
			switch(e.keyCode){
				case 38: // arrow up
				case 87: // w
					game.moveUp();
					/*if(game.process[e.keyCode] == null){
						game.process[e.keyCode] = true;
					};*/
				break;
				case 40: // down
				case 83: // s
					game.moveDown();
				break;
				case 37: // left
				case 65: // a
					game.moveLeft();
				break;
				case 39: // right
				case 68: // d
					game.moveRight();
				break;
				case 32: // space
					game.getMousePosition();

				break;
			};
		};

		game.moveUp = function(){
			var distance = 20;
			$(game.player).css("top", (game.player.offsetTop - distance) + "px");
		};
		game.moveDown = function(){
			var distance = 20;
			$(game.player).css("top", (game.player.offsetTop + distance) + "px");
		};
		game.moveLeft = function(){
			var distance = 20;
			$(game.player).css("left", (game.player.offsetLeft - distance) + "px");
		};
		game.moveRight = function(){
			var distance = 20;
			$(game.player).css("left", (game.player.offsetLeft + distance) + "px");
		};

		game.getMousePosition = function(e){
			var xPosition = e.clientX - game.view.offsetLeft,
    			yPosition = e.clientY - game.view.offsetTop;
    			console.log("x: " + xPosition + " y: " + xPosition);
			game.addSnowball();
		};

		game.addSnowball = function(){
			var snowball = document.createElement('div');
			snowball.id = "ball" + game.countId;
			game.countId ++;
			snowball.className = "snowball";
			snowball.setAttribute('style', 'top: ' + game.player.offsetTop + 'px; left: ' + game.player.offsetLeft + 'px;');
			game.view.append(snowball);
			game.animateSnowball(snowball.id);
		};

		game.animateSnowball = function(id){
			var ball = $("#" + id);

		};

		game.checkSnowballPosition = function(){

		};

		/*game.resetEvent = function(e){
			var keycode = (e.keyCode ? e.keyCode : e.which);
     		game.process[keycode] = null;
		};*/

		/*game.characterJump = function(){
			var jumpHeight = 40,
				currentPos = game.player.offsetTop;

			if(!game.process.jump){
				$(game.player).css('top', (game.player.offsetTop - jumpHeight) + "px");
				game.process.jump = true;
				setTimeout(function(){
					$(game.player).css('top', currentPos + "px");
				}, 200, setTimeout(function(){
					game.process.jump = false;
				},300));
			};
		};*/

		game.init = function(){
			game.setup();
			game.bindControls();
		}();
	});
	



})();