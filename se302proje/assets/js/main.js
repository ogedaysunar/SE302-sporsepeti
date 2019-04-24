/*
	Editorial by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$head = $('head'),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ],
			'xlarge-to-max':    '(min-width: 1681px)',
			'small-to-xlarge':  '(min-width: 481px) and (max-width: 1680px)'
		});

	// Stops animations/transitions until the page has ...

		// ... loaded.
			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-preload');
				}, 100);
			});

		// ... stopped resizing.
			var resizeTimeout;

			$window.on('resize', function() {

				// Mark as resizing.
					$body.addClass('is-resizing');

				// Unmark after delay.
					clearTimeout(resizeTimeout);

					resizeTimeout = setTimeout(function() {
						$body.removeClass('is-resizing');
					}, 100);

			});

	// Fixes.

		// Object fit images.
			if (!browser.canUse('object-fit')
			||	browser.name == 'safari')
				$('.image.object').each(function() {

					var $this = $(this),
						$img = $this.children('img');

					// Hide original image.
						$img.css('opacity', '0');

					// Set background.
						$this
							.css('background-image', 'url("' + $img.attr('src') + '")')
							.css('background-size', $img.css('object-fit') ? $img.css('object-fit') : 'cover')
							.css('background-position', $img.css('object-position') ? $img.css('object-position') : 'center');

				});

	// Sidebar.
		var $sidebar = $('#sidebar'),
			$sidebar_inner = $sidebar.children('.inner');

		// Inactive by default on <= large.
			breakpoints.on('<=large', function() {
				$sidebar.addClass('inactive');
			});

			breakpoints.on('>large', function() {
				$sidebar.removeClass('inactive');
			});

		// Hack: Workaround for Chrome/Android scrollbar position bug.
			if (browser.os == 'android'
			&&	browser.name == 'chrome')
				$('<style>#sidebar .inner::-webkit-scrollbar { display: none; }</style>')
					.appendTo($head);

		// Toggle.
			$('<a href="#sidebar" class="toggle">Toggle</a>')
				.appendTo($sidebar)
				.on('click', function(event) {

					// Prevent default.
						event.preventDefault();
						event.stopPropagation();

					// Toggle.
						$sidebar.toggleClass('inactive');

				});

		// Events.

			// Link clicks.
				$sidebar.on('click', 'a', function(event) {

					// >large? Bail.
						if (breakpoints.active('>large'))
							return;

					// Vars.
						var $a = $(this),
							href = $a.attr('href'),
							target = $a.attr('target');

					// Prevent default.
						event.preventDefault();
						event.stopPropagation();

					// Check URL.
						if (!href || href == '#' || href == '')
							return;

					// Hide sidebar.
						$sidebar.addClass('inactive');

					// Redirect to href.
						setTimeout(function() {

							if (target == '_blank')
								window.open(href);
							else
								window.location.href = href;

						}, 500);

				});

			// Prevent certain events inside the panel from bubbling.
				$sidebar.on('click touchend touchstart touchmove', function(event) {

					// >large? Bail.
						if (breakpoints.active('>large'))
							return;

					// Prevent propagation.
						event.stopPropagation();

				});

			// Hide panel on body click/tap.
				$body.on('click touchend', function(event) {

					// >large? Bail.
						if (breakpoints.active('>large'))
							return;

					// Deactivate.
						$sidebar.addClass('inactive');

				});

		// Scroll lock.
		// Note: If you do anything to change the height of the sidebar's content, be sure to
		// trigger 'resize.sidebar-lock' on $window so stuff doesn't get out of sync.

			$window.on('load.sidebar-lock', function() {

				var sh, wh, st;

				// Reset scroll position to 0 if it's 1.
					if ($window.scrollTop() == 1)
						$window.scrollTop(0);

				$window
					.on('scroll.sidebar-lock', function() {

						var x, y;

						// <=large? Bail.
							if (breakpoints.active('<=large')) {

								$sidebar_inner
									.data('locked', 0)
									.css('position', '')
									.css('top', '');

								return;

							}

						// Calculate positions.
							x = Math.max(sh - wh, 0);
							y = Math.max(0, $window.scrollTop() - x);

						// Lock/unlock.
							if ($sidebar_inner.data('locked') == 1) {

								if (y <= 0)
									$sidebar_inner
										.data('locked', 0)
										.css('position', '')
										.css('top', '');
								else
									$sidebar_inner
										.css('top', -1 * x);

							}
							else {

								if (y > 0)
									$sidebar_inner
										.data('locked', 1)
										.css('position', 'fixed')
										.css('top', -1 * x);

							}

					})
					.on('resize.sidebar-lock', function() {

						// Calculate heights.
							wh = $window.height();
							sh = $sidebar_inner.outerHeight() + 30;

						// Trigger scroll.
							$window.trigger('scroll.sidebar-lock');

					})
					.trigger('resize.sidebar-lock');

				});

	// Menu.
		var $menu = $('#menu'),
			$menu_openers = $menu.children('ul').find('.opener');






			//Create Program buradan

<<<<<<< HEAD
=======
			var state = {
	items: []
};

function addItem (state, item) {
	state.items.push({
		name: item,
	});
}

function findItemIndex(state, item) {
	for(var i = 0; i < state.items.length; i++) {
		if (state.items[i].name === item){
			return i;
		}
	}
}

function updateStatus(state, element) {
	// get item name
	var itemName = element.closest('li').children('.meal-item').text();
	//find item in state.items
	var itemIndex = findItemIndex(state, itemName);
	// flip checked prop

}

function removeItem(state, element) {
	//find item name
	var itemName = element.closest('li').children('.meal-item').text();
	//find item in state.items
	var itemIndex = findItemIndex(state, itemName);
	// remove item from state.items
	state.items.splice(itemIndex, 1);
}



function renderList (state, element, item, action) {
	if (action === 'add') {
		var itemIndex = findItemIndex(state, item);
		var itemsHTML = "<li><span class='meal-item'>" + state.items[itemIndex].name + "</span><div class='meal-item-controls'><button onclick='removeFood(\"" + element + "\")' class='meal-item-delete' style='width: 10%; height: 20px;'><span class='button-label'>delete</span></button></div></li>";
		element.append(itemsHTML);
	} else if (action === 'remove') {
		element.closest('li').remove();
	}
}

$('document').ready(function () {
	$('#js-meal-list-form').submit(function(event) {
    event.preventDefault();
    var itemName = $('#meal-list-entry').val();
    addItem(state, itemName);
    renderList(state, $('.meal-list'), itemName, 'add');
	});



	$('.meal-list').on('click', '.meal-item-delete', function() {
		removeItem(state, $(this));
		renderList(state, $(this), null, 'remove');
	});
});


>>>>>>> da795cf06dbbf4de91f79b91d409f05802f4849a
			// create program bitis



	//rating

	// Globals
var rating = $('.rating');

// Create rating popup
rating.on('click', function(e) {
  var self = $(this),
      userRating = $('<ul />').attr('class', 'user-rating animate');

  // Create stars if not already on page
  if (!self.find('.user-rating').length) {
    for (var i = 0; i < 5; i++) {
      userRating.prepend('<li data-rating="' + (i + 1) + '"><i class="fa fa-star"></i></li>');
    };

    // Add stars to page
    userRating.appendTo(self);
    setTimeout(function() {
      userRating.removeClass('animate');
    }, 50);
  };

  e.preventDefault();
  e.stopPropagation();
});

// Select rating
rating.on('click', '.user-rating li', function() {
  var self = $(this),
      rateVal = self.data('rating');

  setTimeout(function() {
    removeRating(rateVal);
  }, 300);
});

// Remove rating popup
function removeRating(rateVal) {
  rating.children('.user-rating').addClass('animate');
  setTimeout(function() {
    rating.children('.user-rating').remove();
  }, 350);

  if (rateVal) {
	  // Ajax submit here

    rating.addClass('hide');
    setTimeout(function() {
      rating.text(rateVal).removeClass('hide');
    }, 150);
  };
};

$(document).on('click', function() {
  if (rating.children('.user-rating').length) {
    removeRating();
  };
});

		// Openers.
			$menu_openers.each(function() {

				var $this = $(this);

				$this.on('click', function(event) {

					// Prevent default.
						event.preventDefault();

					// Toggle.
						$menu_openers.not($this).removeClass('active');
						$this.toggleClass('active');

					// Trigger resize (sidebar lock).
						$window.triggerHandler('resize.sidebar-lock');

				});

			});

})(jQuery);
