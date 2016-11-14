define(function(require, exports, module){
	var Index = {
		init:function(){
            // var slide=require("../slide.html");
            var html=require("../home.html");
            var _html=_.template(html)
			$.ajax({
				type:'GET',
				url:'json/choiceness.json',
				dataType:'json',
				success:function(data){
					$('.choiceness-main').html(
						_html({a:data})						 
					)
				}
			});
			// $(".showglobal").html();
			// if( $(document).scrollTop() >= 127 ){
   //              $('.main-nav').removeClass('rel').addClass('fix');
   //          }else{
   //              $('.main-nav').removeClass('fix').addClass('rel');
   //          }
        //轮播
		var index = 0;
		function start_move(){
            $('.slide-bg>img').eq(index).fadeIn(800).siblings().fadeOut(800);
            index++;
            if(index==$('.slide-bg>img').length){
            	index = 0;
            }
		}
		var $timer = setInterval(start_move,3000);
        //fixshow
        $('.right-fixed li').on('mouseenter',function(){
        	 $('.right-fixed li .hover').eq($(this).index()).fadeIn(500);
        });
        $('.right-fixed li').on('mouseleave',function(){
        	 $('.right-fixed li .hover').eq($(this).index()).fadeOut(500);
        })


          
		},
	}


	module.exports = Index;
})