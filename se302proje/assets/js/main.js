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

			//program


							'use strict';

							function _toConsumableArray(arr) {
                if (Array.isArray(arr)) {
                  for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                    arr2[i] = arr[i];
                  }
                  return arr2;
                }
                else {
                  return Array.from(arr);
                }
              }



							(function () {
							  // Utils
							  var createText = document.createTextNode.bind(document);
							  var createEl = document.createElement.bind(document);

							  // Constants
							  var weekJSON = [
    {
        "week": {
            "id": 5,
            "gen_plan_id": 5,
            "sequence": 1,
            "name": "Week One",
            "description": null,
            "created_at": "2017-06-20 21:58:24",
            "updated_at": "2017-06-20 21:58:24"
        },
        "days": [
            {
                "day": {
                    "id": 32,
                    "gen_week_id": 5,
                    "sequence": 0,
                    "name": "Day One",
                    "description": null,
                    "is_refeed": 0,
                    "created_at": "2017-06-20 21:58:24",
                    "updated_at": "2017-06-20 21:58:24"
                },
                "meals": [
                    {
                        "meal": {
                            "id": 109,
                            "gen_day_id": 32,
                            "meal_id": 6,
                            "sequence": 0,
                            "type": "Sabah"

                        },

                    },
                    {
                        "meal": {
                            "id": 110,
                            "gen_day_id": 32,
                            "meal_id": 19,
                            "sequence": 1,
                            "type": "Ara Öğün 1"

                        },

                    },
                    {
                        "meal": {
                            "id": 111,
                            "gen_day_id": 32,
                            "meal_id": 7,
                            "sequence": 2,
                            "type": "Öğle"

                        },

                    },
                    {
                        "meal": {
                            "id": 112,
                            "gen_day_id": 32,
                            "meal_id": 12,
                            "sequence": 3,
                            "type": "Ara Öğün 2"

                        },

                    },
                    {
                        "meal": {
                            "id": 113,
                            "gen_day_id": 32,
                            "meal_id": 8,
                            "sequence": 4,
                            "type": "Akşam"

                        },

                    },
                    {
                        "meal": {
                            "id": 114,
                            "gen_day_id": 32,
                            "meal_id": 23,
                            "sequence": 5,
                            "type": "Ara Öğün 3"

                        },

                    }
                ]
            },
            {
                "day": {
                    "id": 33,
                    "gen_week_id": 5,
                    "sequence": 1,
                    "name": "Day Two",
                    "description": null,
                    "is_refeed": 0,
                    "created_at": "2017-06-20 21:58:24",
                    "updated_at": "2017-06-20 21:58:24"
                },
                "meals": [
                    {
                        "meal": {
                            "id": 115,
                            "gen_day_id": 33,
                            "meal_id": 20,
                            "sequence": 0,
                            "type": "Sabah"

                        },

                    },
                    {
                        "meal": {
                            "id": 116,
                            "gen_day_id": 33,
                            "meal_id": 22,
                            "sequence": 1,
                            "type": "Ara Öğün 1",

                        },

                    },
                    {
                        "meal": {
                            "id": 117,
                            "gen_day_id": 33,
                            "meal_id": 7,
                            "sequence": 2,
                            "type": "Öğle"

                        },

                    },
                    {
                        "meal": {
                            "id": 118,
                            "gen_day_id": 33,
                            "meal_id": 15,
                            "sequence": 3,
                            "type": "Ara Öğün 2"

                        },

                    },
                    {
                        "meal": {
                            "id": 119,
                            "gen_day_id": 33,
                            "meal_id": 8,
                            "sequence": 4,
                            "type": "Akşam"

                        },

                    },
                    {
                        "meal": {
                            "id": 120,
                            "gen_day_id": 33,
                            "meal_id": 18,
                            "sequence": 5,
                            "type": "Ara Öğün 3"

                        },
                        //workout
                    }
                ]
            },
            {
                "day": {
                    "id": 34,
                    "gen_week_id": 5,
                    "sequence": 2,
                    "name": "Day Three",
                    "description": null,
                    "is_refeed": 0,
                    "created_at": "2017-06-20 21:58:24",
                    "updated_at": "2017-06-20 21:58:25"
                },
                "meals": [
                    {
                        "meal": {
                            "id": 121,
                            "gen_day_id": 34,
                            "meal_id": 21,
                            "sequence": 0,
                            "type": "Sabah"

                        },
                        //workout
                    },
                    {
                        "meal": {
                            "id": 122,
                            "gen_day_id": 34,
                            "meal_id": 17,
                            "sequence": 1,
                            "type": "Ara Öğün 1"
                        },
                        //workout
                    },
                    {
                        "meal": {
                            "id": 123,
                            "gen_day_id": 34,
                            "meal_id": 6,
                            "sequence": 2,
                            "type": "Öğle"
                        },
                        //workout
                    },
                    {
                        "meal": {
                            "id": 124,
                            "gen_day_id": 34,
                            "meal_id": 16,
                            "sequence": 3,
                            "type": "Ara Öğün 2"
                        },
                        //workout
                    },
                    {
                        "meal": {
                            "id": 125,
                            "gen_day_id": 34,
                            "meal_id": 8,
                            "sequence": 4,
                            "type": "Akşam"
                        },
                        //workout
                    },
                    {
                        "meal": {
                            "id": 126,
                            "gen_day_id": 34,
                            "meal_id": 12,
                            "sequence": 5,
                            "type": "Ara Öğün 3"
                        },
                        //workout
                    }
                ]
            },
            {
                "day": {
                    "id": 35,
                    "gen_week_id": 5,
                    "sequence": 3,
                    "name": "Day Four",
                    "description": null,
                    "is_refeed": 0,
                    "created_at": "2017-06-20 21:58:25",
                    "updated_at": "2017-06-20 21:58:25"
                },
                "meals": [
                    {
                        "meal": {
                            "id": 127,
                            "gen_day_id": 35,
                            "meal_id": 19,
                            "sequence": 0,
                            "type": "Sabah"
                        },
                        //workout
                    },
                    {
                        "meal": {
                            "id": 128,
                            "gen_day_id": 35,
                            "meal_id": 23,
                            "sequence": 1,
                            "type": "Ara Öğün 1"
                        },
                        //workout
                    },
                    {
                        "meal": {
                            "id": 129,
                            "gen_day_id": 35,
                            "meal_id": 7,
                            "sequence": 2,
                            "type": "Öğle"
                        },
                      	//workout
                    },
                    {
                        "meal": {
                            "id": 130,
                            "gen_day_id": 35,
                            "meal_id": 22,
                            "sequence": 3,
                            "type": "Ara Öğün 2"
                        },
                        //workout
                    },
                    {
                        "meal": {
                            "id": 131,
                            "gen_day_id": 35,
                            "meal_id": 6,
                            "sequence": 4,
                            "type": "Akşam"
                        },
                      	//workout
                    },
                    {
                        "meal": {
                            "id": 132,
                            "gen_day_id": 35,
                            "meal_id": 15,
                            "sequence": 5,
                            "type": "Ara Öğün 3"
                        },
                        //workout
                    }
                ]
            },
            {
                "day": {
                    "id": 36,
                    "gen_week_id": 5,
                    "sequence": 4,
                    "name": "Day Five",
                    "description": null,
                    "is_refeed": 0,
                    "created_at": "2017-06-20 21:58:25",
                    "updated_at": "2017-06-20 21:58:25"
                },
                "meals": [
                    {
                        "meal": {
                            "id": 133,
                            "gen_day_id": 36,
                            "meal_id": 20,
                            "sequence": 0,
                            "type": "Sabah"
                        },
                        //workout
                    },
                    {
                        "meal": {
                            "id": 134,
                            "gen_day_id": 36,
                            "meal_id": 18,
                            "sequence": 1,
                            "type": "Ara Öğün 1"
                        },
                        //workout
                    },
                    {
                        "meal": {
                            "id": 135,
                            "gen_day_id": 36,
                            "meal_id": 7,
                            "sequence": 2,
                            "type": "Öğle"
                        },
                        //workout
                    },
                    {
                        "meal": {
                            "id": 136,
                            "gen_day_id": 36,
                            "meal_id": 12,
                            "sequence": 3,
                            "type": "Ara Öğün 2"
                        },
                        //workout
                    },
                    {
                        "meal": {
                            "id": 137,
                            "gen_day_id": 36,
                            "meal_id": 8,
                            "sequence": 4,
                            "type": "Akşam"
                        },
                        //workout
                    },
                    {
                        "meal": {
                            "id": 138,
                            "gen_day_id": 36,
                            "meal_id": 16,
                            "sequence": 5,
                            "type": "Ara Öğün 3"
                        },
                        //workout
                    }
                ]
            },
            {
                "day": {
                    "id": 37,
                    "gen_week_id": 5,
                    "sequence": 5,
                    "name": "Day Six",
                    "description": null,
                    "is_refeed": 0,
                    "created_at": "2017-06-20 21:58:25",
                    "updated_at": "2017-06-20 21:58:25"
                },
                "meals": [
                    {
                        "meal": {
                            "id": 139,
                            "gen_day_id": 37,
                            "meal_id": 21,
                            "sequence": 0,
                            "type": "Sabah"
                        },
                        //workout
                    },
                    {
                        "meal": {
                            "id": 140,
                            "gen_day_id": 37,
                            "meal_id": 17,
                            "sequence": 1,
                            "type": "Ara Öğün 1"
                        },
                        //workout
                    },
                    {
                        "meal": {
                            "id": 141,
                            "gen_day_id": 37,
                            "meal_id": 6,
                            "sequence": 2,
                            "type": "Öğle"
                        },
                      //workout
                    },
                    {
                        "meal": {
                            "id": 142,
                            "gen_day_id": 37,
                            "meal_id": 22,
                            "sequence": 3,
                            "type": "Ara Öğün 2"
                        },
                        //workout
                    },
                    {
                        "meal": {
                            "id": 143,
                            "gen_day_id": 37,
                            "meal_id": 8,
                            "sequence": 4,
                            "type": "Akşam"
                        },
                        //workout
                    },
                    {
                        "meal": {
                            "id": 144,
                            "gen_day_id": 37,
                            "meal_id": 19,
                            "sequence": 5,
                            "type": "Ara Öğün 3"
                        },
                        //workout
                    }
                ]
            },
            {
                "day": {
                    "id": 38,
                    "gen_week_id": 5,
                    "sequence": 6,
                    "name": "Day Seven",
                    "description": null,
                    "is_refeed": 0,
                    "created_at": "2017-06-20 21:58:25",
                    "updated_at": "2017-06-20 21:58:25"
                },
                "meals": [
                    {
                        "meal": {
                            "id": 145,
                            "gen_day_id": 38,
                            "meal_id": 7,
                            "sequence": 0,
                            "type": "Sabah"
                        },
                        //workout
                    },
                    {
                        "meal": {
                            "id": 146,
                            "gen_day_id": 38,
                            "meal_id": 23,
                            "sequence": 1,
                            "type": "Ara Öğün 1"
                        },
                        //workout
                    },
                    {
                        "meal": {
                            "id": 147,
                            "gen_day_id": 38,
                            "meal_id": 6,
                            "sequence": 2,
                            "type": "Öğle"
                        },
                        //workout
                    },
                    {
                        "meal": {
                            "id": 148,
                            "gen_day_id": 38,
                            "meal_id": 15,
                            "sequence": 3,
                            "type": "Ara Öğün 2"
                        },
                        //workout
                    },
                    {
                        "meal": {
                            "id": 149,
                            "gen_day_id": 38,
                            "meal_id": 8,
                            "sequence": 4,
                            "type": "Akşam"
                        },
                        //workout
                    },
                    {
                        "meal": {
                            "id": 150,
                            "gen_day_id": 38,
                            "meal_id": 20,
                            "sequence": 5,
                            "type": "Ara Öğün 3"
                        },
                        //workout
                    }
                ]
            }

        ]
    }
];
							  // console.log(weekJSON);

							  var noOfWeeks = weekJSON.length;
							  var noOfDays = weekJSON[0].days.length;
							  var noOfMeals = weekJSON[0].days[0].meals.length;
							  var weekClass = 'week';
							  var dayClass = 'day';
							  var mealClass = 'meal';
							  var selectedClass = 'selected';
							  var selectedMealClass = 'selectedMeal';

							  var bcWeekClass = 'bcWeek';

							  var itemRowClass = 'item-row';



							  // Variables - Determines currently selected input
							  // with respect to type.
							  var weekSelected = 0;
							  var daySelected = 0;
							  var mealSelected = 0;

							  // Methods
							  function handleItemChange(event, value, index) {
							    var siblings = event.target.parentNode.children;
							    switch (index) {
							      case 1:
							        daySelected = value;
							      case 2:
							        mealSelected = value;
							    }
							    clearClass(siblings, selectedClass);
							    addClass(event.target, selectedClass);
							    modifySelections(value, index);
							    if (index === 2) {
								    var visibleDivs = document.getElementsByClassName(selectedMealClass);
								    [].forEach.call(visibleDivs, function (el) {
                      console.log(el.classList);
								      el.classList.remove(selectedMealClass);
								    });
                    var selectedDayDiv = document.getElementById('panel_container_day_' + daySelected);
								    var selectedMealDiv = document.getElementById('collapse_panel_day_' + daySelected + '_meal_' + mealSelected);
								    var userPrompt = document.getElementById('user_select_prompt');
								    selectedMealDiv.classList.add(selectedMealClass);
                    selectedDayDiv.classList.add(selectedClass);
								    userPrompt.classList.add('invisible');
									}
								else {
								    var visibleDivs = document.getElementsByClassName(selectedMealClass);
								    [].forEach.call(visibleDivs, function (el) {
								      el.classList.remove(selectedMealClass);
								    });
                    var visibleDay = document.getElementsByClassName(selectedClass)[index];
                    visibleDay.classList.remove(selectedClass);
                    addClass(event.target, selectedClass);
								    var userPrompt = document.getElementById('user_select_prompt');
								    userPrompt.classList.remove('invisible');
									}
								}

							  function clearClass(elements, classToRemove) {
							    return [].concat(_toConsumableArray(elements)).map(function (el) {
							      return el.classList.remove(classToRemove), el;
							    });
							  }

							  function addClass(element, classToAdd) {
							    return element.classList.add(classToAdd);
							  }

							  function modifySelections(value, index) {
							    if (index === 0) {
							      noOfDays = weekJSON[value].days.length;
							      noOfMeals = weekJSON[weekSelected].days[value].meals.length;
							      renderSelectors('days');
							    }
							    if (index === 1) {
							      noOfMeals = weekJSON[weekSelected].days[value].meals.length;
							      renderSelectors('meals');
							    }
							  }

							  //
							  // Let's begin
							  var component_switcher = document.getElementById('component_switcher');

							  // var weeks = createEl('div');
							  var days = createEl('div');
							  var meals = createEl('div');
							  var bcContainer = createEl('div');

							  // Create weekdays

// 							  var _loop = function _loop(i) {
// 							    var newWeek = createEl('div');
// 							    newWeek.addEventListener('click', function (event) {
// 							      return handleItemChange(event, i, 0);
// 							    });
// 							    newWeek.classList.add(weekClass);
// 							    newWeek.appendChild(createText(i + 1));
// 							    weeks.classList.add(itemRowClass);
// 							    weeks.appendChild(newWeek);
// 							  };

// 							  for (var i = 0; i < noOfWeeks; i++) {
// 							    _loop(i);
// 							  }

							  // Create program days

							  var _loop2 = function _loop2(i) {
							    var newDay = createEl('div');
							    newDay.addEventListener('click', function (event) {
							      return handleItemChange(event, i, 1);
							    });
							    newDay.classList.add(dayClass);
							    newDay.appendChild(createText(i + 1));
							    days.classList.add(itemRowClass);
							    days.appendChild(newDay);
							  };

							  for (var i = 0; i < noOfDays; i++) {
							    _loop2(i);
							  }

							  // Create program days

							  var _loop3 = function _loop3(i) {
							    var newMeal = createEl('div');
							    newMeal.addEventListener('click', function (event) {
							      return handleItemChange(event, i, 2);
							    });
							    newMeal.classList.add(mealClass);
							    newMeal.appendChild(createText(weekJSON[0].days[i].meals[i].meal.type));
							    meals.classList.add(itemRowClass);
							    meals.appendChild(newMeal);
							  };

							  for (var i = 0; i < noOfMeals; i++) {
							    _loop3(i);
							  }

							  // Create recipe breadcrumbs
							  // var bcWeek = createEl('div');


							  // bcWeek.appendChild(createText('Week >'));



							  // bcWeek.classList.add(bcWeekClass);


							  // bcContainer.appendChild(bcWeek);


							  // Create labels
							  // var weekLabel = createText('Week');
							  var dayLabel = createText('Gün');
							  var workoutLabel = createText('Öğün');

							  // component_switcher.appendChild(weekLabel);
							  // component_switcher.appendChild(weeks);
							  component_switcher.appendChild(dayLabel);
							  component_switcher.appendChild(days);
							  component_switcher.appendChild(workoutLabel);
							  component_switcher.appendChild(meals);
							  component_switcher.appendChild(bcContainer);

							  function renderSelectors(option) {
							    if (option === 'days') {
							      while (days.firstChild) {
							        days.removeChild(days.firstChild);
							      } // Create program days

							      var _loop4 = function _loop4(i) {
							        var newDay = createEl('div');
							        newDay.addEventListener('click', function (event) {
							          return handleItemChange(event, i, 1);
							        });
							        newDay.classList.add(dayClass);
							        newDay.appendChild(createText(i + 1));
							        days.appendChild(newDay);
							      };

							      for (var i = 0; i < noOfDays; i++) {
							        _loop4(i);
							      }
							    }

							    if (option === 'meals') {
							      while (meals.firstChild) {
							        meals.removeChild(meals.firstChild);
							      } // Create program days

							      var _loop5 = function _loop5(i) {
							        var newMeal = createEl('div');
							        newMeal.addEventListener('click', function (event) {
							          return handleItemChange(event, i, 2);
							        });
							        newMeal.classList.add(mealClass);
							        newMeal.appendChild(createText(weekJSON[0].days[i].meals[i].meal.type));
							        meals.appendChild(newMeal);
							      };

							      for (var i = 0; i < noOfMeals; i++) {
							        _loop5(i);
							      }
							    }
							  }
							})();




			//program bitis




			//Create Program buradan

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
