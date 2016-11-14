define(function(require,exports,module){
	var Register = {
		register: function(){
			//选中去掉记住我
			$('.register-main .res .remeber').on('click',function(){
				$(this).toggleClass('remebers');
			});
			//手机号码验证
			$(".telinput").on("blur",function(){
				var $val = $(this).val();
				if( !(/^(1[^012][0-9]{9})$/).test($val) && ($val != "") ){
					$(".telNum").show();
					$(this).focus();
				}else{
					$(".telNum").hide();
				}
			});
			//密码验证
			$(".passwordinput").on("blur",function(){
				var $val = $(this).val();
				if( !($val.length >=6 && $val.length<=20) && ($val != "") ){
					$(".password").show();
					$(this).focus();
				}else{
					$(".password").hide();
				}
			});
			//随机验证码
			//验证码图片的照片数组
			var arrImgUrl = [
			    "url(images/captcha1.png)",
			    "url(images/captcha2.png)",
			    "url(images/captcha3.png)",
			    "url(images/captcha4.png)",
			    "url(images/captcha5.png)",
			    "url(images/captcha6.png)",
			    "url(images/captcha7.png)",
			    "url(images/captcha8.png)",
			    "url(images/captcha9.png)",
			    "url(images/captcha10.pn)g"
			];
			//定义一个全局对象来传递随机参数
			var a = 0;
			//生成验证码
			$(".numinput").on("blur",function(){
				var arrNum = ['fdxmh','62dfa','knccr','k666p','dw265','rwm2r','g55b4','2mx5h','4y3p6','7cawa'];
				var numCode = arrNum[a];
				var $val = $(this).val();
				if( !($val == numCode) && ($val != "") ){
					$(".seccode").show();
					$(this).focus();
				}else{
					$(".seccode").hide();
				}
			});
			//点击生成验证码图片
			$(".suiji img").on("click",function(){
				var randomNum = Math.floor(Math.random()*10);
				$(".suijibg").css("background-image",arrImgUrl[randomNum]);
				a = randomNum;
			});

		}
	}
	module.exports = Register;
})