;(function ($) { $(document).ready(function () {

CP = {};

CP.animationTime = 250;
CP.el = {
	secChangelog: $('#changelog'),
	changelogVersions: $('div.changelogVersion'),
};
CP.el.changelogVersions.filter('.closed').find('> ul, > p').hide();
CP.el.changelogToggles = CP.el.changelogVersions.find('.toggle').css('display', 'inline-block');
CP.el.changelogToggles.on('click', function() {
	var t = $(this),
		otherVersions = CP.el.changelogVersions.not(t.parents('div.changelogVersion')).filter('.open'),
		curIcon = t.attr('data-icon'),
		closedIcon = t.attr('data-icon-closed'),
		openIcon = t.attr('data-icon-open');

	otherVersions.removeClass('open').addClass('closed').find('> ul, > p').slideUp(CP.animationTime).fadeOut(CP.animationTime);
	otherVersions.find('.toggle').each(function() {
		$(this).attr('data-icon', $(this).attr('data-icon-closed'));
	});

	t.parents('div.changelogVersion').toggleClass('closed open').find('> ul, > p').slideFadeToggle(CP.animationTime);
	
	if (t.parents('div.changelogVersion').hasClass('closed')) {
		t.attr('data-icon', closedIcon);
	} else {
		t.attr('data-icon', openIcon);
	};
});



$.fn.slideFadeToggle = function(speed, easing, callback) {
	return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
};

}); })(jQuery); //END document.ready