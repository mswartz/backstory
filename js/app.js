var i = 0;

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

	$('.timeline-trigger').on('click', function(){
		expandTimeline();
	});

});

function reverseItems(){
	i = 0;
	var a = [];
	$('.timeline-update').each(function(){
		a.push(this);
	});
	a = a.reverse();

	$('.timeline-list').html(null);

	var animation = setInterval(function(){ appendItem(a, animation) }, 50);
}

function appendItem(a, animation){
	if(i < a.length){
		$('.timeline-list').append(a[i]);
		console.log(a[i]);
		i++;
	} else {
		clearInterval(animation);
		i = 0;
	}
}

function showTimeline(){
	$('.article-bdy').toggleClass('hidden');
}

function expandArticle(){
	$('.article-bdy').toggleClass('open');
	$('.article-jump').toggleClass('active');
}

function expandTimeline(){
	$('.timeline-update.truncated').toggleClass('hidden');
}