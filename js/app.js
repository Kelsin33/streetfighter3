$(document).ready(function(){
	$('.ryu').mouseenter(function(){
		$('.ryu_still').hide();
		$('ryu_cool').hide();
		$('.ryu_ready').show();
	})
	.mouseleave(function(){
		$('.ryu_ready').hide();
		$('.ryu_still').show();
		
	})
	.mousedown(function(){
		playHadouken();
		$('.ryu_ready').hide();
		$('.ryu_throwing').show();
		$('.hadouken').finish().show().animate(
			  {'left': '1020px'},
			  500,
			  function() {
			    $(this).hide();
			    $(this).css('left', '520px');
			  });
		})
	.mouseup(function(){
		$('.ryu_throwing').hide();
		$('.ryu_ready').show();
	})
	//.keydown(function(){
		//if(event.which == 88){
			//$('.ryu_still').hide();
			//$('.ryu_cool').show();
		//}
	//})
});

function playHadouken(){
	$('#hadouken-sound') [0].volume = 0.5;
	$('#hadouken-sound') [0].load();
	$('#hadouken-sound') [0].play();
}