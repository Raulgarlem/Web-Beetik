
$(document).ready(function(){
	$(window).scroll(function(){
		if($(document).scrollTop() > 100){
			$('.social').addClass('sticky');
			$('.encabezado').addClass('sticky');
		}
		else{
			$('.social').removeClass('sticky');
			$('.encabezado').removeClass('sticky');
		}
	});
});


$(document).ready(function(){
	var scrolled;
	var lastPos=0;
	var head_ht =$('.encabezado').height();

	$(window).scroll(function(){
		scrolled = true;
	});

	setInterval(function(){
		if(scrolled){
			scr_fun();
			scrolled = false;
		}
	}, 200);

	function scr_fun(){
		var top = $(this).scrollTop();
		var win_height = $(window).height();
		var doc_height = $(document).height();

		if(top > lastPos && top > head_ht){
			$('.encabezado').removeClass('h-down').addClass('h-up');
		}
		else{
			if(top + win_height < doc_height){
				$('.encabezado').removeClass('h-up').addClass('h-down');
			}
		}
		lastPos = top;
	}
});
