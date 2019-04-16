$(document).ready(function() {
	
	 $('header').stickyNavbar({
	 	activeClass: "active",
	 	animDuration: 800,
	 	startAt: 88,
	 	mobile: true,
	 	stickyModeClass: "sticky",
    	unstickyModeClass: "unsticky"
	 });

	$('#buy select').select2({
		minimumResultsForSearch: Infinity
	});

	var clock;

	clock = $('.clock').FlipClock({
		clockFace: 'HourlyCounter', //вид счетчика (с количеством часов)
		autoStart: true, //отключить автозапуск
		countdown: true, //отсчет назад
		language:'ru-ru'
	});

	var now = new Date();
	var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
	var diff = tomorrow - now;

	clock.setTime(Math.round(diff / 1000)); // точка начала отсчета
	clock.setCountdown(true);
	clock.start();

	$("a.game-aksia").click(function () {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
		return false;
	});

	$(".no-results h6 a").click(function () {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
		return false;
	});
	
	$(".li-drop span").click(function() {
		if( $(".li-drop-podmenu").is(":hidden") ){
			$(".li-drop-podmenu").slideDown(400);
			$(this).parent("li").addClass("li-drop-clicked");
		}
		else if( $(".li-drop-podmenu").is(":visible") ){
			$(".li-drop-podmenu").slideUp(300);
			$(this).parent("li").removeClass("li-drop-clicked");
		}
	});

	$(".buter").click(function(){
		if( $("header .menu").is(":hidden") ){
			$("header .menu").slideDown(400);
			$(this).addClass("buter-cliked");
		}
		else if( $("header .menu").is(":visible") ){
			$("header .menu").slideUp(300);
			$(this).removeClass("buter-cliked");
		}
	});
	
	$(".my-popover").popover({
		html : true,
		trigger: 'hover',
		content: function() {
			return $(this).parents('.description-list').find( ".my-popover-content" ).html();
		},
		placement: "top"
	});
	
	$('[data-toggle="tooltip"]').tooltip()
	
});
$(window).load(function() {
 //   $('.game-block p').matchHeight();
});

function podmenu970(){
    if ( $(window).width() <= '973' ){
        $('.li-drop-podmenu').hide();
        $(".menu .li-drop").removeClass("li-drop-clicked");
	} 
}

$(window).on('load resize',podmenu970);

function menu970(){
    if ( $(document).width() >'974' ){
        $('header .menu').show();
	} else{
		$('header .menu').hide();
		$(".buter").removeClass("buter-cliked");
	}
}

$(window).on('load resize',menu970);