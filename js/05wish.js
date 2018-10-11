/*
* @Author: admin
* @Date:   2018-09-24 19:24:11
* @Last Modified by:   admin
* @Last Modified time: 2018-09-24 20:11:54
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


      //底部轮播
    var a=0;
    $('.content .recommend .hot .left').click(function(event) {
    	a++;
    	if(a>2){a=0}
    	$('.content .recommend .hot ul').css('left', -a*1349+'px');
    });
    $('.content .recommend .hot .right').click(function(event) {
    	a--;
    	if(a<0){a=2}
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


    //底部
    $('footer a').hover(function() {
    	$(this).css('color', '#b12b0a');
    }, function() {
    	$(this).css('color', '');
    });

})