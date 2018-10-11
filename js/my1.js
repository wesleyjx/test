/*
* @Author: admin
* @Date:   2018-09-06 09:08:06
* @Last Modified by:   admin
* @Last Modified time: 2018-09-27 16:10:33
*/
 		window.onload = function () {
        var timer;
			var num=0;
			function go(){
				timer=setInterval(function(){
					num++;
					if(num>7){num=0}
						pic.style.left=-num*1223+'px'
					for(var i=0;i<wz.children.length;i++){
					wz.children[i].className=''
				}
				wz.children[num].className='one'
			},2000)
		}
		go()
		var tags=wz.getElementsByTagName('li');
		for(var j=0;j<tags.length;j++){
			tags[j].index=j;
			tags[j].onmouseenter=function(){
				for(var i=0;i<wz.children.length;i++){
					wz.children[i].className=''
				}
				this.className='one';
				num=this.index;
				pic.style.left=-num*1223+'px';
			}
		}	

		ban.onmouseenter=function(){
			clearInterval(timer)
			wz.style.top=209+'px';
		}
		ban.onmouseleave=function(){
			go()
			wz.style.top=250+'px';
		}
		leftlf.onclick=function(){
			num--;
			if(num<0){num=5}
				pic.style.left=-num*1223+'px'
			for(var i=0;i<wz.children.length;i++){
				wz.children[i].className=''
			}
			wz.children[num].className='one'
		}
		rightlf.onclick=function(){
			num++;
			if(num>5){num=0}
				pic.style.left=-num*1223+'px'
			for(var i=0;i<wz.children.length;i++){
				wz.children[i].className=''
			}
			wz.children[num].className='one'
		}

		$('#big>li').hover(function() {
			$('#big li div').eq($(this).index()).stop().show()
		}, function() {
			$('#big li div').eq($(this).index()).stop().hide()
		});



		$(window).scroll(function(event) {
			if($(window).scrollTop()>1100){
				$('.f').fadeIn()
			}else{
				$('.f').fadeOut()
			}
		});
		$('.lf1').click(function(event) {
				$('html,body').animate({'scrollTop': '0px'}, 1000)
			});


		$(window).scroll(function(event) {
			if($(window).scrollTop()>=1000){
				$('.f').addClass('lf2')
			}else{
				$('.f').removeClass('lf2')
			}
			if($(window).scrollTop()>=1278){
				$('.f li').eq(0).addClass('current');
				$('.f li').eq(0).siblings().removeClass('current');
				$('.f li').eq(0).css('background-color', '#ff497c').siblings().css('background-color', '#fff');
			}
			if($(window).scrollTop()>=1820){
				$('.f li').eq(1).addClass('current');
				$('.f li').eq(1).siblings().removeClass('current');
				$('.f li').eq(1).css('background-color', '#d5bc00').siblings().css('background-color', '#fff');
			}
			if($(window).scrollTop()>=2208){
				$('.f li').eq(2).addClass('current');
				$('.f li').eq(2).siblings().removeClass('current');
				$('.f li').eq(2).css('background-color', '#f22301').siblings().css('background-color', '#fff');
			}
			if($(window).scrollTop()>=2748){
				$('.f li').eq(3).addClass('current');
				$('.f li').eq(3).siblings().removeClass('current');
				$('.f li').eq(3).css('background-color', '#882cd5').siblings().css('background-color', '#fff');
			}
			if($(window).scrollTop()>=3288){
				$('.f li').eq(4).addClass('current');
				$('.f li').eq(4).siblings().removeClass('current');
				$('.f li').eq(4).css('background-color', '#01b458').siblings().css('background-color', '#fff');
			}
			if($(window).scrollTop()>=3828){
				$('.f li').eq(5).addClass('current');
				$('.f li').eq(5).siblings().removeClass('current');
				$('.f li').eq(5).css('background-color', '#2f8ad3').siblings().css('background-color', '#fff');
			}
			if($(window).scrollTop()>=4368){
				$('.f li').eq(6).addClass('current');
				$('.f li').eq(6).siblings().removeClass('current');
				$('.f li').eq(6).css('background-color', '#d5bc00').siblings().css('background-color', '#fff');
			}
			if($(window).scrollTop()>=4908){
				$('.f li').eq(7).addClass('current');
				$('.f li').eq(7).siblings().removeClass('current');
				$('.f li').eq(7).css('background-color', '#2fc0d1').siblings().css('background-color', '#fff');
			}
		});

		var num=0;
		$('.left').click(function(event) {
			num++;
			if(num>2){num=0;}
			$('.l1').animate({'left':-num*1240+'px'})
		});
		$('.right').click(function(event) {
			num--;
			if(num<0){
				num=2}
			$('.l1').animate({'left':-num*1230+'px'}, 1000);
		});
		$('.left1').click(function(event) {
			$('.l2').animate({'left':'-1250px'}, 1000)
		});
		$('.right1').click(function(event) {
			$('.l2').animate({'left':'0px'}, 1000)
		});
		$('.left2').click(function(event) {
			$('.l3').animate({'left':'-1250px'}, 1000)
		});
		$('.right2').click(function(event) {
			$('.l3').animate({'left':'0px'}, 1000)
		});
		$('.left3').click(function(event) {
			$('.l4').animate({'left':'-1250px'}, 1000)
		});
		$('.right3').click(function(event) {
			$('.l4').animate({'left':'0px'}, 1000)
		});


		$('.le').click(function(event) {
			$('.lf').animate({'left':'-1240px'})
		});
		$('.ri').click(function(event) {
			$('.lf').animate({'left':'0px'})
		});


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

















































       }