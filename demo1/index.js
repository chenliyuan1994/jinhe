window.addEventListener('load',function(){
initial();
},false);
window.addEventListener('resize',function(){
initial();
},false);
function initial(){	
	var blueBlock = document.getElementById('header-blue-block');
	var headerNavA = document.getElementsByClassName('header-nav-a');
	var wrap = document.getElementsByClassName('wrap')[0];
	var uls = document.getElementsByClassName('uls')[0];
	var lis = document.getElementsByClassName('page');
	var btns = document.getElementsByClassName('btn');
	var imgBanner = document.getElementsByClassName('banner');
	var w = document.documentElement.clientWidth;
	var h = document.documentElement.clientHeight;
	var num  =0;
	var mT = parseInt(uls.style.marginTop);
	var t = true;
	function getWidth(num){
		var width = parseInt(getStyle(headerNavA[num],'width'));
		for (var i = 0; i < headerNavA.length; i++) {
			headerNavA[i].style.color = 'white';
		}
		headerNavA[num].style.color = '#1fc8d3';
		headerNavA[4].style.color = 'white';
		blueBlock.style.width = width+'px';
		uls.style.marginTop = -h*num+'px';		
		switch (num){
			case 0:
			blueBlock.style.left = 0+'px';
			break;
			case 1:
			blueBlock.style.left = 54+'px';
			break;
			case 2:
			blueBlock.style.left = 126+'px';
			var act = $('.plans .acticle')
			act.eq(0).delay(1000).slideDown(500,function test(){
					act.eq(1).slideDown(500,function(){
						act.eq(2).slideDown(500,function(){
							act.eq(3).slideDown(500);
						})
					})
				});
			break;
			case 3:
			blueBlock.style.left = 214+'px';
			break;
		}
	}
	function ifNum(){
		for (var i = 0; i < headerNavA.length; i++) {
			headerNavA[i].index = i;
			headerNavA[i].addEventListener('click',function(e){
				var self = this;
				num = self.index; 
				if (num<headerNavA.length-1) {
					e.preventDefault();
				}
				getWidth(num);		
			},false);
		}				
	}
	ifNum();
	if ((navigator.userAgent.toLowerCase().indexOf("firefox")!=-1)){   
        document.addEventListener("DOMMouseScroll",scrollFun,false);        
    }  
    else if (document.addEventListener) {  
        document.addEventListener("mousewheel",scrollFun,false);  
    }  
    else if (document.attachEvent) {  
        document.attachEvent("onmousewheel",scrollFun);   
    }  
    else{  
        document.onmousewheel = scrollFun;  
    }  
    var startTime = 0;
    var endTime = 0 ;
	function scrollFun(e){
		startTime = new Date().getTime();
		var delta = event.detail || (-event.wheelDelta); 
		if ((endTime - startTime) < -1000) {	
			if (e.wheelDelta<0) {//向下滑
				mT = parseInt(uls.style.marginTop);
				if  (mT===-h*(lis.length-2)){
					return false;
				}
				num++;
				uls.style.marginTop = -h*num+'px';
				getWidth(num);
			}
			if (e.wheelDelta>0) {
				mT = parseInt(uls.style.marginTop);
				if (mT===0) {
					return false;
				}
				num--;
				uls.style.marginTop = -h *num+'px';
				getWidth(num);
			}
			endTime = new Date().getTime(); 
		}
		else{
			 event.preventDefault();
		}
	}
}
//获取内存中的样式
function getStyle(obj, attr){
	var cs = obj.currentStyle || window.getComputedStyle(obj, null);
	return cs[attr];
}
function getTop(clsName){ 
        var obj = document.getElementsByClassName(clsName)[0];
        return obj.getBoundingClientRect().top;
    }