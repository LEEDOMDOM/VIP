define(function(require, exports, module){
	var Suitdress=require("../suitdress.html");
    var _suitdress=_.template(Suitdress);
	var suit = {
		init : function(){
			$.ajax({
				url:'json/suitdress.json',
				success:function(data){
					$('#suitdress').html(
						_suitdress({b:data})						 
					)
				}
			});
		}
	}
	module.exports = suit;
});