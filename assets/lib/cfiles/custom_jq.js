// JavaScript Document

screen_w = $(window).width();
screen_h = $(window).height();
/* @@@@==============@@@   UTM Cookies   @@@==================@@@  */
$(window).load(function() {	
	$('#about_team ul.about_team_c li').css('height',$('.about_team_c_li').height());
	$('#about_team ul.about_team_d li').css('height',$('.about_team_d_li').height());	  
});
/* @@@@============@@@   // UTM Cookies   @@@============@@@  */

$(window).scroll(function() {
    var scrolledY = $(window).scrollTop();
    if (scrolledY>=100)
        {
             $('.return-to-top').fadeIn(200);
        }
        else 
        {
            $('.return-to-top').fadeOut(200);
        }
});

function move(){
    $('body,html').animate({scrollTop : 0}, 500);
}

$(document).ready(function(){
	
	$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	var reduced_h1_about = $(".banner_shdw").height();
	if( $(window).scrollTop() > reduced_h1_about ) {
		//$('#header-wrap').css('opacity',1);
		$(".page-id-80 .cl_fixed_nav").removeClass('cl_H_fixed_nav');
		$(".page-id-42 .cl_fixed_nav").removeClass('cl_H_fixed_nav');
	} else {
		//$('#header-wrap').css('opacity',0);   
		 $('.page-id-80 .cl_fixed_nav').addClass('cl_H_fixed_nav');
		 $('.page-id-42 .cl_fixed_nav').addClass('cl_H_fixed_nav');
	}
	});
	
	$('.fancy_scroll a[href^="/#"]').click(function() {
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top
		}, 1200);
		return false;  // enable to hide the #tag in url bar
	});
	
	$("a[href='#top']").click(function() {
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
	});
	

		$('.cl_fixed_nav h3.nav-toggle').click(function () {
		  $('.cl_fixed_nav #main-nav').slideToggle(500);
		  $('.cl_fixed_nav .cl_logo').toggleClass('marginBtm15');
		  });
// /// Top nav button 
	
/* =============    Homepage banner Zoom Effect Class   ============= */  
	setTimeout(function () {
	$('.h_banner_bg').addClass('h_banner_bg_zoominout');
	}, 1000);
/* ///=============    Homepage banner Zoom Effect Class  ============= */
  		
		
/* @@@@==============@@@   Main Contact PopUp   @@@==============@@@  */	

	
    $('input#clMSubmit').click(function() {
			var Error = false;
			//var uberfor = $("#uberfor").val();
	        var name = $("#jgCName").val();
	        var email = $("#jgCEmail").val();
	        var tel = $("#jgCPhone").val(); 
			var atpos=email.indexOf("@");
			var dotpos=email.lastIndexOf(".");
			var numeric = /^[0-9+-]+$/;
			var txwLgErrorMsg = "Please fill the required fields";
         	//alert("Hi");
			
			/*if(uberfor.length == 0){
			var Error = true;
			$('#uberfor').css('border-bottom','1px solid red');
			return false;
			 } 
			else  
			 {
			  $('#uberfor').css('border-bottom','1px solid #cdcdcd');
			 }*/
			 
			if(name.length == 0){
			var Error = true;
			$('#jgCName').css('border','1px solid red');
			return false;
			 } 
			else  
			 {
			  $('#jgCName').css('border','1px solid #cdcdcd');
			 }
			 
			if(email==0)
			{
			  $('#jgCEmail').css('border','1px solid red');
			  //$("#txwLgErrorMsg").html("Please fill Email ID");
			return false;
			}
			
				if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
				  {
				  var Error = true;
				   $('#jgCEmail').css('border','1px solid red');
				  return false;
				  }
				  if(email!=0)
				  {
				$('#jgCEmail').css('border','1px solid #cdcdcd');
				  }
				  	
			Contact_submit();	  
		    ClPopUpMail();
            ga('send', 'event', { eventCategory: 'contactus', eventAction: 'Button_click', eventLabel: 'contactus'});
		    window.top.location = 'thank-you/index.html';
			if(Error == false){
				  $("#clMSubmit").click(function(){
				  //this.value='';
				  this.disabled='disabled';
				  });
			   } 	
		  });

	
	$("#jgCEmail").keyup(function () {
    if (this.value.length > 0) {
    //$(this).prev('.digits').focus();
    //$(this).prev('.digits').trigger( "select" );
        //console.log($("#jgCEmail").val());
    }  });

    $( "#jgCEmail" ).keyup(function() {
        email_keyup();
    });
    $(document).on('blur', '#jgCEmail', function() {
        email_blur();
    });
    $( "#jgCName" ).keyup(function() {
        name_keyup();
    });
    $(document).on('blur', '#jgCName', function() {
        name_blur();
    });
    $( "#jgCPhone" ).keyup(function() {
        phone_keyup();
    });
    $(document).on('blur', '#jgCPhone', function() {
        phone_blur();
    });
		
});

