/* ======================================
-----------------------------------------
	Template Name: Photographer
	Description: Photographer HTML Template
	Author: colorlib
	Author URI: https://www.colorlib.com/
	Version: 1.0
	Created: colorlib
 ---------------------------------------
 =======================================*/


'use strict';

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".header-section").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {

    $('a.page-scroll[href*="#"]:not([href="#"])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top -99)
                }, 1200, "easeInOutExpo");
                return false;
            }
        }
    });

});

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

	/*---------------------
		Instagram slider
	----------------------*/
	$('.instagram-slider').owlCarousel({
		nav: false,
		dots: false,
		loop: true,
		autoplay: true,
		responsive : {
			0 : {
				items: 3,
			},
			480 : {
				items: 4,
				
			},
			768 : {
				items: 5,
			},
			991 : {
				items: 6,
			},
			1200 : {
				items: 7,
			}
		}
	});

	/*---------------
		Masonry
	----------------*/
	var masonryLayout = function () {
		$('.portfolio-grid').masonry({
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer',
			percentPosition: true
		});
	}

	

	/*---------------
		Mixitup
	----------------*/
	masonryLayout();
	if($('.portfolio-gallery').length > 0 ) {
		var containerEl = document.querySelector('.portfolio-gallery');
		var mixer = mixitup(containerEl, {
			callbacks: {
				onMixEnd: function() {
					masonryLayout();
				}
			}
		});
	}
});

(function($) {
	/*------------------
		Navigation
	--------------------*/
	$('.main-menu').slicknav({
		appendTo:'.header-section',
		closedSymbol: '<i class="fa fa-angle-down"></i>',
		openedSymbol: '<i class="fa fa-angle-up"></i>'
	});

	$('.nav-switch-btn').on('click', function() {
		if(localStorage.getItem("navMenu") == null) {
			localStorage.setItem("navMenu", "show");
			$('.main-menu').slideDown(400);
		} else if(localStorage.getItem("navMenu") == "show") {
			localStorage.removeItem("navMenu");
			$('.main-menu').slideUp(400);
		}
	});

	if(localStorage.getItem("navMenu") == "show") {
		$('.main-menu').slideDown(400);
	}
	    //===== Sticky
    
    $(window).on('scroll',function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 90) {
            $(".header-section").removeClass("sticky");
        }else{
            $(".header-section").addClass("sticky");
        }
    });


	/*------------------
		Search model
	--------------------*/
	$('.search-btn').on('click', function() {
		$('.search-model').fadeIn(400);
	});

	$('.search-close-switch').on('click', function() {
		$('.search-model').fadeOut(400,function(){
			$('#search-input').val('');
		});
	});


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Hero Slider
	--------------------*/
	$('.hero-slider').owlCarousel({
		nav: false,
		dots: false,
		loop: true,
		autoplay: true,
		smartSpeed: 1000,
		responsive : {
			0 : {
				items: 1,
			},
			480 : {
				items: 2,
				
			},
			768 : {
				items: 3,
			},
			991 : {
				items: 4,
			},
			1200 : {
				items: 5,
			},
			1400 : {
				items: 7,
			}
		}
	});


	/*----------------------
		Portfolio item size
	------------------------*/
	var PorfolioItemFix = function () {
		$( ".portfolio-item" ).each(function( index ) {
			var portfolioItem = $(this);
			var PIheight = portfolioItem.width();
			portfolioItem.css('height',PIheight);
		});
	}
	PorfolioItemFix();
	$(window).on('resize',function(){
		PorfolioItemFix();
	});


	/*------------------
		Image Popup
	--------------------*/
	$('.img-popup').magnificPopup({
		type: 'image',
		mainClass: 'img-popup-warp',
		removalDelay: 500,
	});
	

	/*------------------
		Progress Bar
	--------------------*/
	$('.progress-bar-style').each(function() {
		var progress = $(this).data("progress");
		var prog_width = progress + '%';
		if (progress <= 100) {
			$(this).append('<div class="bar-inner" style="width:' + prog_width + '"><span>' + prog_width + '</span></div>');
		}
		else {
			$(this).append('<div class="bar-inner" style="width:100%"><span>' + prog_width + '</span></div>');
		}
	});


	/*------------------
		Accordions
	--------------------*/
	$('.panel-link').on('click', function (e) {
		$('.panel-link').parent('.panel-header').removeClass('active');
		var $this = $(this).parent('.panel-header');
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		e.preventDefault();
	});


	/*------------------
		Circle progress
	--------------------*/
	$('.circle-progress').each(function() {
		var cpvalue = $(this).data("cpvalue");
		var cpcolor = $(this).data("cpcolor");
		var cptitle = $(this).data("cptitle");
		var cpid 	= $(this).data("cpid");

		$(this).append('<div class="'+ cpid +'"></div><div class="progress-info"><h2>'+ cpvalue +'%</h2><p>'+ cptitle +'</p></div>');

		if (cpvalue < 100) {

			$('.' + cpid).circleProgress({
				value: '0.' + cpvalue,
				size: 190,
				thickness: 3,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		} else {
			$('.' + cpid).circleProgress({
				value: 1,
				size: 190,
				thickness: 3,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		}

	});


	/*------------------
		Instafeed
	--------------------*/
	var userFeed = new Instafeed({
        get: 'user',
        userId: '19261155319', // User your ID
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '19261155319.1677ed0.3640b426adf9468daaa26b64b1496040', // User your accessToken
		sortBy: 'least-recent',
		limit: 15,
        template: '<div class="instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
	});
	
	if($('#instafeed').length > 0) {
		userFeed.run();
	}
	
})(jQuery);

