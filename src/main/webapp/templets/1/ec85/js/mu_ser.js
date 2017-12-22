$(function(){
    $(window).scroll(function(){
         
        //鏈嶅姟鈥�>娴佺▼ 鑳屾櫙
        if($(window).scrollTop() > 1100 ){
            $(".tou_img").stop().animate({width: 100 + '%'}, 800)
        }
        //鏈嶅姟鈥�>娴佺▼ 鍔ㄤ綔
        if($(window).scrollTop() > 1100 ){
            $(".lc1").stop().animate({
                marginLeft:0,
                opacity:1
            }, 200)
            $(".lcjt1").stop().animate({
                marginLeft:0,
                opacity:1
            }, 300)
            $(".lc2").stop().animate({
                marginLeft:0,
                opacity:1
            }, 500)
            $(".lcjt2").stop().animate({
                marginLeft:0,
                opacity:1
            }, 600)
            $(".lc3").stop().animate({
                marginLeft:0,
                opacity:1
            }, 800)
            $(".lcjt3").stop().animate({
                marginLeft:0,
                opacity:1
            }, 900)
            $(".lc4").stop().animate({
                marginLeft:0,
                opacity:1
            }, 1000)
            $(".lcjt4").stop().animate({
                marginLeft:0,
                opacity:1
            }, 1100)
            $(".lc5").stop().animate({
                marginLeft:0,
                opacity:1
            }, 1300)
            $(".lcjt5").stop().animate({
                marginLeft:0,
                opacity:1
            }, 1400)
            $(".lc6").stop().animate({
                marginLeft:0,
                opacity:1
            }, 1500)
            $(".lcjt6").stop().animate({
                marginLeft:0,
                opacity:1
            }, 1600)
            $(".lc7").stop().animate({
                marginLeft:0,
                opacity:1
            }, 1800)
        }
        ////鏈嶅姟鈥�>6澶т环鏍煎椁�
        if($(window).scrollTop() > 300 ){
            $(".djg_bt1").stop().animate({
                top:0,
                opacity:1
            }, 600)
            $(".djg_bt2").stop().animate({
                right:0,
                opacity:1
            }, 1800)
            $(".djg_bt3").stop().animate({
                right:0,
                opacity:1
            }, 3000)
        }
        //鍏徃浼樺娍椤碘€�>鏈嶅姟鏈烘瀯
        if($(window).scrollTop() > 10 ){
            $(".cai_wen span").stop().animate({
                opacity:1
            }, 1200)
        }
        // 8骞村伐浣滅粡楠�
        if($(window).scrollTop() > 1200 ){
            LiLeftIn($(".dajgk  .jgk1").eq(0))
        }
        
    })
})
//鎵嬫満鈥�>涓€绔欏叏鍖�
function signIn(obj){
    obj.css({
        top    : 300,
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