function email_keyup()
{  
        var email = $("#jgCEmail").val();
            var Source = $(".Source").val();
        var Medium = $(".Medium").val();
        $.ajax({
                    type: 'post',
                    url: '/wp-content/themes/wpclicklabs/cta/database.php',
                    data: {
                        email:email,
                        Source:Source,
                        Medium:Medium,
                        form: 1,
                        type:'email_up'
                        },
                    dataType: 'Json',
                    success: function(data) {
                        //console.log(data);
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) { 
                        //console.log("Status: " + textStatus); 
                        } 
                });
}
function email_blur()
{  
        var email = $("#jgCEmail").val();
            var Source = $(".Source").val();
    var Medium = $(".Medium").val();
        $.ajax({
                    type: 'post',
                    url: '/wp-content/themes/wpclicklabs/cta/database.php',
                    data: {
                        email:email,
                        Source:Source,
                        Medium:Medium,
                        form: 1,
                        type:'email_out'
                        },
                    dataType: 'Json',
                    success: function(data) {
                       // console.log(data);
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) { 
                        //console.log("Status: " + textStatus); 
                        } 
                });
}

function name_keyup()
{  
        var name = $("#jgCName").val();
            var Source = $(".Source").val();
    var Medium = $(".Medium").val();
        $.ajax({
                    type: 'post',
                    url: '/wp-content/themes/wpclicklabs/cta/database.php',
                    data: {
                        name:name,
                        Source:Source,
                        Medium:Medium,
                        form: 1,
                        type:'name_up'
                        },
                    dataType: 'Json',
                    success: function(data) {
                        //console.log(data);
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) { 
                        //console.log("Status: " + textStatus); 
                        } 
                });
}
function name_blur()
{  
        var name = $("#jgCName").val();
            var Source = $(".Source").val();
    var Medium = $(".Medium").val();
        $.ajax({
                    type: 'post',
                    url: '/wp-content/themes/wpclicklabs/cta/database.php',
                    data: {
                        name:name,
                        Source:Source,
                        Medium:Medium,
                        form: 1,
                        type:'name_out'
                        },
                    dataType: 'Json',
                    success: function(data) {
                        //console.log(data);
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) { 
                        //console.log("Status: " + textStatus); 
                        } 
                });
}

function phone_keyup()
{  
        var phone = $("#jgCPhone").val();
            var Source = $(".Source").val();
    var Medium = $(".Medium").val();
        $.ajax({
                    type: 'post',
                    url: '/wp-content/themes/wpclicklabs/cta/database.php',
                    data: {
                        phone:phone,
                        Source:Source,
                        Medium:Medium,
                        form: 1,
                        type:'phone_up'
                        },
                    dataType: 'Json',
                    success: function(data) {
                        //console.log(data);
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) { 
                        //console.log("Status: " + textStatus); 
                        } 
                });
}
function phone_blur()
{  
        var phone = $("#jgCPhone").val();
            var Source = $(".Source").val();
    var Medium = $(".Medium").val();
        $.ajax({
                    type: 'post',
                    url: '/wp-content/themes/wpclicklabs/cta/database.php',
                    data: {
                        phone:phone,
                        Source:Source,
                        Medium:Medium,
                        form: 1,
                        type:'phone_out'
                        },
                    dataType: 'Json',
                    success: function(data) {
                        //console.log(data);
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) { 
                        //console.log("Status: " + textStatus); 
                        } 
                });
}


