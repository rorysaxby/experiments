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






rslib.multiCarousel = function(opts){
	this.opts = {};

	// User required
	this.opts.container = $(opts.containerId);
	this.opts.listViewClass = opts.listViewClass;
	// User options
	this.opts.nextCtrl = this.opts.container.find(opts.nextCtrl);
	this.opts.prevCtrl = this.opts.container.find(opts.prevCtrl);
	this.opts.displayNumber = opts.displayNumber || 1;
	this.opts.startAt = opts.startAt || 1;
	this.opts.autoRotate = opts.autoRotate || false;
	this.opts.rotateTime = opts.rotateTime || 5000;
	// Carousel values
	this.opts.listView = this.opts.container.find(this.opts.listViewClass)[0];
	this.opts.listItemsContainer = this.opts.container.find(this.opts.listViewClass).find('ul');
	this.opts.listItems = this.opts.container.find(this.opts.listViewClass).find('li');
	this.opts.itemWidth = this.opts.listItems[0].clientWidth;
	this.opts.currentView = this.opts.startAt;
	this.opts.viewList = this.opts.container.find(this.opts.viewTarget);
	
	// initialise carousel
	this.init();
};

rslib.multiCarousel.prototype.checkOpts = function(){

	return true;
};

rslib.multiCarousel.prototype.setupWidths = function(){
	var width = this.opts.container[0].clientWidth / this.opts.displayNumber;
	for(var i = 0; i < this.opts.listItems.length; i++){
		$(this.opts.listItems[i]).css("width", width);
	};
	//$(this.opts.listItemsContainer[0]).css('width', width * this.opts.listItems.length + 'px');
	this.opts.listItemsContainer[0].style.width = width * this.opts.listItems.length + "px";
	//this.opts.listItemsContainer.css("width", width * this.opts.listItems.length);
};

rslib.multiCarousel.prototype.bindNextPrev = function(){
	var that = this;
	this.opts.nextCtrl.off('click').on('click', function(){
		that.setNextView();
		that.loadView();
	});
	this.opts.prevCtrl.off('click').on('click', function(){
		that.setPrevView();
		that.loadView();
	});
};

rslib.multiCarousel.prototype.setPrevView = function(){
	this.opts.currentView -= 1;
	if(this.opts.currentView == 0){
		this.opts.currentView = Math.round(this.opts.listItems.length / this.opts.displayNumber, 0);
	};
};

rslib.multiCarousel.prototype.setNextView = function(){
	this.opts.currentView += 1;
	if(this.opts.currentView > Math.round(this.opts.listItems.length / this.opts.displayNumber, 0)){
		this.opts.currentView = 1;
	};
};

rslib.multiCarousel.prototype.loadView = function(){
	var translateVal = this.opts.container[0].clientWidth * this.opts.currentView;
	this.opts.listItemsContainer[0].style.transform = 'translateX(-' + translateVal + 'px)';
	//$(this.opts.listItemsContainer[0]).css('transform', 'translateX(-' + translateVal + 'px)');
};

rslib.multiCarousel.prototype.cloneView = function(){
	
};

rslib.multiCarousel.prototype.init = function(){
	if(this.checkOpts()){
		this.setupWidths();
		this.bindNextPrev();
		this.loadView();
	};
};


// Apply transition: transform only when you want to animate, set transition seconds to 0 when no animation is required
// Clone: number per view for first set and last set ie. viewNum = 3 out of 12, clone first 123, clone last 10, 11, 12 and swap the ends;