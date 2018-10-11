/*
* @Author: admin
* @Date:   2018-10-08 09:49:54
* @Last Modified by:   admin
* @Last Modified time: 2018-10-08 15:06:27
*/
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

     $('.sever ul li').mouseenter(function(event) {
     	$('.sever .s1').stop().eq($(this).index()).show().siblings('.s1').hide()
     });















});