/****** rslib - swipe ******

	Title: Swipe
	Version: 1.0
	Description: Takes a target and applies left and right swipe functionality
	Dependencies: jQuery, rslib
	Author: Rory Saxby
	Notes:

	targetClass - should target the view which you want to detect the swipe
	touchStartFn - is a callback function which returns touch start X and Y values
	touchActiveFn - is a callback function which runs whilst touch is active and returns X axis value difference from where the touch first began
	and the direction of swipe.
	touchEndFn - is a callback function which returns touch end X and Y values

	*** Example ***

	function exampleTouchStart(x, y){
		****** Do stuff when user starts to swipe ********
	};

	function exampleTouchActive(x, direction){
		****** Do stuff whilst user is touching view ********
	};

	function exampleTouchEnd(x, y){
		****** Do stuff when user finishes swipe ********
	};

	var exampleSwipeOne = new rslib.swipe({
		targetClass: 'swipe-view',
		touchStartFn: exampleTouchStart,
		touchActiveFn: exampleTouchActive,
		touchEndFn: exampleTouchEnd
	});

****************************/


rslib.swipe = function(opts){
	this.opts = {};

	this.opts.targetClass = document.getElementsByClassName(opts.targetClass);
	this.opts.touchStartFn = opts.touchStartFn || null;
	this.opts.touchActiveFn = opts.touchActiveFn || null;
	this.opts.touchEndFn = opts.touchEndFn || null;
	this.bindTarget();
};

rslib.swipe.prototype.bindTarget = function(){

	var _ = this;

	_.directionCheck = false,
	_.xActive = false;

	this.opts.targetClass[0].addEventListener('touchstart', function(event) {
		_.touchStartX = event.changedTouches[0].screenX;
		_.touchStartY = event.changedTouches[0].screenY;
		_.opts.touchStartFn(_.touchStartX, _.touchStartY);

	}, false);

	this.opts.targetClass[0].addEventListener('touchmove', function(event) {
	    _.touchPosX = event.changedTouches[0].screenX;
	    _.touchPosY = event.changedTouches[0].screenY;
	    _.xDist = _.touchStartX - _.touchPosX,
		_.yDist = _.touchStartY - _.touchPosY;

	    _.touchDirection();
	    
	}, false);

	this.opts.targetClass[0].addEventListener('touchend', function(event) {
	    _.touchEndX = event.changedTouches[0].screenX;
	    _.touchEndY = event.changedTouches[0].screenY;
	    _.directionCheck = false,
		_.xActive = false;

		_.opts.touchEndFn(_.touchEndX, _.touchEndY);
	}, false);
};

rslib.swipe.prototype.touchDirection = function(){
	if (!this.directionCheck) {
    	this.directionCheck = true;
    	this.compareDist();
    };

    if(this.xActive && this.directionCheck) {
    	this.opts.touchActiveFn(this.xDist, this.swipeDirection);
    };
};

rslib.swipe.prototype.compareDist = function(){
	var x = Math.abs(this.xDist),
		y = Math.abs(this.yDist);

	if(x > y){
		this.xActive = true;
	};

	if (this.xDist > 0){
		this.swipeDirection = 'left';
	} else{
		this.swipeDirection = 'right';
	};
};