$(document).ready(function(){
      $('.jg_click_popup').click(function() { 
	  
	  if($(window).width() <= 600 ) { jg_click_popup_position = 'absolute' } else { jg_click_popup_position = 'fixed' }
        $('#jg_contact_popup').bPopup({    
          //easing: 'easeOutBack', //uses $ easing plugin
          speed: 400,
          transition: 'slideDown',
          zIndex: 2,
		  positionStyle: 'fixed',
		  modal:false,
          modalClose: true  //Should the popup close on click on overlay
            });
            //ga('send', 'event', { eventCategory: 'Home_page', eventAction: 'Button_click', eventLabel: 'Get-in-touch'});
         });
      $('#jg_contact_popup_close').click(function() {
        var bPopup = $('#jg_contact_popup').bPopup({
            easing: 'easeOutBack', //uses $ easing plugin
            speed: 650,
            transition: 'slideUp'
            });
        bPopup.close(); 
          });
		  

$("#jg_contact_popup_close, #cl_h_sec5_popup_close, #cl_h_sec5_platform_popup_close").hover(function () { 
	$(this).toggleClass("rotate180");
	 });


/* @@@@=================@@@ ///  Main Contact PopUp   @@@=============@@@  */

/* @@@@=================@@@  Blog/Single post JS   @@@=============@@@  */

/*	Newsletter form blog Top*/

function newsletter_sub() {
				  var email1 = $("#email").val();
				  var name = $("#name").val();
				  var list = $("#list").val();
                  var url = window.location.href;
               $.ajax({
                    type: 'POST',
                    url: '/wp-content/themes/wpclicklabs/cta/cta.php',
                    data: {email1:email1, name:name, list:list, url:url, type:2},
                    dataType: 'JSON',
				    //processData: false,
                    success: function(data) {
                       // console.log(data);

                        //alert(data['log']);

                        if (data['log'] == 1) {
							console.log(data);
                        }
                        else if (data['log'] == 0) {

                            document.getElementById("email").style.backgroundColor = "#F8CCCC";
                        }
                        else {

                        }
                       
                    },
					
                });

                return true;
            }
			
/*	Newsletter form blog sidebar*/
			
		function newsletter_b_sidebar_sub() {
				  var email1 = $("#email1").val();
				  var name = $("#name1").val();
				  var list = $("#list1").val();
                  var url = window.location.href;
               $.ajax({
                    type: 'POST',
					url: '/wp-content/themes/wpclicklabs/cta/cta.php',
                    data: {email1:email1, name:name, list:list, url:url, type:2},
                    dataType: 'JSON',
				    //processData: false,
                    success: function(data) {
                       // console.log(data);
                        if (data['log'] == 1) {
							console.log(data);
                        }
                        else if (data['log'] == 0) {

                            //document.getElementById("email").style.backgroundColor = "#F8CCCC";
                        }
                        else {
                        }                      
                    },					
                });
                return true;
            }
/*	/// Newsletter form blog sidebar*/

$(document).ready(function() {
	
/*Blog Top Newsletter form Validation*/
	 $('input.news_submit').click(function() {
		 
	    var Error = false;
		var email = document.news_letter.email.value;
		var atpos=email.indexOf("@");
	    var dotpos=email.lastIndexOf(".");
	  
		if(email==0)
		{
		document.getElementById("email").style.border="1px solid red";
		return false;
		}
		
			  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
				{
				var Error = true;
				document.getElementById("email").style.border="1px solid red";
				return false;
				}
				if(email!=0)
				{
				  document.getElementById("email").style.border="1px solid #CCC";
				}	
					
		 newsletter_sub();
  //ga('send', 'event', 'topnavsubscribebutton', 'click', 'nav-buttons');
  	$('#email').val('')
  	$("#success_msg").fadeIn(1000);
	 
		 if(Error == false){	
		  $("#success_msg").delay(5000).fadeOut(); // To hide the success message after some time		  
		  $(".news_submit").click(function(){
		  //this.value='Submitting ..';
		  this.disabled='disabled';
		  });
		} 
		 
	});
	
	
/*Blog Sidebar Newsletter form Validation*/
	
	 $('input.news_submit1').click(function() { 
	    var Error = false;
		var email = $("#email1").val();
		var atpos=email.indexOf("@");
	    var dotpos=email.lastIndexOf(".");
	  
		if(email==0)
		{
		document.getElementById("email1").style.border="1px solid red";
		return false;
		}
		
			  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
				{
				var Error = true;
				document.getElementById("email1").style.border="1px solid red";
				return false;
				}
				if(email!=0)
				{
				  document.getElementById("email1").style.border="1px solid #CCC";
				}	
			
			 newsletter_b_sidebar_sub();
			 $("#success_msg1").fadeIn(1000);
		  $("#news_letter1").fadeOut();			
             //ga('send', 'event', 'topnavsubscribebutton', 'click', 'nav-buttons');
		 
		 if(Error == false){	
          
		   $('#email1').val('') // To reset the email field value
		  /*$(".news_submit").click(function(){
		  this.disabled='disabled';
		  });*/
		} 
		 
	});

});

/* @@@@=========@@@  /// Blog/Single post JS   @@@===========@@@  */


/*Product Slider Home Page*/
				
				 $('.j_h_p_s_Next').click(function() {
                    var j_p_id = $('.current_p').attr('id');
					//fIn_time = 300;
					//fOut_time = 300;
					//console.log(j_p_id);
                    if (j_p_id == 'j_h_products_slider1')
                    {
				
				        $('.j_h_products_slider').hide();
						$('#j_h_products_slider2').fadeIn();
						
						$('.j_h_products_slider').removeClass('current_p');
						$('#j_h_products_slider2').addClass('current_p');
						//$('.j_h_p_s_Prev').removeClass('j_h_p_s_NP_inactive');
                    }
                    else if (j_p_id == 'j_h_products_slider2')
                    {
					 $('.j_h_products_slider').hide();
					 $('#j_h_products_slider3').fadeIn();
					
						$('.j_h_products_slider').removeClass('current_p');
						$('#j_h_products_slider3').addClass('current_p');
						//$('.j_h_p_s_Prev').removeClass('j_h_p_s_NP_inactive');
						//$(this).addClass('j_h_p_s_NP_inactive')
                    }
					else
					{
					 $('.j_h_products_slider').hide();
					 $('#j_h_products_slider1').fadeIn();
					
						$('.j_h_products_slider').removeClass('current_p');
						$('#j_h_products_slider1').addClass('current_p');
						
					}
                });
				
				
				 $('.j_h_p_s_Prev').click(function() {  
                    var j_p_id = $('.current_p').attr('id');
					console.log(j_p_id);
                    if (j_p_id == 'j_h_products_slider3')
                    {
					 $('.j_h_products_slider').hide();
					 $('#j_h_products_slider2').fadeIn();
						
						$('.j_h_products_slider').removeClass('current_p');
						$('#j_h_products_slider2').addClass('current_p');
						//$('.j_h_p_s_Next').removeClass('j_h_p_s_NP_inactive');
                    }
                    else if (j_p_id == 'j_h_products_slider2')
                    {
					 $('.j_h_products_slider').hide();
					 $('#j_h_products_slider1').fadeIn();
						
						$('.j_h_products_slider').removeClass('current_p');
						$('#j_h_products_slider1').addClass('current_p');
						//$('.j_h_p_s_Next').removeClass('j_h_p_s_NP_inactive');
						//$(this).addClass('j_h_p_s_NP_inactive')
                    }
					else
					{
					 $('.j_h_products_slider').hide();
					 $('#j_h_products_slider3').fadeIn();
						
						$('.j_h_products_slider').removeClass('current_p');
						$('#j_h_products_slider3').addClass('current_p');
					}
                });
				
/* @@@@@@@@@@@@@  ///  Homepage product Slider   @@@@@@@@@@@@@@@@@@ */	

/* @@@@@@@@@@@@  Homepage Work Sec   @@@@@@@@@@@@@@@ */
 
    $(".cl_h_sec5 .work-list li").each(function(i) {
     $(this).attr("rel","cl_h_sec5_portf"+(i+1));
    });
	
	$(".cl_h_sec5_slider .slide_deiv").each(function(i) {
     $(this).attr("id","cl_h_sec5_portf"+(i+1));
    });
	
	
      $('.cl_h_sec5 .work-list li').click(function() {
      
      $(".cl_h_sec5 .work-list li").removeClass('cl_h_sec5_portf_tab_active');
		  $(".cl_h_sec5_slider .slide_deiv").removeClass('cl_h_sec5_portf_desc_active');
		  $(".cl_h_sec5_slider .slide_deiv .showc_cnt h3").removeClass('fade_in_right');
		  $(".cl_h_sec5_slider .slide_deiv .showc_cnt p").removeClass('fade_in_right_delay');
		  $(".cl_h_sec5_slider .slide_deiv .showc_cnt .click_app_links").removeClass('fade_in_right_delay');
		  var selected_tab = $(this).attr("rel");
		  $("#"+selected_tab).addClass("cl_h_sec5_portf_desc_active");
		  $(this).addClass("cl_h_sec5_portf_tab_active");
		  $(".cl_h_sec5_slider").diyslider("move", $(".cl_h_sec5_portf_desc_active").attr("rel"));   
        
        $('#cl_h_sec5_popup').bPopup({    
          //easing: 'easeOutBack', //uses $ easing plugin
          speed: 400,
          transition: 'fadeIn',
          zIndex: 2,
		  positionStyle: 'fixed',
          modalClose: true  //Should the popup close on click on overlay
            });
			//$('.slide_deiv_sel').addClass('active');
			//$(".cl_h_sec5_slider").diyslider("move", $(this).children(".current-slide").val());
			//$(".cl_h_sec5_slider").diyslider("move", 3);
	//$(".cl_h_sec5_slider").diyslider("move", $(".cl_h_sec5_portf_desc_active").attr("rel"));
			//alert($(".current-slide").attr("rel"));
			
		  
		  $("#"+selected_tab+" .showc_cnt h3").addClass("fade_in_right");
		  $("#"+selected_tab+" .showc_cnt p").addClass("fade_in_right_delay");
		  $("#"+selected_tab+" .showc_cnt .click_app_links").addClass("fade_in_right_delay");
		  return false;
		  
         });
      $('#cl_h_sec5_popup_close').click(function() {
        var bPopup = $('#cl_h_sec5_popup').bPopup({
            easing: 'slideBack', //uses $ easing plugin
            speed: 650,
            transition: 'fadeIn'
            });
        bPopup.close(); 
          });
	

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ /// Homepage Work Sec   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */	
   
/*@@@@@@@@@@@@@@@@@@@@@@@@@@ platform section @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
      

      $(".cl_h_sec5 .platform-list li").each(function(i) {
     $(this).attr("rel","cl_h_sec5_platform_cat"+(i+1));
    });

      $(".cl_h_sec5_platform_slider .slide_platform_deiv").each(function(i) {
     $(this).attr("id","cl_h_sec5_platform_cat"+(i+1));
    });

      $('.cl_h_sec5 .platform-list li').click(function() {
      
      $(".cl_h_sec5 .platform-list li").removeClass('cl_h_sec5_platform_tab_active');
		  $(".cl_h_sec5_platform_slider .slide_platform_deiv").removeClass('cl_h_sec5_platform_desc_active');
		  var selected_tab = $(this).attr("rel");
		  console.log(selected_tab);
		  $("#"+selected_tab).addClass("cl_h_sec5_platform_desc_active");
		  $(this).addClass("cl_h_sec5_platform_tab_active");
		  $(".cl_h_sec5_platform_slider").diyslider("move", $(".cl_h_sec5_platform_desc_active").attr("rel"));   
        
        $('#cl_h_sec5_platform_popup').bPopup({    
          //easing: 'easeOutBack', //uses $ easing plugin
          speed: 400,
          transition: 'fadeIn',
          zIndex: 2,
		  positionStyle: 'fixed',
          modalClose: true  //Should the popup close on click on overlay
            });
			//$('.slide_deiv_sel').addClass('active');
			//$(".cl_h_sec5_slider").diyslider("move", $(this).children(".current-slide").val());
			//$(".cl_h_sec5_slider").diyslider("move", 3);
	//$(".cl_h_sec5_slider").diyslider("move", $(".cl_h_sec5_portf_desc_active").attr("rel"));
			//alert($(".current-slide").attr("rel"));
		  return false;
		  
         });

$('#cl_h_sec5_platform_popup_close').click(function() {
        var bPopup = $('#cl_h_sec5_platform_popup').bPopup({
            easing: 'slideBack', //uses $ easing plugin
            speed: 650,
            transition: 'fadeIn'
            });
        bPopup.close(); 
          });
//ondemand
$(".platform_ondemand_testi_msg li").each(function(i) {
     $(this).attr("id","on_demand_testi_msg"+(i+1));
    });
	
	$(".platform_examples .platform_ondemand_work").each(function(i) {
     $(this).attr("rel","on_demand_testi_msg"+(i+1));
    });

      $(".platform_examples .platform_ondemand_work").hover(function() {
		  $(".platform_examples .platform_ondemand_work").removeClass('active_platform');
		  $(".platform_ondemand_testi_msg li").removeClass('platform_ondemand_testi_msg_active');
		  $(".platform_ondemand_testi_msg li").hide();
		  var selected_tab = $(this).attr("rel");
		  $("#"+selected_tab).addClass("platform_ondemand_testi_msg_active");
		  $(this).addClass("active_platform");
		  $("#"+selected_tab).show();
		  return false;
		});
//ondemand ends

//marketplaces

$(".platform_marketplace_testi_msg li").each(function(i) {
     $(this).attr("id","marketplace_testi_msg"+(i+1));
    });
	
	$(".platform_examples .platform_marketplace_work").each(function(i) {
     $(this).attr("rel","marketplace_testi_msg"+(i+1));
    });

      $(".platform_examples .platform_marketplace_work").hover(function() {
		  $(".platform_examples .platform_marketplace_work").removeClass('active_marketplace_platform');
		  $(".platform_marketplace_testi_msg li").removeClass('platform_marketplace_testi_msg_active');
		  $(".platform_marketplace_testi_msg li").hide();
		  var selected_tab = $(this).attr("rel");
		  $("#"+selected_tab).addClass("platform_marketplace_testi_msg_active");
		  $(this).addClass("active_marketplace_platform");
		  $("#"+selected_tab).show();
		  return false;
		});

//marketplaces end

//content

$(".platform_content_testi_msg li").each(function(i) {
     $(this).attr("id","content_testi_msg"+(i+1));
    });
	
	$(".platform_examples .platform_content_work").each(function(i) {
     $(this).attr("rel","content_testi_msg"+(i+1));
    });

      $(".platform_examples .platform_content_work").hover(function() {
		  $(".platform_examples .platform_content_work").removeClass('active_content_platform');
		  $(".platform_content_testi_msg li").removeClass('platform_content_testi_msg_active');
		  $(".platform_content_testi_msg li").hide();
		  var selected_tab = $(this).attr("rel");
		  $("#"+selected_tab).addClass("platform_content_testi_msg_active");
		  $(this).addClass("active_content_platform");
		  $("#"+selected_tab).show();
		  return false;
		});

//content end

//social

$(".platform_social_testi_msg li").each(function(i) {
     $(this).attr("id","social_testi_msg"+(i+1));
    });
	
	$(".platform_examples .platform_social_work").each(function(i) {
     $(this).attr("rel","social_testi_msg"+(i+1));
    });

      $(".platform_examples .platform_social_work").hover(function() {
		  $(".platform_examples .platform_social_work").removeClass('active_social_platform');
		  $(".platform_social_testi_msg li").removeClass('platform_social_testi_msg_active');
		  $(".platform_social_testi_msg li").hide();
		  var selected_tab = $(this).attr("rel");
		  $("#"+selected_tab).addClass("platform_social_testi_msg_active");
		  $(this).addClass("active_social_platform");
		  $("#"+selected_tab).show();
		  return false;
		});

//social end

//communnication

$(".platform_communication_testi_msg li").each(function(i) {
     $(this).attr("id","commun_testi_msg"+(i+1));
    });
	
	$(".platform_examples .platform_communication_work").each(function(i) {
     $(this).attr("rel","commun_testi_msg"+(i+1));
    });

      $(".platform_examples .platform_communication_work").hover(function() {
		  $(".platform_examples .platform_communication_work").removeClass('active_communication_platform');
		  $(".platform_communication_testi_msg li").removeClass('platform_communication_testi_msg_active');
		  $(".platform_communication_testi_msg li").hide();
		  var selected_tab = $(this).attr("rel");
		  $("#"+selected_tab).addClass("platform_communication_testi_msg_active");
		  $(this).addClass("active_communication_platform");
		  $("#"+selected_tab).show();
		  return false;
		});

//communnication ends

//iot

$(".platform_iot_testi_msg li").each(function(i) {
     $(this).attr("id","iot_testi_msg"+(i+1));
    });
	
	$(".platform_examples .platform_iot_work").each(function(i) {
     $(this).attr("rel","iot_testi_msg"+(i+1));
    });

      $(".platform_examples .platform_iot_work").hover(function() {
		  $(".platform_examples .platform_iot_work").removeClass('active_iot_platform');
		  $(".platform_iot_testi_msg li").removeClass('platform_iot_testi_msg_active');
		  $(".platform_iot_testi_msg li").hide();
		  var selected_tab = $(this).attr("rel");
		  $("#"+selected_tab).addClass("platform_iot_testi_msg_active");
		  $(this).addClass("active_iot_platform");
		  $("#"+selected_tab).show();
		  return false;
		});

//iot ends

/*@@@@@@@@@@@@@@@@@@@@@@@@@@ platform section ends @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/  

/*@@@@@@@@@@@@@@@@@@@@@@@@@@ About Page New @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/ 

 $(".about_events_tab li").click(function() {
		  $(".about_events_tab li").removeClass('about_events_tab_active');
		  //$(".j_clients_testi_img li").removeClass('about_events_tab_active');
		  $(".about_events_tab_data").hide();
		  var selected_tab = $(this).attr("rel");
		  //$("#"+selected_tab).addClass("j_clients_testi_msg_active");
		  $(this).addClass("about_events_tab_active");
		  $("."+selected_tab).show();
		  return false;
	}); 
 /*@@@@@@@@@ END About Page New @@@@@@@@@@@@@*/  
 
});  // ready fn() end...

