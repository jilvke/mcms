$(function(){
	$(window).scroll(function(){
		
		//首页—>我们专注于 标题
		if($(window).scrollTop() > 600 ){
			$(".zzsjk").stop().animate({
				top:0,
				opacity:1
			}, 800)
		}
		//移动—> 跨平台智能识别
		if($(window).scrollTop() > 1400 ){
			$(".znsb1").stop().animate({
				right:0,
				opacity:1
			}, 1000)
			$(".znsb2").stop().animate({
				left:0,
				opacity:1
			}, 1000)
		}
		//最新 HTML5 +CSS3 技术支持
		if($(window).scrollTop() > 1500 ){
			$(".zxjs_tu").stop().animate({
				bottom:0,
				opacity:1
			}, 1000)
		}
		//移动—> 二维码扫描
		if($(window).scrollTop() > 2100 ){
			$(".znsb12").stop().animate({
				right:0,
				opacity:1
			}, 1000)
			$(".znsb22").stop().animate({
				left:0,
				opacity:1
			}, 1000)
		}
		//微信无缝对接 全方位营销
		if($(window).scrollTop() > 2400 ){
			$(".zxjs_tu2").stop().animate({
				bottom:0,
				opacity:1
			}, 1000)
		}
		
		
		//首页—>投资项目 背景
		if($(window).scrollTop() > 400 ){
			$(".tou_img").stop().animate({width: 100 + '%'}, 800)
		}
		//公司优势页—>专家团队
		if($(window).scrollTop() > 0 ){
			$(".tt1").stop().animate({
				opacity:1
			}, 400)
			$(".tt2").stop().animate({
				opacity:1
			}, 1000)
			$(".tt3").stop().animate({
				opacity:1
			}, 1000)
			$(".tt4").stop().animate({
				opacity:1
			}, 1600)
			$(".tt5").stop().animate({
				opacity:1
			}, 1600)
			$(".tt6").stop().animate({
				opacity:1
			}, 2200)
		}
		//公司优势页—>服务机构
		if($(window).scrollTop() > 300 ){
			$(".fu_bt").stop().animate({
				top:51,
				opacity:1
			}, 1200)
			$(".fu1").stop().animate({
				left:0,
				opacity:1
			}, 800)
			$(".fu2").stop().animate({
				left:50 + '%',
				opacity:1
			}, 800)
		}
		//公司优势页—>服务机构
		if($(window).scrollTop() > 10 ){
			$(".cai_wen span").stop().animate({
				opacity:1
			}, 1200)
		}
		// 手机 —> 一站全包
		if($(window).scrollTop() > 500 ){
			LiLeftIn($(".baok ul li").eq(0))
		}
		
	})
})
//手机—>一站全包
function signIn(obj){
	obj.css({
		left    : 100,
		opacity : 0
	}).stop().animate({
		left    : 0,
		opacity : 1
	}, 1000)
}

function Hover(obj, calssName) {
	obj.hover(function(){
		$(this).addClass(calssName);
	},function(){
		$(this).removeClass(calssName);
	})
}

function LiLeftIn(obj){
	obj.eq(0).stop().animate({
		left    : 0,
		opacity : 1
	}, 400)
	setTimeout(function(){
		if(obj.next()){
			LiLeftIn(obj.next())
		}
	}, 200)
}





