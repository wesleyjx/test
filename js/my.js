/*
* @Author: China user
* @Date:   2018-08-31 21:22:11
* @Last Modified by:   admin
* @Last Modified time: 2018-09-24 19:12:33
*/

//侧导航
$(function(){
    //侧导航栏
    $('.topmenu').hover(function() {
        $('.submenu').eq($(this).index()).stop().show()
        $(this).addClass('side').siblings().removeClass('side');
        $('.topmenu>a').eq($(this).index()).css('color', '#333');
    }, function() {
        $('.submenu').eq($(this).index()).stop().hide()
        $(this).removeClass('side');
         $('.topmenu>a').css('color', '#fff');
    });
    $('.submenu ul li a').hover(function() {
        $(this).css('color', 'red');
        $(this).css('font-Size', '20px');
    }, function() {
         $(this).css('color', '#333');
         $(this).css('font-Size', '14px');
    });
    
    //搜索框聚焦
  $('.search').focus(function(event) {
         $('header .center').css('border-color', 'red');
    });
    $('.search').blur(function(event) {
        $('header .center').css('border-color', '');
    })

    $('.ms .title a').click(function(event) {
        $(this).addClass('one').siblings().removeClass('one');
    });

    $('.ms .cho01').hover(function() {
        $('.ms .cho01 ul').stop().slideDown()
    }, function() {
        $('.ms .cho01 ul').stop().slideUp()
    });


    $('.main .content img').hover(function() {
        $(this).eq($(this).index()).css('opacity', '1');
        $(this).eq($(this).index()).parent().siblings().children('img').css('opacity', '0.5');
    }, function() {
        $(this).css('opacity', '0.5');
    });


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
        $(this).css({
            'background-color': 'rgba(10,5,5,0.8)',
            'border-radius': '10px'
        });
    }, function() {
        $(this).css({
            'background-color': '',
            'border-radius': ''
        });
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

    //时时秒杀
    var a=0
    $('#next').click(function(event) {
        a++;
        if(a>2){a=0;}
        $('.ms .sp').css('left', -a*1080+'px');
        $('#fh').show();
    });
     $('#fh').click(function(event) {
        a--;
        if(a<0){a=2;}
        $('.ms .sp').css('left', -a*1080+'px');
    });

    //轮播图
    var timer;
    var num=0;
    function go(){
        timer=setInterval(function(){
            num++;
            if(num>7){
                num=0;
                $('#pic').css('left', -num*1250+'px');
                num=1;
            }
            if(num==7){
                $('ol li').eq(0).addClass('current')
                $('ol li').eq(0).siblings().removeClass('current')
                $('.banner .line li').eq(num).addClass('one')
                $('.banner .line li').eq(num).siblings().removeClass('one')
            }
            $('#pic').animate({'left': -num*1250+'px'}, 1000)
            $('ol li').eq(num).addClass('current')
            $('ol li').eq(num).siblings().removeClass('current')
            $('.banner .line li').eq(num).addClass('one')
            $('.banner .line li').eq(num).siblings().removeClass('one')

        },1500)
    }go();
    
    $('#banner').mouseenter(function(event) {
        clearInterval(timer);
        $('ol').stop().slideDown(500);
    });
    $('#banner').mouseleave(function(event) {
        go();
        $('ol').stop().slideUp(500);
    });

    $('ol li').mouseenter(function(event) {
    $(this).addClass('current').siblings().removeClass('current');
    $('.banner .line li').eq(num).addClass('one')
    $('.banner .line li').eq(num).siblings().removeClass('one')
    num=$(this).index();
    $('#pic').css('left', -num*1250+'px');
});
    //左右点击  
        $('#left').click(function(event) {
        num++;
        if(num>7){num=0}
        $('#pic').css('left', -num*1250+'px');
        $('ol li').eq(num).addClass('current');
        $('ol li').eq(num).siblings().removeClass('current');
        $('.banner .line li').eq(num).addClass('one')
        $('.banner .line li').eq(num).siblings().removeClass('one')
    });
    $('#right').click(function(event) {
        num--;
        if(num<0){num=7}
        $('#pic').css('left', -num*1250+'px');
        $('ol li').eq(num).addClass('current');
        $('ol li').eq(num).siblings().removeClass('current');
        $('.banner .line li').eq(num).addClass('one')
        $('.banner .line li').eq(num).siblings().removeClass('one')
    });
    $('ol li').mouseenter(function(event) {
        $(this).addClass('current').siblings().removeClass('current');
    });


        //底部
    $('footer a').hover(function() {
        $(this).css('color', '#b12b0a');
    }, function() {
        $(this).css('color', '');
    });


});
    