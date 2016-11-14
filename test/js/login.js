define(function(require,exports,module){
	var Util = {
		login: function(){
			$('.login-main .res .left .remeber').on('click',function(){
				$(this).toggleClass('remebers');
			});

				//手机号码验证
			$(".logins .input1").on("blur",function(){
				var $val = $(this).val();
				if( !(/^(1[^012][0-9]{9})$/).test($val) && ($val != "") ){
					$(".show1").show();
					$(this).focus();
				}else{
					$(".show1").hide();
				}
			});
			//密码验证
			$(".logins .input2").on("blur",function(){
				var $val = $(this).val();
				if( !($val.length >=6 && $val.length<=20) && ($val != "") ){
					$(".show2").show();
					$(this).focus();
				}else{
					$(".show2").hide();
				}
			});

			// $('.logins .input1').on('blur',function(){
			// 	$(this).css("border","1px solid #f10180");
			// 	$('.logins .show1').addClass('show11');
			// });
			// $('.logins .input1').on('change',function(){
			// 	$(this).css("border","1px solid #999");
			// 	$('.logins .show1').addClass('show1');
			// });

			// $('.logins .input2').on('blur',function(){
			// 	$(this).css("border","1px solid #f10180");
			// 	$('.logins .show2').addClass('show22');
			// });
		}
	}
	module.exports = Util;
})