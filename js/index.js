$(document).ready(function() {

	$('#first').css('opacity', '0.0');;
	$('#second').css('opacity', '0.0');;
	$('.smallQuote').css('opacity', '0.0');;

	$('#first').delay(500).fadeTo(2000, 1);
	$('#second').delay(2000).fadeTo(2000, 1);
	$('.smallQuote').delay(3500).fadeTo(2000, 0.5);
});
