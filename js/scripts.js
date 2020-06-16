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

$("h1").hover(function() {
	$(this).fadeOut(1000);
});
$("h2").click(function() {
	$("h1").fadeIn(2000);
});

});
