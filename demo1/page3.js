var n = 0;
var Xclock;
function myXiangmu(){
	$('.xiangmu>li').fadeOut(1000);
	$('.xiangmu>li').eq(n).fadeIn(1000);
	$('.spans span').css({
		'border':'1px solid rgba(255,255,255,.5)',
		'background':'rgba(0,0,0,.8)'
	});
	$('.spans span').eq(n).css({
		'border':'1px solid rgba(0,0,0,.5)',
		'background':'rgba(255,255,255,.8)'
	})
}
function autoPlay(){
	n++;
	if (n>=4) {
		n=0;
	}
	myXiangmu();
}
Xclock = setInterval(autoPlay,3000);
$('.xiangmu>li').mouseover(function(){
	clearInterval(Xclock);
}).mouseout(function(){
	Xclock = setInterval(autoPlay,3000);
});
$('.spans span').mouseover(function(){
	clearInterval(Xclock);
}).mouseout(function(){
	Xclock = setInterval(autoPlay,3000);
});
$('.spans span').click(function(){
	n = $(this).index();
	myXiangmu();
})
$('.xiangmuImg .img1').mouseover(function(){
	$(this).css('z-index','999')
}).mouseout(function(){
	$(this).css('z-index','99');
})