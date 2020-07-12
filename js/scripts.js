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
	var sidebar_clicked = false;

	/*	The following section of code contains status handlers */

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
	

	/*	The following section of code contains event handlers*/

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

	//	when navbar is clicked
	$(".nav-icon").click(function() {
		$(this).toggleClass("nav-icon-clicked");
		$(".sidebar").toggleClass("show-sidebar");

		sidebar_clicked = !sidebar_clicked;

		//	event handler for when sidebar is opened
		if(sidebar_clicked) {

		}

		//	sidebar handler for when sidebar is closed
		else if(!sidebar_clicked) {

		}
	});

	//	close sidebar if anything outside of it is clicked

	//	close the navbar when certain things are clicked (that's not nav-icon)
	$(".sidebar-item a, .nav-brand a, header, #experience, #contacts").click(
		function() {
			/*
		if(sidebar_clicked) {
			$(".nav-icon").removeClass("nav-icon-clicked");
			$(".sidebar").removeClass("show-sidebar");
			sidebar_clicked = false;
		}
		else {

		}
		*/
	});

	//	change colors of contact elements on hover
	$(".contact-circle").mouseenter(function() {
		var tmp =  "'" + $(this).attr('href') + "'";
		$(".contact-circle[href!=" + tmp + "]").
			css("background-color", "#ADADAD");

		//	set a color if contact circle contents should change color on hover
		//	$(this).children("i").css("color", "white");
	});

	$(".contact-circle").mouseleave(function() {
		$(".contact-circle").css("background-color", "#5C5C5C");
		//	$(this).children("i").css("color", "white");
	});
});

