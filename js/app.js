$(document).ready(function(){

	$('#reverse').on('click', function(){
		reverseItems();
	});

	$('.story-nav').on('click', function(){
		showTimeline();
	});

});

function reverseItems(){
	var a = [];
	$('.timeline-update').each(function(){
		a.push(this);
	});
	a = a.reverse();
	
	$('.timeline-list').html(a);	
}

function showTimeline(){
	$('.timeline-bdy').toggleClass('active');
}