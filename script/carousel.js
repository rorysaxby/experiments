var rtCarousel = function (opts){

	// Set option defaults. If no option set revert to default setting
	var options = opts || {};
	this.container = options['container'] || 'carousel-wrap';
	this.items = options['items'] || 'carousel-items';
	this.activeClass = options['activeClass'] || 'active';
	this.nextClass = options['next'] || 'next';
	this.nextLeft = options['nextLeft'] || 'left';
	this.nextRight = options['nextRight'] || 'right';
	this.hoverPauseTime = options['hoverPauseTime'] || 0;
	this.timeDelay = options['timeDelay'] || 8;
	this.activeItems = options['activeItems'] || 1;
	this.navControl = options['navControl'] || false;
	this.startPosition = options['startPosition'] || 1;

	//identify DOM elements
	this.itemsContainer = document.getElementsByClassName(this.container)[0];
	this.itemList = document.getElementsByClassName(this.items);

	//console.log(this);

	this.init();
};

rtCarousel.prototype.init = function(){
	this.buildControls();
	if(this.navControl){

	};
};

rtCarousel.prototype.buildControls = function(){
	controls = {};
	controls.next = '<button type="button" class="next-btn">Next</button>',
	controls.previous  = '<button type="button" class="prev-btn">Previous</button>';
	console.log(this);
	for(item in controls){
		this.itemsContainer.appendChild(controls[item]);
	};
};

rtCarousel.prototype.addCtrls = function(target, controls){

};

rtCarousel.prototype.buildNavCtrl = function(){
	var itemsNav = '';
	for(var i = 0; i < this.itemList.length; i++){
		itemNav = itemNav + '<li><a href="">' + (i + 1) + '</a></li>';
	}
	console.log(this);
	this.itemsContainer.appendChild('<div class=""><ul>' + itemsNav + '</ul>');

};

rtCarousel.prototype.loadNext = function(){

};

rtCarousel.prototype.loadPrevious = function(){

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