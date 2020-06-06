function createTippyObject(url,opts){let tippyOptions={allowHTML:true,theme:"light",interactive:true,interactiveBorder:10,delay:100,touch:"none",maxWidth:"none",inlinePositioning:false,placement:"right",};tip=tippy(url,Object.assign({},tippyOptions,{content:'<iframe width="400px" height="300px" src="'+
url.href+
'/preview.html"></iframe>',},opts));console.log(tip);}
$("document").ready(function(){$.each($("#backlinks~ul>li>a"),function(k,v){console.log(k,v);createTippyObject(v,{});});});