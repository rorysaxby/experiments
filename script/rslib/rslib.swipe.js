// ****** rslib - swipe ******//
// Title: Swipe
// Version: 1.0
// Description: Takes a target and applies swipe functionality
// Dependencies: jQuery, rslib
// Author: Rory Saxby

// Example

rslib.swipe = function(opts){
	this.opts = {};

	this.opts.target = $(opts.target);
	this.opts.animStyle = opts.style;
	this.opts.leftFn = opts.leftFn;
	this.opts.rightFn = opts.rightFn;

	this.bindTargetTouches();
};

rslib.swipe.prototype.bindTargetTouches = function(){

	this.opts.target[0].addEventListener('touchstart', function(event) {
		this.touchStartX = event.changedTouches[0].screenX;
		this.touchStartY = event.changedTouches[0].screenY;
	}, false);

	this.opts.target[0].addEventListener('touchmove', function(event) {
	    this.touchPosX = event.changedTouches[0].screenX;
	    this.touchPosY = event.changedTouches[0].screenY;
	}, false);

	this.opts.target[0].addEventListener('touchend', function(event) {
	    this.touchEndX = event.changedTouches[0].screenX;
	    this.touchEndY = event.changedTouches[0].screenY;
	}, false);
};

rslib.swipe.prototype.compareTouchEvents = function(){
	
};