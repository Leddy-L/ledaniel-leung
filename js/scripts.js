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

	if($(window).scrollTop() < 20) {

		$("nav .container").css("box-shadow", 
			"0px 0px 10px rgba(0, 0, 0, " + 
			($(window).scrollTop() * .015) + ")");
	}
});

});
