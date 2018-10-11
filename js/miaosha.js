/*
* @Author: ABC
* @Date:   2018-09-23 18:58:36
* @Last Modified by:   ABC
* @Last Modified time: 2018-09-24 21:04:46
*/
$(function(){
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
	$('.search').focus(function(event) {
         $('header .center').css('border-color', 'red');
    });
    $('.search').blur(function(event) {
        $('header .center').css('border-color', '');
    })
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


    $('.left1').hover(function() {
    	$('aside').show()
    }, function() {
    	$('aside').hide()
    });

    $('.content .ul #li1').hover(function() {
    	$('.ul1').show()
    }, function() {
    	$('.ul1').hide()
    });


    $('.nr1>button.btn2').click(function(event) {
    	$('.ul1').css('left', '-1413px');
    	$('.btn1').show();
    });
        $('.btn1').click(function(event) {
    	$('.ul1').css('left', '0px');
    	$('.btn1').hide();
    });


    	$('#left').click(function(event) {
			$('.lf').animate({'left':'-1260px'})
		});
		$('#right').click(function(event) {
			$('.lf').animate({'left':'0px'})
		});

		$('#left1').click(function(event) {
			$('.l2').animate({'left':'-1280px'})
		});
		$('#right1').click(function(event) {
			$('.l2').animate({'left':'0px'})
		});





})