function slideup(id) {
    $( 'html, body' ).animate({ scrollTop: $( '#' + id ).offset().top - 65}, 800 );
	 
  }
	 
  
// Change color of the input field on onClick. 
  function changecolor(id)
  {
	document.getElementById(id).style.backgroundColor='white';
  }
  
   function colorchange(id)
  {
	document.getElementById(id).style.backgroundColor='transparent';
  }


/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ /// Blog Page $   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
$(document).ready(function() {
	$('input#psdSubmit').click(function() {
					// Variable declaration
			  var PSDError = false;
			  var letters = /^[A-Za-z_ ]+$/;
			  var brName = document.tForm.brName.value;
			  var brEmail = document.tForm.brEmail.value;
			  var atpos=brEmail.indexOf("@");
			  var dotpos=brEmail.lastIndexOf(".");	
           
		    if(brName.length == 0){
				var PSDError = true;
				document.getElementById("brName").style.backgroundColor="#F8CCCC";
                return false;
			     } 
				 
					  if(brName.match(letters)) 
					  { 
					  document.getElementById("brName").style.backgroundColor="white";
					  } 
					  else 
					  { 
					  var PSDError = true;
					  document.getElementById("brName").style.backgroundColor="#F8CCCC";
					  return false; 
					  } 
					
					  
			if(brEmail==0)
			{
			document.getElementById("brEmail").style.backgroundColor="#F8CCCC";
			return false;
			}
			
				  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=brEmail.length)
					{
					var PSDError = true;
					document.getElementById("brEmail").style.backgroundColor="#F8CCCC";
					return false;
					}
					if(brEmail!=0)
					{
					  document.getElementById("brEmail").style.backgroundColor="white";
					}		
					psdDownload();
					window.top.location = 'wp-content/uploads/2014/09/iOS8-GUI-PSD.zip';
					$('input#psdSubmit').attr('value', 'Downloaded');
        			$('input#psdSubmit').attr('disabled',true);
			 if(PSDError == false){
				//alert("Sucecss");
			  $(".submit").click(function(){
			  this.value='Downloaded';
			  this.disabled='disabled';
			  });

	 } 
	});

$('input#brSubmit').click(function() {
					// Variable declaration
			  // Variable declaration
            var tError = false;
			var letters = /^[A-Za-z_ ]+$/;
            var tName = document.tForm.tName.value;
			var tEmail = document.tForm.tEmail.value;
			var atpos=tEmail.indexOf("@");
            var dotpos=tEmail.lastIndexOf(".");
         	// Form field validation
            if(tName.length == 0){
				var tError = true;
				document.getElementById("tName").style.backgroundColor="#F8CCCC";
                return false;
			     } 
				 
					  if(tName.match(letters)) 
					  { 
					  document.getElementById("tName").style.backgroundColor="white";
					  } 
					  else 
					  { 
					  var tError = true;
					  document.getElementById("tName").style.backgroundColor="#F8CCCC";
					  return false; 
					  } 
					
					  
			if(tEmail==0)
			{
			document.getElementById("tEmail").style.backgroundColor="#F8CCCC";
			return false;
			}
			
				  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=tEmail.length)
					{
					var tError = true;
					document.getElementById("tEmail").style.backgroundColor="#F8CCCC";
					return false;
					}
					if(tEmail!=0)
					{
					  document.getElementById("tEmail").style.backgroundColor="white";
					}
				
					taxiDownload();
					window.top.location = 'download/taxi-hawk-brochure.pdf';
					$('input#brSubmit').attr('value', 'Submitting ..');
        			$('input#brSubmit').attr('disabled',true);
			 if(tError == false){
				
				$(".submit").click(function(){
				this.value='Submitting ..';
				this.disabled='disabled';
			});

	 	} 
	});

});

