define(function(require, exports, module){return function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div class="showImg">';for(var i=0;i<imgs.length;i++){;__p += '<a href="" title="" class="slideImg"><img src="' +((__t = (imgs[i].imgsrc)) == null ? '' : __t) +'" alt=""></a>';};__p += '<div class="slidePointer">';for(var i=0;i<imgs.length;i++){;if(i==imgs.length-1){;__p += '<span class="active"></span>';}else{;__p += '<span></span>';};};__p += '</div><span class="pointer pointerLeft"> < </span><span class="pointer pointerRight"> > </span></div>';}return __p}});