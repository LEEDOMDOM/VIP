define(function(require, exports, module){
	var slideHtml = require('../slide.html');
	var _slideHtml = _.template( slideHtml );
	var slide = require('../js/slide');

	var choiceness = require('./choiceness');
	var suitdress = require('./suitdress');

	var Homepage = {
		init : function(){
			var that = this;
			that.dealSlide();
			// deal choice html
			choiceness.init();
			// deal suit html
			suitdress.init();
		},
		dealSlide : function(){
			$('#runloop').html( _slideHtml() );
			slide.slide();

			// 侧边fixshow
			$('.right-fixed li').on('mouseenter',function(){
	        	 $('.right-fixed li .hover').eq($(this).index()).fadeIn(500);
	        });
	        $('.right-fixed li').on('mouseleave',function(){
	        	 $('.right-fixed li .hover').eq($(this).index()).fadeOut(500);
	        })

		}
	}


	module.exports = Homepage;
})