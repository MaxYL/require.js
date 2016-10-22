requirejs.config({
	baseUrl:'js/libs',
	paths:{
		'jquery':'jquery/jquery-3.1.0.min',
		'wocao':'wocao',
	}
})
requirejs(['jquery','wocao'],function($,wocao){
	$('body').css('background','blue');
	console.log(wocao.isEqual(1,1));//true
	console.log(wocao.plus(1,1));//2
})