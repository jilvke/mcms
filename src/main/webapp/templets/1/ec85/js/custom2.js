$(document).ready(function(){
	$('.deploy-contact-form').click(function(){	$('.sidebar-form').toggle(300);});
	$('.deploy-subscribe-form').click(function(){$('.sidebar-form2').toggle(300); $('#emailError').hide(200);});
	$('#submenu-one').click(function(){	$('.submenu-one').toggle(300);	});
	$('#submenu-two').click(function(){	$('.submenu-two').toggle(300);	});
	$('#submenu-three').click(function(){	$('.submenu-three').toggle(300);	});
	$('#submenu-four').click(function(){	$('.submenu-four').toggle(300);	});
	$('#submenu-five').click(function(){	$('.submenu-five').toggle(300);	});
	$('#submenu-six').click(function(){	$('.submenu-six').toggle(300);	});
	$('#submenu-seven').click(function(){	$('.submenu-seven').toggle(300);	});
	$('#submenu-eight').click(function(){	$('.submenu-eight').toggle(300);	});
	$('.deploy-right-sidebar, .close-sidebar-right, .close-bottom-right, .close-bottom-left, .deploy-subscribe-form, .deploy-contact-form').click(function(){	return false;	})
    $(".content").click(function(){
        $('.sidebar-right').animate({
            right: '-100%',
        }, 300, 'easeOutExpo', function () {});
        $('.sidebar-left').animate({
            left: '-280px',
        }, 300, 'easeInOutExpo', function () {});
    });
    $(".deploy-right-sidebar").click(function(){
    	showurl = $(this).data('url');
    	$("#showmain").attr("src",showurl);
        $('.sidebar-right').delay(300).animate({
            right: '0',
        }, 300, 'easeOutExpo', function () {});
        $('.sidebar-left').animate({
            left: '-280px',
        }, 300, 'easeInOutExpo', function () {});
        return false;
    });
    $(".close-sidebar-right, .close-bottom-right").click(function(){        
        $('.sidebar-right').animate({
            right: '-100%',
        }, 300, 'easeInOutExpo', function () {});
        return false;
    });
    $('.deploy-left-sidebar').click(function () {
        $('.sidebar-left').delay(300).animate({
            left: '-10',
        }, 300, 'easeOutExpo', function () {});
        $('.sidebar-right').animate({
            right: '-100%',
        }, 300, 'easeInOutExpo', function () {});
        return false;
    })
    $('.close-sidebar-left, .close-bottom-left').click(function () {
        $('.sidebar-left').animate({
            left: '-200%',
        }, 300, 'easeInOutExpo', function () {});
        return false;
    });
	$('.deploy-subscribe').click(function(){
		$('.sidebar-form').hide(200);
		$('body,html').animate({scrollTop:0},500);
        $('.sidebar-left').delay(500).animate({
            left: '-10',
        }, 300, 'easeOutExpo', function () {});		
		$('.sidebar-scroll-left').delay(1000).animate({scrollTop:0},500);
		$('.sidebar-form2').delay(1000).show(200);
		$('#emailError').delay(1000).show();
		return false;
	});
});

