var i = 0;

jQuery(document).ready(function(){
	$('#reverse').on('click', function(){
		reverseItems();
	});

	$('#menu-trigger').on('click', function(){
		$('.menu-drawer').toggleClass('active');
	});

	$('.story-header').on('click', function(){
		$('.story-header-panel').toggleClass('active');
	});

	$('.timeline-update').swipe({
	  swipeLeft:function(event, direction, distance, duration, fingerCount) {
	    $(this).find('.article-overlay').toggleClass('active');
	  },
  	  swipeRight:function(event, direction, distance, duration, fingerCount) {
	    $(this).find('.article-overlay').toggleClass('active');
	  },
	  tap:function(){
	  	if($(this).hasClass('open')){
			$(this).removeClass('open');
		} else {
	  		$('.timeline-update').removeClass('open');
			$(this).addClass('open');
		}
	  },
	  doubleTap:function(){
	    $(this).find('.article-overlay').toggleClass('active');
	  }
	});

	$('.menu-drawer').swipe({
	  swipeLeft:function(event, direction, distance, duration, fingerCount) {
	    $(this).toggleClass('active');
	  },
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

function expandUpdate(e){
	$('.timeline-update').removeClass('open');
	$(e).toggleClass('open');
}
