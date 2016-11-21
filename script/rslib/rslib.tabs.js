// ****** rslib ******//
// Title: tabs
// Version: 1.0
// Description: Provides a simple tab set up.
// Dependencies: jQuery, rslib
// Author: Rory Saxby

// Example

/*$(document).ready(function(){

	rslib.tabs({
		viewsContainer: '#rsTabViews',
		tabsContainer: '#rsTabs',
		activeTabClass: 'active',
		hiddenViewClass: 'hidden',
		startAt: 1
	});

	rslib.tabs.init();

});*/

// <section id="rsTabs"></section>
// <section id="rsTabViews">
// 		<div class="view" data-rstab-title="example title 1">
//			<!------ markup/content ----->
//		</div>
// 		<div class="view" data-rstab-title="example title 2">
//			<!------ markup/content ----->
//		</div>
// 		<div class="view" data-rstab-title="example title 3">
//			<!------ markup/content ----->
//		</div>
// </section>

rslib.tabs = function(opts){
	this.opts = {};
	this.opts.viewsContainer = $(opts.viewsContainer);
	this.opts.views = this.opts.viewsContainer.find('> div');
	this.opts.tabsContainer = $(opts.tabsContainer);
	this.opts.activeTabClass = opts.activeTabClass;
	this.opts.hiddenViewClass = opts.hiddenViewClass;
	this.opts.startAt = (opts.startAt - 1) || 0;
};

rslib.tabs.prototype.checkOpts = function(){
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

rslib.tabs.prototype.buildTabs = function(){
	for(var i = 0; i < this.opts.views.length; i++){
		var tab = '<button>' + this.opts.views[i].attributes['data-rstab-title'].value + '</button>';
		this.opts.tabsContainer.append(tab);
	};
};

rslib.tabs.prototype.bindTabs = function(){
	this.opts.tabs = this.opts.tabsContainer.find('button');

	var that = this;

	this.opts.tabs.off('click.tab').on('click.tab', function(){
		that.resetAll();
		that.activateView($(this).index());
	});
};

rslib.tabs.prototype.resetAll = function(){
	for(var i = 0; i < this.opts.tabs.length; i++){
		$(this.opts.tabs[i]).removeClass(this.opts.activeTabClass);
		if(!$(this.opts.views[i]).hasClass(this.opts.hiddenViewClass)){
			$(this.opts.views[i]).addClass(this.opts.hiddenViewClass);
		};
	};
};

rslib.tabs.prototype.activateView = function(index){
	$(this.opts.views[index]).removeClass(this.opts.hiddenViewClass);
	$(this.opts.tabs[index]).addClass(this.opts.activeTabClass);
};

rslib.tabs.prototype.init = function(){
	if(this.checkOpts()){
		this.buildTabs();
		this.bindTabs();
		this.resetAll();
		this.activateView(this.opts.startAt);
	};
};

