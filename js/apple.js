$(function(){
	var ch=$(window).height();
	var btn = $(".btn");/*获取按钮*/
	btn.click(function(){
		$(this).toggleClass("active");
		$(".max-nav").slideToggle();
		/*$('.max-nav').css({background:"#000"});
		 $('.min-nav').css({background:"#000"})*/
	})
	var imgs=$(".banner li");/*所有的图片*/
	var imgw=imgs.width();
	imgs.css({left:imgw}).eq(0).css({left:0})

	$(".btns a").eq(0).css({background:"#fff",border:"1px solid #1491d0",left:"-1px",top:"-1px"});
	$(".btns").on('click',function (e) {
		e.preventDefault();
		var index=$(this).index();
		console.log(index)
		$(".btns a").css({background:"#999",border:"none",left:"0",top:"0"});
		$(".btns a").eq(index).css({background:"#fff",border:"1px solid #1491d0",left:"-1px",top:"-1px"});
		if(index>now){
			imgs.eq(now).animate({left:-imgw},300);
			imgs.eq(index).css({left:imgw});
			imgs.eq(index).animate({left:0},300);
		}else if(index<now){
			imgs.eq(now).animate({left:imgw},300);
			imgs.eq(index).css({left:-imgw});
			imgs.eq(index).animate({left:0},300);
		}else{
			return;
		}

		next=index;
		now=index;
	})
	var now=0;//当前的图片
	var next=0;//下一张
	function mover() {
		next++;
		if(next>=4){
			next=0;
		}
		$(".btns a").css({background:"#999",border:"none",left:"0",top:"0"});
		$(".btns a").eq(next).css({background:"#fff",border:"1px solid #1491d0",left:"-1px",top:"-1px"})
		imgs.eq(next).css({left:imgw})
		imgs.eq(now).animate({left:-imgw},300);//让第一张左移
		imgs.eq(next).animate({left:0},300);
		now=next;
	}
	function movel() {
		next--;
		if(next<0){
			next=3;
		}
		$(".btns a").css
		({background:"#999",border:"none",left:"0",top:"0"});
		$(".btns a").eq(next).css({background:"#fff",border:"1px solid #1491d0",left:"-1px",top:"-1px"})
		imgs.eq(next).css({left:-imgw})
		imgs.eq(now).animate({left:imgw},300);//让第一张左移
		imgs.eq(next).animate({left:0},300);
		now=next;
	}
	var t=setInterval(mover,4000)
	$('.banner').on('mouseenter',function () {
		$('.Left,.Right').addClass('o');
		clearInterval(t);
	})
	$('.banner').on('mouseleave',function () {
		$('.Left,.Right').removeClass('o');
		t=setInterval(mover,4000)
	})
	$('.Left').on('click',function () {
		movel();
	})
	$('.Right').on('click',function () {
		mover();
	})

	$(".title").click(function(){
		var index=$(this).index(".title");
		/*index为单击的第几个title*/
		$(".erji").eq(index).slideToggle();
		$(".title>span").eq(index).toggleClass("activeJia");
	})
	$(".search").on('click',function (e) {
		e.preventDefault();
		$(".max-nav li").addClass('animation');
		$(".searchform").addClass('feiru');
		$(".curtain").css({display:'block'});

		$(".quxiao").css({display:'block'}).addClass('show');
		$(".bag a").css({background:'none'});

		$(".searchresult .reaultslist li").addClass('fei');
		$(".searchview").css({height:'100vh'});
	})
	$(".quxiao").on('click',function (e) {
		e.preventDefault();
		$(".searchview").css({height:'0'});
		$(".searchform").removeClass('feiru');
		
		$(".curtain").css({display:'none'});
		$(".max-nav li").removeClass('animation');
		$(".searchresult .reaultslist li").removeClass('fei');
		$(".quxiao").css({display:'none'}).removeClass('show');
		$(".bag a").css({background:'url(images/bag_large.svg) no-repeat center center'});

	})
})