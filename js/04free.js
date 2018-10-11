/*
* @Author: admin
* @Date:   2018-09-22 18:33:36
* @Last Modified by:   admin
* @Last Modified time: 2018-09-24 18:28:42
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


         //底部
    $('footer a').hover(function() {
        $(this).css('color', '#b12b0a');
    }, function() {
        $(this).css('color', '');
    });
})