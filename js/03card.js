/*
* @Author: admin
* @Date:   2018-09-22 18:22:33
* @Last Modified by:   admin
* @Last Modified time: 2018-09-24 18:42:25
*/
$(function(){
	//搜索框聚焦
    $('.search').focus(function(event) {
        $('header .center').css('border-color', 'red');
    });
    $('.search').blur(function(event) {
         $('header .center').css('border-color', '');
    })

    //导航栏下拉菜单
    $('nav .shopcar,.wish,.account,.kind,.logo li,.free').hover(function() {
        $(this).css('background-color', 'rgba(10,5,5,0.45)');
    }, function() {
        $(this).css('background-color', '');
    });

    $('nav .free').hover(function() {
        $('nav .free ul').stop().show()
        $(this).css('border-color', '#eee')
    }, function() {
        $('nav .free ul').stop().hide()
        $(this).css('border-color', 'transparent')
    });

    $('nav .account ul li,.wish ul li').hover(function() {
        $(this).css({'background-color': 'rgba(10,5,5,0.8)','border-radius': '10px'});
    }, function() {
        $(this).css({'background-color': '','border-radius': ''});
    });

    $('nav .kind').hover(function() {
        $(this).css('border-radius', '10px 0px 0px 10px');
    }, function() {
         $(this).css('border-radius', '');
    });
     $('nav .wish').hover(function() {
        $(this).css('border-radius', '0px 10px 10px 0px');
    }, function() {
         $(this).css('border-radius', '');
    });

     //轮播图
     var timer;
     var num=0;
     function go(){
     	timer=setInterval(function(){
     		num++;
     		if(num>4){num=0
     			$('main .m-right .banner .pic').css('left', -num*1500+'px');
     		}
     		if(num==4){
     			$('main .m-right .banner .txt li').eq(num).addClass('current');
     			$('main .m-right .banner .txt li').eq(num).siblings().removeClass('current');
     			$('main .m-right .banner .line li').eq(num).addClass('one');
     			$('main .m-right .banner .line li').eq(num).siblings().removeClass('one');
     		}

     		$('main .m-right .banner .pic').animate({left: -num*1500+'px'}, 800)
            $('main .m-right .banner .txt li').eq(num).addClass('current');
     		$('main .m-right .banner .txt li').eq(num).siblings().removeClass('current');
     		$('main .m-right .banner .line li').eq(num).addClass('one');
     		$('main .m-right .banner .line li').eq(num).siblings().removeClass('one');
     	},2000)
     }
    go();
	  $('main .m-right .banner .txt li').mouseenter(function(event) {
	    $(this).addClass('current').siblings().removeClass('current');
	    num=$(this).index();
	    $('main .m-right .banner .pic').css('left', -num*1500+'px');
	});

    //移入移出
    $('main .m-right .banner').hover(function() {
    	clearInterval(timer)
    	$('.m-right .banner .txt').stop().slideDown();
    }, function() {
    	go();
    	$('.m-right .banner .txt').stop().slideUp();
    });

    $('main .m-right .banner .txt li').mouseenter(function(event) {
    	$(this).addClass('current').siblings().removeClass('current');
    });


    //左右点击
    $('.m-right .banner .left').click(function(event){
    	num++;
    	if(num>4){num=0}
    	$('main .m-right .banner .pic').css('left', -num*1500+'px');
     	$('main .m-right .banner .txt li').eq(num).addClass('current').siblings().removeClass('current');
     	$('main .m-right .banner .line li').eq(num).addClass('one');
     	$('main .m-right .banner .line li').eq(num).siblings().removeClass('one');
    });
    $('.m-right .banner .right').click(function(event){
    	num--;
    	if(num<0){num=4}
    	$('main .m-right .banner .pic').css('left', -num*1500+'px');
    	$('main .m-right .banner .txt li').eq(num).addClass('current').siblings().removeClass('current');
    	$('main .m-right .banner .line li').eq(num).addClass('one');
     	$('main .m-right .banner .line li').eq(num).siblings().removeClass('one');
    });


    //底部轮播
    var a=0;
    $('.content .recommend .hot .left').click(function(event) {
    	a++;
    	if(a>2){
    		a=0
    	}
    	$('.content .recommend .hot ul').css('left', -a*1349+'px');
    });
    $('.content .recommend .hot .right').click(function(event) {
    	a--;
    	if(a<0){
    		a=2
    	}
    	$('.content .recommend .hot ul').css('left', -a*1349+'px');
    });
    var s=0;
    $('.content .recommend .like .left').click(function(event) {
    	s++;
    	if(s>2){s=0}
    	$('.content .recommend .like ul').css('left', -s*1349+'px');
    });
    $('.content .recommend .like .right').click(function(event) {
    	s--;
    	if(s<0){s=2}
    	$('.content .recommend .like ul').css('left', -s*1349+'px');
    });

    //侧面菜单
    $('main .m-left .menu a').hover(function() {
    	$(this).css('color', 'red');
    	$(this).css('font-Size', '16px');
    }, function() {
    	$(this).css('color', '');
    	$(this).css('font-Size', '');

    });

    //底部
    $('footer a').hover(function() {
    	$(this).css('color', '#b12b0a');
    }, function() {
    	$(this).css('color', '');
    });

})