// ****** rslib - carousel ******//
// Title: carousel
// Version: 1.0
// Description: First carousel edition which relies on css transitions for the animations.
// Dependencies: jQuery, rslib
// Author: Rory Saxby

// Example

/*$(document).ready(function(){

	var example = new rslib.carousel({
		container:"#HeroCarouselContainer",
		views: ".carousel-views"
	});

	rslib.tabs.init();

});*/

/* <section id="HeroCarouselContainer">
		<div class="hero-carousel-wrapper">
			<div class="hero-carousel-views">
		 		<ul>
		 			<li>
						<!------ markup/content ----->
					</li>
					<li>
						<!------ markup/content ----->
					</li>
					<li>
						<!------ markup/content ----->
					</li>
				</ul>
			</div>
		</div>
</section>*/
(function(){
	
	rslib.carousel = function(opts){

		this.opts = {};

		// user defined
		this.opts.container = $("#" + opts.containerId);
		this.opts.viewTarget = opts.viewTarget;
		this.opts.activeClass = opts.activeClass;
		this.opts.nextClass = opts.nextClass;
		this.opts.prevClass = opts.prevClass;
		this.opts.startAt = (opts.startAt - 1) || 0;
		this.opts.autoRotate = opts.autoRotate || false;
		this.opts.rotateTime = opts.rotateTime || 5000;

		this.opts.currentIndex = this.opts.startAt;
		this.opts.viewList = this.opts.container.find(this.opts.viewTarget);
		
		// initialise carousel
		this.init();
	};

	rslib.carousel.prototype.checkOpts = function(){
		if(this.opts.container == undefined){
			console.log('Please specify option: viewContainer');
			return false;
		} else if(this.opts.viewTarget == undefined){
			console.log('Please specify option: tabsContainer');
			return false;
		} else{
			return true;
		};
	};

	rslib.carousel.prototype.resetViews = function(){
		for(var i = 0; i < this.opts.viewList.length; i++){
			this.opts.viewList[i].className = "";
		};
	};

	rslib.carousel.prototype.setViewActive = function(index){
		$(this.opts.viewList[index]).addClass(this.opts.activeClass);
	};

	rslib.carousel.prototype.setNext = function(index){
		var next = index + 1;
		if(next > this.opts.viewList.length - 1){
			next = 0;
		};
		$(this.opts.viewList[next]).addClass(this.opts.activeClass + " " + this.opts.nextClass);
	};

	rslib.carousel.prototype.setPrev = function(index){
		var prev = index - 1;
		if(prev < 0){
			prev = this.opts.viewList.length - 1;
		};
		$(this.opts.viewList[prev]).addClass(this.opts.activeClass + " " + this.opts.prevClass);
	};

	rslib.carousel.setAutoRotate = function(){
		setInterval(this.selectNext(), this.opts.rotateTime);
	};

	rslib.carousel.setNext = function(){

	};

	rslib.carousel.prototype.init = function(){
		if(this.checkOpts()){
			this.resetViews();
			this.setViewActive(this.opts.startAt);
			this.setNext(this.opts.startAt);
			this.setPrev(this.opts.startAt);
		};
	};

})();