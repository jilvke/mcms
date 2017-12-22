$(function(){
	$(window).scroll(function(){
		
		// 8年建站经验
		if($(window).scrollTop() > 500 ){
			LiLeftIn($(".abo-8nkk  li").eq(0))
		}
		
	})
})
//8年建站经验
function signIn(obj){
	obj.css({
		top    : 100,
		opacity : 0
	}).stop().animate({
		top    : 0,
		opacity : 1
	}, 1200)
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
		top    : 0,
		opacity : 1
	}, 400)
	setTimeout(function(){
		if(obj.next()){
			LiLeftIn(obj.next())
		}
	}, 200)
}





