$(document).ready(function() {



	$('.service-item').each(function(i) {
		$(this).find('a').attr('href', '#work_' + i);
		$(this).find('.port_descr').attr('id', 'work_' + i);
	});
	$('.service-item-img').magnificPopup({type:'inline', showCloseBtn: true});



	$(".toggle_mnu").click(function() {
		$(this).toggleClass("on");
		$(".main_mnu").slideToggle();
	});



	$('.section_1 .sect_content .info_item').equalHeights();
	$('.s1_bottom_rectangle .info_item').equalHeights();
	$('.section_3 .sect_content .info_item').equalHeights();
	// $('.cards .card').equalHeights();


	$('.section_4').waypoint(function() {
		$('.section_4 .card').each(function(index){
			var ths = $(this);
			setInterval(function() {
				ths.removeClass('card_off').addClass('card_on');
			}, 200*index);
		});

	}, {
		offset: '35%'
	});


	$('.section_6').waypoint(function() {
		$('.section_6 .team').each(function(index){
			var ths = $(this);
			setInterval(function() {
				ths.removeClass('team_off').addClass('team_on');
			}, 200*index);
		});

	}, {
		offset: '35%'
	});



	var waypointsvg = new Waypoint({

		element: $(".section_5"),
		handler: function(dir) {
			
			if (dir === "down") {

				$(".section_5 .tc_item").each(function(index) {
					var ths = $(this);
					setTimeout(function() {
						var myAnimation = new DrawFillSVG({
							elementId: "tc-svg-" + index
						});
						ths.children(".tc_content").addClass("tc_content_on");
					}, 500*index);
				});

			};
			this.destroy();
		},
		offset: '35%'
	});


	$('.slider').owlCarousel({
		items: 1,
		nav: true,
		navText: '',
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		fluidSpeed: 600,
		autoplaySpeed: 600,
		navSpeed: 600,
		dotsSpeed: 600,
		dragEndSpeed: 600
	});


	$(".main_footer .toggle_mnu").click(function(){
		$("html, body").animate({scrollTop: $(document).height()}, "slow");
		return false;
	});




	$(".main_head .arrow_wrap").click(function(){
		$("html, body").animate({scrollTop: $(".main_head").height()+150}, "slow");
		return false;
	});
	
	$('.main_mnu ul a').mPageScroll2id();

	$(".sect_head h2, .sect_head p, .homesect h3").animated("fadeIn");
	$(".info_item_wrap").animated("zoomIn");

	$('.section_2').waypoint(function() {
		$('.s2_item_wrap').each(function(index){
			var ths = $(this);
			setInterval(function() {
				ths.addClass('on');
			}, 200*index);
		});
			}, {
		offset: '30%'
	});
	$(".slider .slide").animated("rollIn");
	$('.section_8').waypoint(function() {
		$('.s8_item').each(function(index){
			var ths = $(this);
			setInterval(function() {
				ths.addClass('on');
			}, 200*index);
		});
			}, {
		offset: '30%'
	});
	$(".homesect.section_8 .forms").animated("fadeInRight");


	$(".to_top").click(function(){
		$("html, body").animate({scrollTop: 0}, "slow");
		return false;
	});
	//SVG Fallback (для логотипа)
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$(".homesect .sect_bottom .buttons").click(function() {
		$("#callback h4").html($(this).text());
		$("#callback input[name=formname]").val($(this).text());
	}).magnificPopup({
		type: 'inline',
		mainClass: 'mfp-forms'
	});

});