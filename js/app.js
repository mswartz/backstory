$(document).ready(function(){

	$('#reverse').on('click', function(){
		reverseItems();
	});

	$('.story-nav').on('click', function(){
		showTimeline();
	});

	$('.article-bdy').on('click', function(){
		expandArticle();
	});

});

function reverseItems(){
	var a = [];
	$('.timeline-update').each(function(){
		a.push(this);
	});
	a = a.reverse();

	for(var i = 0; i<a.length; i++){
		$('.timeline-list').append(a[i]);
		setTimeout(1000);
	}
}

function showTimeline(){
	$('.article-bdy').toggleClass('hidden');
}

function expandArticle(){
	$('.article-bdy').toggleClass('open');
}