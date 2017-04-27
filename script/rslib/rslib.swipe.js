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
	this.opts.yPixelRestrict = opts.yPixelRestrict || 50;
	this.opts.leftFn = opts.leftFn;
	this.opts.rightFn = opts.rightFn;
	this.bindTargetTouches();
};

rslib.swipe.prototype.bindTargetTouches = function(){

	var _ = this;

	_.directionCheck = false,
	_.xActive = false;

	this.opts.target[0].addEventListener('touchstart', function(event) {
		_.touchStartX = event.changedTouches[0].screenX;
		_.touchStartY = event.changedTouches[0].screenY;
	}, false);

	this.opts.target[0].addEventListener('touchmove', function(event) {
	    _.touchPosX = event.changedTouches[0].screenX;
	    _.touchPosY = event.changedTouches[0].screenY;
	    _.xDist = _.touchStartX - _.touchPosX,
		_.yDist = _.touchStartY - _.touchPosY;

	    _.touchDirection();
	    
	}, false);

	this.opts.target[0].addEventListener('touchend', function(event) {
	    _.touchEndX = event.changedTouches[0].screenX;
	    _.touchEndY = event.changedTouches[0].screenY;
	    _.directionCheck = false,
		_.xActive = false;
	}, false);
};

rslib.swipe.prototype.touchDirection = function(){
	if (!this.directionCheck) {
    	this.directionCheck = true;
    	this.compareDist();
    };

    if(this.xActive && this.directionCheck) {
    	console.log(this.swipeDirection + ": " + this.xDist);
    };
};

rslib.swipe.prototype.compareDist = function(){
	var x = this.xDist,
		y = this.yDist;
		
	if(x < 0){
		x = Math.abs(x);
	};

	if(y < 0){
		y = Math.abs(y);
	};

	if (this.xDist > 0){
		if(x > y){
			this.xActive = true;
			this.swipeDirection = 'left';
		};
	} else{
		if(x > y){
			this.xActive = true;
			this.swipeDirection = 'right';
		};
	};
};