function psdDownload() {
	var name = $("#brName").val();
	var email = $("#brEmail").val();
    var pageurl = window.location.href;
   	var pagetitle = $(document).find("title").text();
	
	$.ajax({
		type: 'post',
		url: '/wp-content/themes/wpclicklabs/cta/cta.php',
		data: {
			brName: name,
			brEmail: email,
			pageurl: pageurl,
            pagetitle:pagetitle,
			formid:1,
			type:3
			},
		dataType: 'JSON',
		success: function(data) {
			console.log(data);
			console.log(data['message']);
		},
	});
	return true;
}

function taxiDownload() {
	var name = $("#tName").val();
	var email = $("#tEmail").val();
    var pageurl = window.location.href;
   	var pagetitle = $(document).find("title").text();
	
	$.ajax({
		type: 'post',
		url: '/wp-content/themes/wpclicklabs/cta/cta.php',
		data: {
			brName: name,
			brEmail: email,
			pageurl: pageurl,
            pagetitle:pagetitle,
			formid:1,
			type:4
			},
		dataType: 'JSON',
		success: function(data) {
			console.log(data);
			console.log(data['message']);
		},
	});
	return true;
}

/* @@@@@@@@@@@@ /// Blog Page $   @@@@@@@@@@@@@@@@ */

