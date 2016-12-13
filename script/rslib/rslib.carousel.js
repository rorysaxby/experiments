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
		this.opts.viewsContainer = $(opts.viewsContainer);
		this.opts.views = this.opts.viewsContainer.find('> div');
		this.opts.tabsContainer = $(opts.tabsContainer);
		this.opts.activeTabClass = opts.activeTabClass;
		this.opts.hiddenViewClass = opts.hiddenViewClass;
		this.opts.startAt = (opts.startAt - 1) || 0;
	};

	rslib.carousel.prototype.checkOpts = function(){
		if(this.opts.viewsContainer == undefined){
			console.log('Please specify option: viewContainer');
			return false;
		} else if(this.opts.tabsContainer == undefined){
			console.log('Please specify option: tabsContainer');
			return false;
		} else{
			return true;
		};
	};


	rslib.carousel.prototype.init = function(){
		if(this.checkOpts()){

		};
	};

})();