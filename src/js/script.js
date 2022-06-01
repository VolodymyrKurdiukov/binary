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
//=====================================================================================================================

//filter
$('.body-portfolio__link').click(function (event) {
	var i = $(this).data('filter');
	if (i == 1) {
		$('.body-portfolio__column').show();
	} else {
		$('.body-portfolio__column').hide();
		$('.body-portfolio__column.f_' + i).show();
	}
	$('.body-portfolio__link').removeClass('active');
	$(this).addClass('active');

	return false;
});
//=====================================================================================================================

//zoom
if ($('.gallery').length > 0) {
	baguetteBox.run('.gallery', {
		// Custom options
	});
}
//=====================================================================================================================


$(document).ready(function () {

	//CHECKBOX
	$.each($('.checkbox'), function (index, val) {
		if ($(this).find('input').prop('checked') == true) {
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.checkbox', function (event) {
		if ($(this).hasClass('active')) {
			$(this).find('input').prop('checked', false);
		} else {
			$(this).find('input').prop('checked', true);
		}
		$(this).toggleClass('active');

		return false;
	});

	//RADIO
	$.each($('.radiobuttons__item'), function (index, val) {
		if ($(this).find('input').prop('checked') == true) {
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.radiobuttons__item', function (event) {
		$(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
		$(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked', false);
		$(this).toggleClass('active');
		$(this).find('input').prop('checked', true);
		return false;
	});
});
