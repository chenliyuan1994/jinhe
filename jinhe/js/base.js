(function(window){
    var product = function () {
        var dw = window.document.documentElement.clientWidth;
        var font = dw / 10 > 54 ? 54 : dw/10; 
        font += 'px';
        // 1rem = 10vw; width*10%
        window.document.documentElement.style.fontSize = font;
    }
    if( window.document.readyState === "complete") {
        product();
    } else {
    window.document.addEventListener( "DOMContentLoaded", function(){
        product();
        },false);
    }

    window.addEventListener('resize' , function(e){
            product();
        },false);
    })(window);



/*=============== 轮播图 ===================*/
        var container=document.getElementById('container');
        var list=document.getElementById('list');
        var imgs=list.children;
        var buttons = document.getElementById('buttons');
        var spans=buttons.children;
        var num=0;
        //图片切换函数
        function changeimg(obj,num){
            for(var i=0;i<obj.length;i++){
                obj[i].style.display='none';
            }
            obj[num].style.display='block';
            for(var i=0;i<spans.length;i++){
                spans[i].style.background='#fff';
            }
            spans[num].style.background='orange';
        }
        //自动轮播
        function autoplay(){
            num+=1;
            if(num>=imgs.length){
                num=0;
            }
            changeimg(imgs,num);
        }
        var clock=setInterval(autoplay,2000);
        // 鼠标移入的时候轮播暂停
        container.onmouseover=function(){
            clearInterval(clock);
        }
        // 鼠标移出时继续轮播
        container.onmouseout=function(){
            clearInterval(clock);
            clock=setInterval(autoplay,2000);
        }
