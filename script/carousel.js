var rtHelpers = {};

rtHelpers.removeClass = function(elem, string){
	var classes = elem.className.split(" ");
	for(var i = 0; i < classes.length; i++){
		if(classes[i] == string){
			classes.splice(i, 1);
			break;
		}
	}
	elem.className = classes.join(" ");
};

var rtCarousel = function (opts){

	// Set option defaults. If no option set revert to default setting
	var options = opts || {};
	this.container = options['container'] || 'carousel-wrap';
	this.items = options['items'] || 'carousel-items';
	this.activeClass = options['activeClass'] || 'active';
	this.nextClass = options['next'] || 'next';
	this.nextClassLeft = options['nextClassLeft'] || 'left';
	this.nextClassRight = options['nextClassRight'] || 'right';
	this.hoverPauseTime = options['hoverPauseTime'] || 0;
	this.timeDelay = options['timeDelay'] || 8;
	this.activeItems = options['activeItems'] || 1;
	this.scrollControl = options['scrollControl'] || false;
	this.navControl = options['navControl'] || false;
	this.autoScroll = options['scrollControl'] || false;
	this.currentPosition = options['startPosition'] || 1;

	//identify DOM elements
	this.itemsContainer = document.getElementsByClassName(this.container)[0];
	this.itemList = document.getElementsByClassName(this.items);

	this.init();
};

rtCarousel.prototype.init = function(){

	if(this.scrollControl){
		this.buildControls();
		this.bindControls();
	};
	
	// if(this.navControl){
	// 	this.buildNavCtrl();
	// 	this.bindNavCtrl();
	// };
};

rtCarousel.prototype.bindSwipe = function(){
	this.itemsContainer.addEventListener('touchstart', handle)
};

rtCarousel.prototype.buildControls = function(){
	controls = {};
	controls.next = document.createElement('button');
	controls.next.innerHTML = "next";
	controls.next.className = "next-ctrl";
	controls.previous = document.createElement('button');
	controls.previous.innerHTML = "previous";
	controls.previous.className = "prev-ctrl";

	for(item in controls){
		this.itemsContainer.appendChild(controls[item]);
	};
};

rtCarousel.prototype.bindControls = function(){
	this.nextCtrl = this.itemsContainer.getElementsByClassName('next-ctrl')[0];
	this.prevCtrl = this.itemsContainer.getElementsByClassName('prev-ctrl')[0];

	var that = this;

	this.nextCtrl.addEventListener('click', function() {
		that.setNext();
	});
	this.prevCtrl.addEventListener('click', function() {
		that.setPrevious();
	});
};

rtCarousel.prototype.setNext = function(){
	this.directionClass = this.nextClassRight;
	this.nextPosition = this.currentPosition + 1;
	if (this.nextPosition > this.itemList.length) {
		this.nextPosition = 1;
	};
	this.loadItem();
};

rtCarousel.prototype.setPrevious = function(){
	this.directionClass = this.nextClassLeft;
	this.nextPosition = this.currentPosition - 1;
	if (this.nextPosition === 0) {
		this.nextPosition = this.itemList.length;
	};
	this.loadItem();
};

rtCarousel.prototype.loadItem = function () {
	this.nextPosition = this.nextPosition - 1
	var item = this.itemList[this.nextPosition];
	item.className += " " + this.activeClass + " " + this.nextClass + " " + this.directionClass;
	
	rtHelpers.removeClass(item, this.directionClass);
	// items[this.nextPosition].className += this.nextClass;
	// items[this.nextPosition].className += this.directionClass;
	//item.className.replace(this.directionClass, "").trim();
};

rtCarousel.prototype.completeLoad = function(){
	this.itemList[this.nextPosition].className.replace()

	this.itemList[this.currentPosition].className.length;
};

rtCarousel.prototype.buildNavCtrl = function(){
	var itemsNav = document.createElement('ul');
	itemsNav.className = 'carousel-nav';
	for(var i = 0; i < this.itemList.length; i++){
		var item = document.createElement('li');
		item.innerHTML = '<a href="">' + (i + 1) + '</a>';
		itemsNav.appendChild(item);
	};
	this.itemsContainer.appendChild(itemsNav);
};

rtCarousel.prototype.bindNavCtrl = function(){

};

rtCarousel.prototype.bindHover = function(){
	for(var i = 0; i < this.itemList.length; i++){
		this.itemList[i].onmouseover(this.pauseAnim(this.itemList[i]));
	};
};

rtCarousel.prototype.pauseAnim = function(item){

};


// var rtCarousel = function(){

// 	'use strict'	

// 	//helpers

// 	/*function addClass(newClass){
// 		if((' '+this.className+' ').indexOf(' '+newClass+' ') < 0 ){
// 			this.className += ' ' + newClass;
// 		};
// 	};
// */
// 	function activateItem(){
// 		for(var i = 0; i < opts.itemList.length; i++){
// 			if(i+1 === opts.selectedItem){
// 				$(opts.itemList[i]).addClass(opts.activeClass);
// 			}
// 		}
// 	};

// 	opts.itemList = document.getElementsByClassName(opts.items);
// 	opts.selectedItem = opts.activateItem;

// 	function init(){
// 		activateItem();
// 	};

	
// 	init();
		

// };