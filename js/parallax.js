function Parallax() {
	scrollPos = $(this).scrollTop();
    
	$('.parallax').css({
		'background-position' : '50% ' + (-scrollPos/2)+"px"
	});
    
  	$('.t-parallax').css({
		'margin-top': (scrollPos/2)+"px",
		'opacity': 1-(scrollPos/380)
	});
}

$(document).ready(function(){
	$(window).scroll(function() {
		Parallax();
	});
});