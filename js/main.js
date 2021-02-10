

//DETECTAR NAVEGADORES
navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem,
    M= ua.match(/(vivaldi|opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge?)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera').replace('Edg ', 'Edge ');            
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();

var browser = navigator.sayswho.split(" ");

if(browser[0] == 'Chrome')
{
	document.addEventListener('DOMContentLoaded', function() {
  	var element = document.getElementById("3dicon");
  	element.className = element.className.replace(/\bfa-codepen\b/g, "");
	});
	
	//alert(browser[0]);
}
else{
	document.addEventListener('DOMContentLoaded', function() {
  	var element = document.getElementById("3dicon");
  	element.className = element.className.replace(/\bfa-battle-net\b/g, "");
  	element.className = element.className.replace(/\bfa-spin\b/g, "");
	});
	//alert('no es chrome');
}



//ESCONDER ENCABEZADO
$(document).ready(function(){
	$(window).scroll(function(){
		if($(document).scrollTop() > 50){
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
