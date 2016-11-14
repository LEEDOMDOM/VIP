define(function(require, exports, module){
	var choiceness=require("../choiceness.html");
    var _choiceness=_.template(choiceness);
	var Choiceness = {
		init : function(){
			$.ajax({
				type:'GET',
				url:'json/choiceness.json',
				dataType:'json',
				success:function(data){
					$('#choiceness').html(
						_choiceness({a:data})						 
					)
				}
			});
		},
	}
	module.exports = Choiceness;
})