define(function(require, exports, module){
	var Slide = {
		slide : function(){
             //轮播
			var index = 0;
			// $(".slidePointer span").eq(0).addClass('active');
			function start_move(){
	            $('.slide-bg>img').eq(index).fadeIn(800).siblings().fadeOut(800);
			    $(".slidePointer span").eq(index).addClass('active').siblings().removeClass('active');
	            index++;
	            if(index == $('.slide-bg>img').length){
	            	index = 0;
	            }
			}
			var $timer = setInterval(start_move,3000);
			clearInterval(start_move());
		}
	}
         

	module.exports = Slide;
})