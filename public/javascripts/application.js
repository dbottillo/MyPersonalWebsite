// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function(){

  //Calling Local Scroll Function
	/**
	 * Most jQuery.localScroll's settings, actually belong to jQuery.ScrollTo, check it's demo for an example of each option.
	 * @see http://flesler.demos.com/jquery/scrollTo/
	 * You can use EVERY single setting of jQuery.ScrollTo, in the settings hash you send to jQuery.LocalScroll.
	 */
	
	//console.log(window.location.hash);
	switch (window.location.hash) {
		case "#portfolio":
			toWork();
			break;
		default:
			toHome();
			break;
	}
	
	$('#toWork').click(function(){

		toWork();
	});
	
	$('#toHome').click(function(){
		toHome();
	});
	

	
});

function toHome(){
	$.scrollTo('#home', {duration: 700, 
		onAfter:
		function(){
			window.location.hash = "";
		}
	});
}

function toWork(){
	$.scrollTo('#work', {duration: 700, 
		onAfter:
		function(){
			window.location.hash = "portfolio";
		}
	});
}