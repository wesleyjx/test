/*
* @Author: admin
* @Date:   2018-09-21 11:49:18
* @Last Modified by:   admin
* @Last Modified time: 2018-09-24 18:29:15
*/
$(function(){

//搜索框聚焦
  $('.search').focus(function(event) {
        $('header .center').css('border-color', 'red');
    });
    $('.search').blur(function(event) {
         $('header .center').css('border-color', '');
    })

    //导航栏
    $('nav .shopcar,.wish,.account,.kind,.logo li').hover(function() {
    	$(this).css('background-color', 'rgba(10,5,5,0.45)');
    }, function() {
    	$(this).css('background-color', '');
    });

        //底部
    $('footer a').hover(function() {
        $(this).css('color', '#b12b0a');
    }, function() {
        $(this).css('color', '');
    });

})