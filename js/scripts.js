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

$(window).scroll(function() {

	if($(window).scrollTop() > 15) {
		$("nav .container").addClass("nav-shadow");
	}
	else {
		$("nav .container").removeClass("nav-shadow");
	}
});

});
