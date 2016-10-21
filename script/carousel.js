var rtCarousel = function (opts){
	

	this.init = function (){
		this.opts = opts;
		console.log(this);
	}();
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