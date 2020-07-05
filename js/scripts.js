/*-----------------------------------------------------------------------------
index.html Screen Scripts

version:    1.0
date:       06/15/2020
author:     LeDaniel Leung
email:      ledaniel.leung@gmail.com
website:    asianu.github.io
<script src="js/scripts.js"></scripts>
-----------------------------------------------------------------------------*/

$(document).ready(function() {

	//	resets page scroll to top of page on page refresh
	$(window).on('beforeunload', function() {
		$(window).scrollTop(0);
	});

	//	animates navbar shadow depending on scroll height of window
	$(window).scroll(function() {

		if($(window).scrollTop() < 60) {

			$("nav .container").css("box-shadow", 
				"0px 0px 10px rgba(0, 0, 0, " + 
				($(window).scrollTop() * .005) + ")");
		}
		else {
			$("nav .container").css("box-shadow",
				"0px 0px 10px rgba(0, 0, 0, .3)");
		}
	});

	//	default shadow value
	if($(window).scrollTop() < 60) {

		$("nav .container").css("box-shadow", 
			"0px 0px 10px rgba(0, 0, 0, " + 
			($(window).scrollTop() * .005) + ")");
	}
	else {
		$("nav .container").css("box-shadow",
			"0px 0px 10px rgba(0, 0, 0, .3)");
	}


	//	change colors of footer elements on hover
	$(".contact-circle").mouseenter(function() {
		var tmp =  "'" + $(this).attr('href') + "'";
		$(".contact-circle[href!=" + tmp + "]").
			css("background-color", "#ADADAD");
	});

	$(".contact-circle").mouseleave(function() {
		$(".contact-circle").css("background-color", "#5C5C5C");
	});
});