/* @@@@@@@@@@@@@ /// Exit Intent $   @@@@@@@@@@@@@@@@@@@ */

$(document).ready(function() {
     $('#JgExitSubmit').on('click', function() {
  var ExitEmail = $("#lpExitEmail").val();
  var beauty_page = $(".beauty_page").val();
  var atpos=ExitEmail.indexOf("@");
  var dotpos=ExitEmail.lastIndexOf(".");
  if(ExitEmail==0)
            {
              $('#lpExitEmail').css('border','1px solid red');
              //$("#txwLgErrorMsg").html("Please fill Email ID");
            return false;
            }
            
                if (atpos<1 || dotpos<atpos+2 || dotpos+2>=ExitEmail.length)
                  {
                  var Error = true;
                   $('#lpExitEmail').css('border','1px solid red');
                  return false;
                  }
                  if(ExitEmail!=0)
                  {
                $('#lpExitEmail').css('border','1px solid #cdcdcd');
                  }
      exit_sendmail();
      if(beauty_page=="true"){
        ga('send', 'event', { eventCategory: 'Exit_intent', eventAction: 'Button_click', eventLabel: 'Submit'});
      }
      $("#lpExitEmail").attr({"value":""});
      window.location='thank-you/index.html';
         return true;
     });
});


function exit_sendmail() {
  var lpExitEmail = $("#lpExitEmail").val();
    var url = window.location.href;
  var Source = $(".Source").val();
  var Medium = $(".Medium").val();
  var Campaign = $(".Campaign").val();
  var KeyWord = $(".KeyWord").val();
  var Cookie_Country = $(".Cookie_Country").val();
  var beauty_page = $(".beauty_page").val();
  var type = 6;
    if(beauty_page == "" || beauty_page == null){
        type=7;
    }
 
  $.ajax({
    type: 'post',
    url: '/wp-content/themes/wpclicklabs/cta/cta.php',
    data: {
      email:lpExitEmail,
      pageurl: url,
      Source:Source,
      Medium:Medium,
      Campaign:Campaign,
      KeyWord:KeyWord,
      Cookie_Country:Cookie_Country,
      type:type
      },
    dataType: 'JSON',
    success: function(data) {
     // console.log(data);
      console.log(data['message']);
    },
  });
  return true;
}

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ /// Exit Intent $   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

/*Navigation*/
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.customeMenu #main-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        //console.log($(currLink.attr("href")));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.customeMenu #main-nav li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}