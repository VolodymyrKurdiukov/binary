//burger
$('.nav-header__icon').click(function (event) {
	$(this).toggleClass('active');
	$('.nav-header__menu').toggleClass('active');
	if ($(this).hasClass('active')) {
		$('body').data('scroll', $(window).scrollTop());
	}
	$('body').toggleClass('lock');
	if (!$(this).hasClass('active')) {
		$('body,html').scrollTop(parseInt($('body').data('scroll')));
	}
});
//=====================================================================================================================

//ibg
function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}
ibg();
//=====================================================================================================================

// tabs
$(document).ready(function () {
	$('ul.news-tabs').on('click', 'li:not(.news-tab__active)', function () {
		$(this)
			.addClass('news-tab__active').siblings().removeClass('news-tab__active')
			.closest('.news-body').find('.news-content').removeClass('news-content__active').eq($(this).index()).addClass('news-content__active');
	});
});
//=====================================================================================================================

//scroll main_bg
$(window).scroll(function (event) {
	var s = 0 - $(this).scrollTop() / 3;
	$('.main__img').css('transform', 'translate3d(0, ' + s + 'px, 0)');
});

//scroll main_bg
$(window).resize(function (event) {
	main();
});
function main() {
	var h = $(window).outerHeight();
	$('.main').css('min-height', h);
}
main();
//=====================================================================================================================

//goto block
$('.goto').click(function () {
	var el = $(this).attr('href').replace('#', '');
	var offset = 0;
	$('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });
});

