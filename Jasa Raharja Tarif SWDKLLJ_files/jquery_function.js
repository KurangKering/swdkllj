
function closepopsubmit(){
	$('.popupmain_back').fadeOut("slow");
}
function slidesidebar(){    
    $('.navsidebar').slideToggle('slow');      
    $('.sidebar-title-img').toggleClass("res_arrow_highlight");
}
function slidesidebar_sub(){    
    $('.menu-sub').slideToggle('slow');      
    $('.sidebar-title-img-sub').toggleClass("res_arrow_highlight");
}
$(document).ready( function(){
    $('#toggle-button-search').click( function() {
		$('.box_wrapper_search').toggleClass("box_wrapper_search_border");		
		$('.fieldhide').toggleClass("fieldshow");		
		$('.img_searchtop_bg').toggleClass("img_searchtop_bg2");	
		
		
		$('.box_wrapper_search_blue').toggleClass("box_wrapper_search_border_blue");		
		$('.fieldhide_blue').toggleClass("fieldshow_blue");		
		$('.img_searchtop_bg_blue').toggleClass("img_searchtop_bg2_blue");
		 
    });
	/*blue*/
	 $('#toggle-button-search-blue').click( function() {
		$('.box_wrapper_search_blue').toggleClass("box_wrapper_search_border_blue");		
		$('.fieldhide_blue').toggleClass("fieldshow_blue");		
		$('.img_searchtop_bg_blue').toggleClass("img_searchtop_bg2_blue");	
		
		
		$('.box_wrapper_search').toggleClass("box_wrapper_search_border");		
		$('.fieldhide').toggleClass("fieldshow");		
		$('.img_searchtop_bg').toggleClass("img_searchtop_bg2");
	 	
    });
	

	
	
});

/*accordion*/
$.fn.accordionPlug= function(s){
	var elem = this,
		w_class = String(s.wrapperClass),
		label = String(s.labelClass),
		content = String(s.contentClass),
		activeClass= String(s.activeClass);
	
	elem.find("."+label).bind('click',function(){
		 
		_elemContent =$(this).parents("."+w_class).find("."+content);
		flag_active =false;
		if($(this).hasClass(activeClass)){
			flag_active =true;
		}
		$("."+w_class).each(function(){
			if($(this).find("."+content).is(":visible")){
				$(this).find("."+content).slideUp(500);
				$(this).find("."+label).removeClass(activeClass);			 
			}
		});
		
		if(!flag_active){
			_elemContent.slideDown(500);
			$(this).addClass(activeClass);
		}
		
		
	});	
		
}

/*banner*/
$.fn.responsiveBanner =function(){
    var elem =this,
    action = function(){
        window_width = $(window).width();
        elem.each(function(){
            flag=false;
            if(window_width >= 1024 && $(this).attr('has_load')!='desktop'){
                images_url =  $(this).attr('src2');              
                $(this).attr('has_load','desktop');
                flag=true;
            }else if(window_width < 1024 && window_width >=768 && $(this).attr('has_load')!='tablet'){
                images_url =  $(this).attr('src3');
                $(this).attr('has_load','tablet');
                flag=true;
            }else if(window_width < 768 && window_width >=0 && $(this).attr('has_load')!='smartphone'){
                images_url =  $(this).attr('src4');            
                $(this).attr('has_load','smartphone');
                flag=true;
 
			}
			
            if(flag)
                $(this).css({
                    'background':"url("+images_url+")"
                });
        //            console.log(flag);            
        });
        
    }
    action();
    $(window).resize(function(){
        action();        
    })
}

function righsidebar_menu(){
	$('.nav_menu_open_res').delay(0).fadeOut(200);
	$('#menu').delay(50).animate({right:'0px'},{duration:230});
	$('#middle').delay(150).animate({right:'280px'},{duration:300});
	$('#header').delay(150).animate({right:'280px'},{duration:300});
	$('#slider').delay(150).animate({right:'280px'},{duration:300});
	$('#footer').delay(150).animate({right:'280px'},{duration:300});
	$('#banner').delay(150).animate({right:'280px'},{duration:300});
	
}
function righsidebar_menu_c(){
	$('#menu').delay(50).animate({right:'-320px'},{duration:230});
	$('.nav_menu_open_res').delay(50).fadeIn(150);
	$('#middle').delay(50).animate({right:'0px'},{duration:250});
	$('#header').delay(50).animate({right:'0px'},{duration:250});
	$('#slider').delay(50).animate({right:'0px'},{duration:250});
	$('#footer').delay(50).animate({right:'0px'},{duration:250});
	$('#banner').delay(50).animate({right:'0px'},{duration:250});
}