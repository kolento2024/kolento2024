/**
 * Global variables
 */
"use strict";
var isNoviBuilder = window.xMode;
var userAgent = navigator.userAgent.toLowerCase(),
    initialDate = new Date(),

    $document = $(document),
    $window = $(window),
    $html = $("html"),

    isDesktop = $html.hasClass("desktop"),
    isIE = userAgent.indexOf("msie") != -1 ? parseInt(userAgent.split("msie")[1]) : userAgent.indexOf("trident") != -1 ? 11 : userAgent.indexOf("edge") != -1 ? 12 : false,
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    isTouch = "ontouchstart" in window,

    plugins = {
      pointerEvents: isIE < 11 ? "js/pointer-events.min.js" : false,
      bootstrapTooltip: $("[data-toggle='tooltip']"),
      bootstrapTabs: $(".tabs"),
      rdParallax: $(".rd-parallax"),
      rdAudioPlayer: $(".rd-audio"),
      rdVideoPlayer: $(".rd-video-player"),
      responsiveTabs: $(".responsive-tabs"),
      rdNavbar: $(".rd-navbar"),
      rdVideoBG: $(".rd-video"),
      rdRange: $('.rd-range'),
      textRotator: $(".text-rotator"),
      owl: $(".owl-carousel"),
      swiper: $(".swiper-slider"),
      counter: $(".counter"),
      flickrfeed: $(".flickr"),
      twitterfeed: $(".twitter"),
      progressBar: $(".progress-bar"),
      isotope: $(".isotope"),
      countDown: $(".countdown"),
      calendar: $(".rd-calendar"),
      facebookfeed: $(".facebook"),
      instafeed: $(".instafeed"),
      facebookWidget: $('#fb-root'),
      materialTabs: $('.rd-material-tabs'),
      filePicker: $('.rd-file-picker'),
      fileDrop: $('.rd-file-drop'),
      popover: $('[data-toggle="popover"]'),
      dateCountdown: $('.DateCountdown'),
      statefulButton: $('.btn-stateful'),
      slick: $('.slick-slider'),
			copyrightYear: $(".copyright-year"),
      scroller: $(".scroll-wrap"),
      socialite: $(".socialite"),
      viewAnimate: $('.view-animate'),
      selectFilter: $("select"),
      rdInputLabel: $(".form-label"),
      stacktable: $("[data-responsive=true]"),
      bootstrapDateTimePicker: $("[date-time-picker]"),
      customWaypoints: $('[data-custom-scroll-to]'),
      photoSwipeGallery: $("[data-photo-swipe-item]"),
      circleProgress: $(".progress-bar-circle"),
      stepper: $("input[type='number']"),
      radio: $("input[type='radio']"),
      checkbox: $("input[type='checkbox']"),
      customToggle: $("[data-custom-toggle]"),
      rdMailForm: $(".rd-mailform"),
      regula: $("[data-constraints]"),
      search: $(".rd-search"),
      searchResults: $('.rd-search-results'),
      imgZoom: $('[mag-thumb]'),
			maps: $(".google-map-container")
    };

/**
 * Initialize All Scripts
 */
$document.ready(function () {

  /**
   * getSwiperHeight
   * @description  calculate the height of swiper slider basing on data attr
   */
  function getSwiperHeight(object, attr) {
    var val = object.attr("data-" + attr),
        dim;

    if (!val) {
      return undefined;
    }

    dim = val.match(/(px)|(%)|(vh)$/i);

    if (dim.length) {
      switch (dim[0]) {
        case "px":
          return parseFloat(val);
        case "vh":
          return $(window).height() * (parseFloat(val) / 100);
        case "%":
          return object.width() * (parseFloat(val) / 100);
      }
    } else {
      return undefined;
    }
  }

  /**
   * toggleSwiperInnerVideos
   * @description  toggle swiper videos on active slides
   */
  function toggleSwiperInnerVideos(swiper) {
    var prevSlide = $(swiper.slides[swiper.previousIndex]),
        nextSlide = $(swiper.slides[swiper.activeIndex]),
        videos;

    prevSlide.find("video").each(function () {
      this.pause();
    });

    videos = nextSlide.find("video");
    if (videos.length) {
      videos.get(0).play();
    }
  }

	/**
	 * Google map function for getting latitude and longitude
	 */
	function getLatLngObject(str, marker, map, callback) {
		var coordinates = {};
		try {
			coordinates = JSON.parse(str);
			callback(new google.maps.LatLng(
				coordinates.lat,
				coordinates.lng
			), marker, map)
		} catch (e) {
			map.geocoder.geocode({'address': str}, function (results, status) {
				if (status === google.maps.GeocoderStatus.OK) {
					var latitude = results[0].geometry.location.lat();
					var longitude = results[0].geometry.location.lng();

					callback(new google.maps.LatLng(
						parseFloat(latitude),
						parseFloat(longitude)
					), marker, map)
				}
			})
		}
	}

  /**
   * toggleSwiperCaptionAnimation
   * @description  toggle swiper animations on active slides
   */
  function toggleSwiperCaptionAnimation(swiper) {
    var prevSlide = $(swiper.container),
        nextSlide = $(swiper.slides[swiper.activeIndex]);

    prevSlide
        .find("[data-caption-animate]")
        .each(function () {
          var $this = $(this);
          $this
              .removeClass("animated")
              .removeClass($this.attr("data-caption-animate"))
              .addClass("not-animated");
        });

    nextSlide
        .find("[data-caption-animate]")
        .each(function () {
          var $this = $(this),
              delay = $this.attr("data-caption-delay");

          setTimeout(function () {
            $this
                .removeClass("not-animated")
                .addClass($this.attr("data-caption-animate"))
                .addClass("animated");
          }, delay ? parseInt(delay) : 0);
        });
  }

  /**
   * makeParallax
   * @description  create swiper parallax scrolling effect
   */
  function makeParallax(el, speed, wrapper, prevScroll) {
    var scrollY = window.scrollY || window.pageYOffset;

    if (prevScroll != scrollY) {
      prevScroll = scrollY;
      el.addClass('no-transition');
      el[0].style['transform'] = 'translate3d(0,' + -scrollY * (1 - speed) + 'px,0)';
      el.height();
      el.removeClass('no-transition');

      if (el.attr('data-fade') === 'true') {
        var bound = el[0].getBoundingClientRect(),
            offsetTop = bound.top * 2 + scrollY,
            sceneHeight = wrapper.outerHeight(),
            sceneDevider = wrapper.offset().top + sceneHeight / 2.0,
            layerDevider = offsetTop + el.outerHeight() / 2.0,
            pos = sceneHeight / 6.0,
            opacity;
        if (sceneDevider + pos > layerDevider && sceneDevider - pos < layerDevider) {
          el[0].style["opacity"] = 1;
        } else {
          if (sceneDevider - pos < layerDevider) {
            opacity = 1 + ((sceneDevider + pos - layerDevider) / sceneHeight / 3.0 * 5);
          } else {
            opacity = 1 - ((sceneDevider - pos - layerDevider) / sceneHeight / 3.0 * 5);
          }
          el[0].style["opacity"] = opacity < 0 ? 0 : opacity > 1 ? 1 : opacity.toFixed(2);
        }
      }
    }

    requestAnimationFrame(function () {
      makeParallax(el, speed, wrapper, prevScroll);
    });
  }

	/**
	 * @desc Initialize owl carousel plugin
	 * @param {object} c - carousel jQuery object
	 */
	function initOwlCarousel(c) {
		var aliaces = ["-", "-sm-", "-md-", "-lg-", "-xl-", "-xxl-"],
			values = [0, 576, 768, 992, 1200, 1600],
			responsive = {};

		for (var j = 0; j < values.length; j++) {
			responsive[values[j]] = {};
			for (var k = j; k >= -1; k--) {
				if (!responsive[values[j]]["items"] && c.attr("data" + aliaces[k] + "items")) {
					responsive[values[j]]["items"] = k < 0 ? 1 : parseInt(c.attr("data" + aliaces[k] + "items"), 10);
				}
				if (!responsive[values[j]]["stagePadding"] && responsive[values[j]]["stagePadding"] !== 0 && c.attr("data" + aliaces[k] + "stage-padding")) {
					responsive[values[j]]["stagePadding"] = k < 0 ? 0 : parseInt(c.attr("data" + aliaces[k] + "stage-padding"), 10);
				}
				if (!responsive[values[j]]["margin"] && responsive[values[j]]["margin"] !== 0 && c.attr("data" + aliaces[k] + "margin")) {
					responsive[values[j]]["margin"] = k < 0 ? 30 : parseInt(c.attr("data" + aliaces[k] + "margin"), 10);
				}
			}
		}

		// Enable custom pagination
		if (c.attr('data-dots-custom')) {
			c.on("initialized.owl.carousel", function (event) {
				var carousel = $(event.currentTarget),
					customPag = $(carousel.attr("data-dots-custom")),
					active = 0;

				if (carousel.attr('data-active')) {
					active = parseInt(carousel.attr('data-active'), 10);
				}

				carousel.trigger('to.owl.carousel', [active, 300, true]);
				customPag.find("[data-owl-item='" + active + "']").addClass("active");

				customPag.find("[data-owl-item]").on('click', function (e) {
					e.preventDefault();
					carousel.trigger('to.owl.carousel', [parseInt(this.getAttribute("data-owl-item"), 10), 300, true]);
				});

				carousel.on("translate.owl.carousel", function (event) {
					customPag.find(".active").removeClass("active");
					customPag.find("[data-owl-item='" + event.item.index + "']").addClass("active")
				});
			});
		}

		// c.on("initialized.owl.carousel", function () {
		// 	initLightGalleryItem(c.find('[data-lightgallery="item"]'), 'lightGallery-in-carousel');
		// });

		c.owlCarousel({
			autoplay: isNoviBuilder ? false : c.attr("data-autoplay") === "true",
			loop: isNoviBuilder ? false : c.attr("data-loop") !== "false",
			items: 1,
			center: c.attr("data-center") === "true",
			dotsContainer: c.attr("data-pagination-class") || false,
			navContainer: c.attr("data-navigation-class") || false,
			mouseDrag: isNoviBuilder ? false : c.attr("data-mouse-drag") !== "false",
			nav: c.attr("data-nav") === "true",
			dots: c.attr("data-dots") === "true",
			dotsEach: c.attr("data-dots-each") ? parseInt(c.attr("data-dots-each"), 10) : false,
			animateIn: c.attr('data-animation-in') ? c.attr('data-animation-in') : false,
			animateOut: c.attr('data-animation-out') ? c.attr('data-animation-out') : false,
			responsive: responsive,
			navText: c.attr("data-nav-text") ? $.parseJSON( c.attr("data-nav-text") ) : [],
			navClass: c.attr("data-nav-class") ? $.parseJSON( c.attr("data-nav-class") ) : ['owl-prev', 'owl-next']
		});
	}

  /**
   * isScrolledIntoView
   * @description  check the element whas been scrolled into the view
   */
  function isScrolledIntoView(elem) {
    var $window = $(window);
    return elem.offset().top + elem.outerHeight() >= $window.scrollTop() && elem.offset().top <= $window.scrollTop() + $window.height();
  }

  /**
   * initOnView
   * @description  calls a function when element has been scrolled into the view
   */
  function lazyInit(element, func) {
    var $win = jQuery(window);
    $win.on('load scroll', function () {
      if ((!element.hasClass('lazy-loaded') && (isScrolledIntoView(element)))) {
        func.call();
        element.addClass('lazy-loaded');
      }
    });
  }

  /**
   * Live Search
   * @description  create live search results
   */
  function liveSearch(options) {
    $('#' + options.live).removeClass('cleared').html();
    options.current++;
    options.spin.addClass('loading');
    $.get(handler, {
      s: decodeURI(options.term),
      liveSearch: options.live,
      dataType: "html",
      liveCount: options.liveCount,
      filter: options.filter,
      template: options.template
    }, function (data) {
      options.processed++;
      var live = $('#' + options.live);
      if (options.processed == options.current && !live.hasClass('cleared')) {
        live.find('> #search-results').removeClass('active');
        live.html(data);
        setTimeout(function () {
          live.find('> #search-results').addClass('active');
        }, 50);
      }
      options.spin.parents('.rd-search').find('.input-group-addon').removeClass('loading');
    })
  }


	/**
	 * @desc Attach form validation to elements
	 * @param {object} elements - jQuery object
	 */
	function attachFormValidator(elements) {
		// Custom validator - phone number
		regula.custom({
			name: 'PhoneNumber',
			defaultMessage: 'Invalid phone number format',
			validator: function() {
				if ( this.value === '' ) return true;
				else return /^(\+\d)?[0-9\-\(\) ]{5,}$/i.test( this.value );
			}
		});

		for (var i = 0; i < elements.length; i++) {
			var o = $(elements[i]), v;
			o.addClass("form-control-has-validation").after("<span class='form-validation'></span>");
			v = o.parent().find(".form-validation");
			if (v.is(":last-child")) o.addClass("form-control-last-child");
		}

		elements.on('input change propertychange blur', function (e) {
			var $this = $(this), results;

			if (e.type !== "blur") if (!$this.parent().hasClass("has-error")) return;
			if ($this.parents('.rd-mailform').hasClass('success')) return;

			if (( results = $this.regula('validate') ).length) {
				for (i = 0; i < results.length; i++) {
					$this.siblings(".form-validation").text(results[i].message).parent().addClass("has-error");
				}
			} else {
				$this.siblings(".form-validation").text("").parent().removeClass("has-error")
			}
		}).regula('bind');

		var regularConstraintsMessages = [
			{
				type: regula.Constraint.Required,
				newMessage: "The text field is required."
			},
			{
				type: regula.Constraint.Email,
				newMessage: "The email is not a valid email."
			},
			{
				type: regula.Constraint.Numeric,
				newMessage: "Only numbers are required"
			},
			{
				type: regula.Constraint.Selected,
				newMessage: "Please choose an option."
			}
		];


		for (var i = 0; i < regularConstraintsMessages.length; i++) {
			var regularConstraint = regularConstraintsMessages[i];

			regula.override({
				constraintType: regularConstraint.type,
				defaultMessage: regularConstraint.newMessage
			});
		}
	}

	/**
	 * @desc Check if all elements pass validation
	 * @param {object} elements - object of items for validation
	 * @param {object} captcha - captcha object for validation
	 * @return {boolean}
	 */
	function isValidated(elements, captcha) {
		var results, errors = 0;

		if (elements.length) {
			for (var j = 0; j < elements.length; j++) {

				var $input = $(elements[j]);
				if ((results = $input.regula('validate')).length) {
					for (k = 0; k < results.length; k++) {
						errors++;
						$input.siblings(".form-validation").text(results[k].message).parent().addClass("has-error");
					}
				} else {
					$input.siblings(".form-validation").text("").parent().removeClass("has-error")
				}
			}

			if (captcha) {
				if (captcha.length) {
					return validateReCaptcha(captcha) && errors === 0
				}
			}

			return errors === 0;
		}
		return true;
	}

  /**
   * Init Bootstrap tooltip
   * @description  calls a function when need to init bootstrap tooltips
   */
  function initBootstrapTooltip(tooltipPlacement) {
    if (window.innerWidth < 599) {
      plugins.bootstrapTooltip.tooltip('destroy');
      plugins.bootstrapTooltip.tooltip({
        placement: 'bottom'
      });
    } else {
      plugins.bootstrapTooltip.tooltip('destroy');
      plugins.bootstrapTooltip.tooltipPlacement;
      plugins.bootstrapTooltip.tooltip();
    }
  }

	// Copyright Year (Evaluates correct copyright year)
	if (plugins.copyrightYear.length) {
		plugins.copyrightYear.text(initialDate.getFullYear());
	}

  var uAgent = navigator.userAgent || '';
  var safari = (!(/chrome/i.test(uAgent)) && /webkit|safari|khtml/i.test(uAgent));

  if(safari){
    $html.addClass("safari");
  }

  /**
   * IE Polyfills
   * @description  Adds some loosing functionality to IE browsers
   */
  if (isIE) {
    if (isIE < 10) {
      $html.addClass("lt-ie-10");
    }

    if (isIE < 11) {
      if (plugins.pointerEvents) {
        $.getScript(plugins.pointerEvents)
            .done(function () {
              $html.addClass("ie-10");
              PointerEventsPolyfill.initialize({});
            });
      }
    }

    if (isIE === 11) {
      $("html").addClass("ie-11");
    }

    if (isIE === 12) {
      $("html").addClass("ie-edge");
    }
  }

  /**
   * Bootstrap Tooltips
   * @description Activate Bootstrap Tooltips
   */
  if (plugins.bootstrapTooltip.length) {
    var tooltipPlacement = plugins.bootstrapTooltip.attr('data-placement');
    initBootstrapTooltip(tooltipPlacement);
    $(window).on('resize orientationchange', function () {
      initBootstrapTooltip(tooltipPlacement);
    })
  }



  /**
   * RD Audio player
   * @description Enables RD Audio player plugin
   */
  if (plugins.rdAudioPlayer.length > 0) {
    var i;
    for (i = 0; i < plugins.rdAudioPlayer.length; i++) {
      $(plugins.rdAudioPlayer[i]).RDAudio();
    }
  }

  /**
   * Text Rotator
   * @description Enables Text Rotator plugin
   */
  if (plugins.textRotator.length) {
    var i;
    for (i = 0; i < plugins.textRotator.length; i++) {
      var textRotatorItem = plugins.textRotator[i];
      $(textRotatorItem).rotator();
    }
  }



  /**
   * Bootstrap Date time picker
   */
  if (plugins.bootstrapDateTimePicker.length) {
    var i;
    for (i = 0; i < plugins.bootstrapDateTimePicker.length; i++) {
      var $dateTimePicker = $(plugins.bootstrapDateTimePicker[i]);
      var options = {};

      options['format'] = 'dddd DD MMMM YYYY - HH:mm';
      if ($dateTimePicker.attr("date-time-picker") == "date") {
        options['format'] = 'dddd DD MMMM YYYY';
        options['minDate'] = new Date();
      } else if ($dateTimePicker.attr("date-time-picker") == "time") {
        options['format'] = 'HH:mm';
      }

      options["time"] = ($dateTimePicker.attr("date-time-picker") != "date");
      options["date"] = ($dateTimePicker.attr("date-time-picker") != "time");
      options["shortTime"] = true;

      $dateTimePicker.bootstrapMaterialDatePicker(options);
    }
  }

  /**
   * Responsive Tabs
   * @description Enables Responsive Tabs plugin
   */
  if (plugins.responsiveTabs.length > 0) {
    var i;
    for (i = 0; i < plugins.responsiveTabs.length; i++) {
      var responsiveTabsItem = $(plugins.responsiveTabs[i]);
      responsiveTabsItem.easyResponsiveTabs({
        type: responsiveTabsItem.attr("data-type") === "accordion" ? "accordion" : "default"
      });
    }
  }



  /**
   * RD Twitter Feed
   * @description Enables RD Twitter Feed plugin
   */
  if (plugins.twitterfeed.length > 0) {
    var i;
    for (i = 0; i < plugins.twitterfeed.length; i++) {
      var twitterfeedItem = plugins.twitterfeed[i];
      $(twitterfeedItem).RDTwitter({});
    }
  }

  /**
   * RD MaterialTabs
   * @description Enables RD MaterialTabs plugin
   */
  if (plugins.materialTabs.length) {
    var i;
    for (i = 0; i < plugins.materialTabs.length; i++) {
      var materialTabsItem = plugins.materialTabs[i];
      $(materialTabsItem).RDMaterialTabs({});
    }
  }

  /**
   * RD Facebook
   * @description Enables RD Facebook plugin
   */
  if (plugins.facebookfeed.length > 0) {
    var i;
    for (i = 0; i < plugins.facebookfeed.length; i++) {
      var facebookfeedItem = plugins.facebookfeed[i];
      $(facebookfeedItem).RDFacebookFeed({});
    }
  }

  /**
   * Facebook widget
   * @description  Enables official Facebook widget
   */
  if (plugins.facebookWidget.length) {
    lazyInit(plugins.facebookWidget, function () {
      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.5";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    });
  }

  /**
   * RD Flickr Feed
   * @description Enables RD Flickr Feed plugin
   */
  if (plugins.flickrfeed.length > 0) {
    var i;
    for (i = 0; i < plugins.flickrfeed.length; i++) {
      var flickrfeedItem = $(plugins.flickrfeed[i]);
      flickrfeedItem.RDFlickr({
        callback: function () {
          var items = flickrfeedItem.find("[data-photo-swipe-item]");

          if (items.length) {
            for (var j = 0; j < items.length; j++) {
              var image = new Image();
              image.setAttribute('data-index', j);
              image.onload = function () {
                items[this.getAttribute('data-index')].setAttribute('data-size', this.naturalWidth + 'x' + this.naturalHeight);
              };
              image.src = items[j].getAttribute('href');
            }
          }
        }
      });
    }
  }

  /**
   * Select2
   * @description Enables select2 plugin
   */
  if (plugins.selectFilter.length) {
    var i;
    for (i = 0; i < plugins.selectFilter.length; i++) {
      var select = $(plugins.selectFilter[i]);

      select.select2({
        theme: "bootstrap"
      }).next().addClass(select.attr("class").match(/(input-sm)|(input-lg)|($)/i).toString().replace(new RegExp(",", 'g'), " "));
    }
  }

  /**
   * Stepper
   * @description Enables Stepper Plugin
   */
  if (plugins.stepper.length) {
    plugins.stepper.stepper({
      labels: {
        up: "",
        down: ""
      }
    });
  }

  /**
   * Radio
   * @description Add custom styling options for input[type="radio"]
   */
  if (plugins.radio.length) {
    var i;
    for (i = 0; i < plugins.radio.length; i++) {
      var $this = $(plugins.radio[i]);
      $this.addClass("radio-custom").after("<span class='radio-custom-dummy'></span>")
    }
  }

  /**
   * Checkbox
   * @description Add custom styling options for input[type="checkbox"]
   */
  if (plugins.checkbox.length) {
    var i;
    for (i = 0; i < plugins.checkbox.length; i++) {
      var $this = $(plugins.checkbox[i]);
      $this.addClass("checkbox-custom").after("<span class='checkbox-custom-dummy'></span>")
    }
  }

  /**
   * RD Filepicker
   * @description Enables RD Filepicker plugin
   */
  if (plugins.filePicker.length || plugins.fileDrop.length) {
    var i;
    for (i = 0; i < plugins.filePicker.length; i++) {
      var filePickerItem = plugins.filePicker[i];

      $(filePickerItem).RDFilepicker({
        metaFieldClass: "rd-file-picker-meta"
      });
    }

    for (i = 0; i < plugins.fileDrop.length; i++) {
      var fileDropItem = plugins.fileDrop[i];

      $(fileDropItem).RDFilepicker({
        metaFieldClass: "rd-file-drop-meta",
        buttonClass: "rd-file-drop-btn",
        dropZoneClass: "rd-file-drop"
      });
    }
  }

  /**
   * Popovers
   * @description Enables Popovers plugin
   */
  if (plugins.popover.length) {
    if (window.innerWidth < 767) {
      plugins.popover.attr('data-placement', 'bottom');
      plugins.popover.popover();
    }
    else {
      plugins.popover.popover();
    }
  }

  /**
   * jQuery Countdown
   * @description  Enable countdown plugin
   */
  if (plugins.countDown.length) {
    var i;
    for (i = 0; i < plugins.countDown.length; i++) {
      var countDownItem = plugins.countDown[i],
          d = new Date(),
          type = countDownItem.getAttribute('data-type'),
          time = countDownItem.getAttribute('data-time'),
          format = countDownItem.getAttribute('data-format'),
          settings = [];

      d.setTime(Date.parse(time)).toLocaleString();
      settings[type] = d;
      settings['format'] = format;
      $(countDownItem).countdown(settings);
    }
  }

  /**
   * TimeCircles
   * @description  Enable TimeCircles plugin
   */
  if (plugins.dateCountdown.length) {
    var i;
    for (i = 0; i < plugins.dateCountdown.length; i++) {
      var dateCountdownItem = $(plugins.dateCountdown[i]),
          time = {
            "Days": {
              "text": "Days",
              "color": "#FFF",
              "show": true
            },
            "Hours": {
              "text": "Hours",
              "color": "#fff",
              "show": true
            },
            "Minutes": {
              "text": "Minutes",
              "color": "#fff",
              "show": true
            },
            "Seconds": {
              "text": "Seconds",
              "color": "#fff",
              "show": true
            }
          };
      dateCountdownItem.TimeCircles({});
      $(window).on('load resize orientationchange', function () {
        if (window.innerWidth < 479) {
          dateCountdownItem.TimeCircles({
            time: {
              Minutes: {show: true},
              Seconds: {show: false}
            }
          }).rebuild();
        } else if (window.innerWidth < 767) {
          dateCountdownItem.TimeCircles({
            time: {
              Seconds: {show: false}
            }
          }).rebuild();
        } else {
          dateCountdownItem.TimeCircles({time: time}).rebuild();
        }
      });
    }
  }

  /**
   * Bootstrap Buttons
   * @description  Enable Bootstrap Buttons plugin
   */
  if (plugins.statefulButton.length) {
    $(plugins.statefulButton).on('click', function () {
      var statefulButtonLoading = $(this).button('loading');

      setTimeout(function () {
        statefulButtonLoading.button('reset')
      }, 2000);
    })
  }
  /**
   * @module       RD Calendar
   * @author       Evgeniy Gusarov
   * @see          https://ua.linkedin.com/pub/evgeniy-gusarov/8a/a40/54a
   * @version      1.0.0
   */
  if (plugins.calendar.length) {

    for (i = 0; i < plugins.calendar.length; i++) {
      var calendarItem = $(plugins.calendar[i]);

      calendarItem.rdCalendar({
        days: calendarItem.attr("data-days") ? calendarItem.attr("data-days").split(/\s?,\s?/i) : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        month: calendarItem.attr("data-months") ? calendarItem.attr("data-months").split(/\s?,\s?/i) : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      });

      $('.rdc-table_date').on("click", function (event) {
        $(".rdc-event").toggleClass("opened");

      });

      $('input[type="radio"]').on("click", function () {
        if ($(this).attr("value") == "login") {
          $(".register-form").hide();
          $(".login-form").fadeIn('slow');
        }
        if ($(this).attr("value") == "register") {
          $(".register-form").fadeIn('slow');
          $(".login-form").hide();
        }
      });
    }
  }

  /**
   * Circle Progress
   * @description Enable Circle Progress plugin
   */
  if (plugins.circleProgress.length) {
    var i;
    for (i = 0; i < plugins.circleProgress.length; i++) {
      var circleProgressItem = $(plugins.circleProgress[i]);
      $document
          .on("scroll", function () {
            if (!circleProgressItem.hasClass('animated')) {

              var arrayGradients = circleProgressItem.attr('data-gradient').split(",");

              circleProgressItem.circleProgress({
                value: circleProgressItem.attr('data-value'),
                size: circleProgressItem.attr('data-size') ? circleProgressItem.attr('data-size') : 175,
                fill: {gradient: arrayGradients, gradientAngle: Math.PI / 4},
                startAngle: -Math.PI / 4 * 2,
                emptyFill: $(this).attr('data-empty-fill') ? $(this).attr('data-empty-fill') : "rgb(245,245,245)"

              }).on('circle-animation-progress', function (event, progress, stepValue) {
                $(this).find('span').text(String(stepValue.toFixed(2)).replace('0.', '').replace('1.', '1'));
              });
              circleProgressItem.addClass('animated');
            }
          })
          .trigger("scroll");
    }
  }

  /**
   * Progress bar
   * @description  Enable progress bar
   */
  if (plugins.progressBar.length) {
    var i,
        bar,
        type;
    for (i = 0; i < plugins.progressBar.length; i++) {
      var progressItem = plugins.progressBar[i];
      bar = null;
      if (progressItem.className.indexOf("progress-bar-horizontal") > -1) {
        type = 'Line';
      }

      if (progressItem.className.indexOf("progress-bar-radial") > -1) {
        type = 'Circle';
      }

      if (progressItem.getAttribute("data-stroke") && progressItem.getAttribute("data-value") && type) {
        bar = new ProgressBar[type](progressItem, {
          strokeWidth: Math.round(parseFloat(progressItem.getAttribute("data-stroke")) / progressItem.offsetWidth * 100)
          ,
          trailWidth: progressItem.getAttribute("data-trail") ? Math.round(parseFloat(progressItem.getAttribute("data-trail")) / progressItem.offsetWidth * 100) : 0
          ,
          text: {
            value: progressItem.getAttribute("data-counter") === "true" ? '0' : null
            , className: 'progress-bar__body'
            , style: null
          }
        });
        bar.svg.setAttribute('preserveAspectRatio', "none meet");
        if (type === 'Line') {
          bar.svg.setAttributeNS(null, "height", progressItem.getAttribute("data-stroke"));
        }

        bar.path.removeAttribute("stroke");
        bar.path.className.baseVal = "progress-bar__stroke";
        if (bar.trail) {
          bar.trail.removeAttribute("stroke");
          bar.trail.className.baseVal = "progress-bar__trail";
        }

        if (progressItem.getAttribute("data-easing")) {
          $(document)
              .on("scroll", {"barItem": bar}, $.proxy(function (event) {
                var bar = event.data.barItem;
                if (isScrolledIntoView($(this)) && this.className.indexOf("progress-bar--animated") === -1) {
                  this.className += " progress-bar--animated";
                  bar.animate(parseInt(this.getAttribute("data-value")) / 100.0, {
                    easing: this.getAttribute("data-easing")
                    ,
                    duration: this.getAttribute("data-duration") ? parseInt(this.getAttribute("data-duration")) : 800
                    ,
                    step: function (state, b) {
                      if (b._container.className.indexOf("progress-bar-horizontal") > -1 ||
                          b._container.className.indexOf("progress-bar-vertical") > -1) {
                        b.text.style.width = Math.abs(b.value() * 100).toFixed(0) + "%"
                      }
                      b.setText(Math.abs(b.value() * 100).toFixed(0));
                    }
                  });
                }
              }, progressItem))
              .trigger("scroll");
        }
      } else {
        console.error(progressItem.className + ": progress bar type is not defined");
      }
    }
  }

	// UI To Top
	if (isDesktop && !isNoviBuilder) {
		$().UItoTop({
			easingType: 'easeOutQuad',
			containerClass: 'ui-to-top fa fa-angle-up'
		});
	}

  /**
   * RD Navbar
   * @description Enables RD Navbar plugin
   */
  if (plugins.rdNavbar.length) {
    plugins.rdNavbar.RDNavbar({
      stickUpClone: (plugins.rdNavbar.attr("data-stick-up-clone")) ? plugins.rdNavbar.attr("data-stick-up-clone") === 'true' : false
    });
    if (plugins.rdNavbar.attr("data-body-class")) {
      document.body.className += ' ' + plugins.rdNavbar.attr("data-body-class");
    }
  }

  /**
   * ViewPort Universal
   * @description Add class in viewport
   */
  if (plugins.viewAnimate.length) {
    var i;
    for (i = 0; i < plugins.viewAnimate.length; i++) {
      var $view = $(plugins.viewAnimate[i]).not('.active');
      $document.on("scroll", $.proxy(function () {
            if (isScrolledIntoView(this)) {
              this.addClass("active");
            }
          }, $view))
          .trigger("scroll");
    }
  }

  /**
   * Swiper 3.1.7
   * @description  Enable Swiper Slider
   */
  if (plugins.swiper.length) {
    var i;
    for (i = 0; i < plugins.swiper.length; i++) {
      var s = $(plugins.swiper[i]);
      var pag = s.find(".swiper-pagination"),
          next = s.find(".swiper-button-next"),
          prev = s.find(".swiper-button-prev"),
          bar = s.find(".swiper-scrollbar"),
          parallax = s.parents('.rd-parallax').length,
          swiperSlide = s.find(".swiper-slide");

      for (j = 0; j < swiperSlide.length; j++) {
        var $this = $(swiperSlide[j]),
            url;

        if (url = $this.attr("data-slide-bg")) {
          $this.css({
            "background-image": "url(" + url + ")",
            "background-size": "cover"
          })
        }
      }

      swiperSlide.end()
          .find("[data-caption-animate]")
          .addClass("not-animated")
          .end()
          .swiper({
            autoplay: s.attr('data-autoplay') ? s.attr('data-autoplay') === "false" ? undefined : s.attr('data-autoplay') : 5000,
            direction: s.attr('data-direction') ? s.attr('data-direction') : "horizontal",
            effect: s.attr('data-slide-effect') ? s.attr('data-slide-effect') : "slide",
            speed: s.attr('data-slide-speed') ? s.attr('data-slide-speed') : 600,
            keyboardControl: s.attr('data-keyboard') === "true",
            mousewheelControl: s.attr('data-mousewheel') === "true",
            mousewheelReleaseOnEdges: s.attr('data-mousewheel-release') === "true",
            nextButton: next.length ? next.get(0) : null,
            prevButton: prev.length ? prev.get(0) : null,
            pagination: pag.length ? pag.get(0) : null,
            paginationClickable: pag.length ? pag.attr("data-clickable") !== "false" : false,
            paginationBulletRender: pag.length ? pag.attr("data-index-bullet") === "true" ? function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            } : null : null,
            scrollbar: bar.length ? bar.get(0) : null,
            scrollbarDraggable: bar.length ? bar.attr("data-draggable") !== "false" : true,
            scrollbarHide: bar.length ? bar.attr("data-draggable") === "false" : false,
            loop: s.attr('data-loop') !== "false",
            onTransitionStart: function (swiper) {
              toggleSwiperInnerVideos(swiper);
            },
            onTransitionEnd: function (swiper) {
              toggleSwiperCaptionAnimation(swiper);
            },
            onInit: function (swiper) {
              toggleSwiperInnerVideos(swiper);
              toggleSwiperCaptionAnimation(swiper);
              var swiperParalax = s.find(".swiper-parallax");

              for (var k = 0; k < swiperParalax.length; k++) {
                var $this = $(swiperParalax[k]),
                    speed;

                if (parallax && !isIEBrows && !isMobile) {
                  if (speed = $this.attr("data-speed")) {
                    makeParallax($this, speed, s, false);
                  }
                }
              }
              $(window).on('resize', function () {
                swiper.update(true);
              })
            }
          });

      $(window)
          .on("resize", function () {
            var mh = getSwiperHeight(s, "min-height"),
                h = getSwiperHeight(s, "height");
            if (h) {
              s.css("height", mh ? mh > h ? mh : h : h);
            }
          })
          .trigger("resize");
    }
  }

  /**
   * RD Video Player
   * @description Enables RD Video player plugin
   */
  if (plugins.rdVideoPlayer.length) {
    var i;
    for (i = 0; i < plugins.rdVideoPlayer.length; i++) {
      var videoItem = plugins.rdVideoPlayer[i],
          volumeWrap = $(".rd-video-volume-wrap");

      $(videoItem).RDVideoPlayer({});

      volumeWrap.on("mouseenter", function () {
        $(this).addClass("hover")
      });

      volumeWrap.on("mouseleave", function () {
        $(this).removeClass("hover")
      });

      if (isTouch) {
        volumeWrap.find(".rd-video-volume").on("click", function () {
          $(this).toggleClass("hover")
        });
        $document.on("click", function (e) {
          if (!$(e.target).is(volumeWrap) && $(e.target).parents(volumeWrap).length == 0) {
            volumeWrap.find(".rd-video-volume").removeClass("hover")
          }
        })
      }
    }
  }

  /**
   * RD Parallax
   * @description Enables RD Parallax plugin
   */
  if (plugins.rdParallax.length) {
    var i;
    $.RDParallax();

    if (!isIE && !isMobile) {
      $(window).on("scroll", function () {
        for (i = 0; i < plugins.rdParallax.length; i++) {
          var parallax = $(plugins.rdParallax[i]);
          if (isScrolledIntoView(parallax)) {
            parallax.find(".rd-parallax-inner").css("position", "fixed");
          } else {
            parallax.find(".rd-parallax-inner").css("position", "absolute");
          }
        }
      });
    }

    $("a[href='#']").on("click", function (event) {
      setTimeout(function () {
        $(window).trigger("resize");
      }, 300);
    });
  }

  /**
   * RD Search
   * @description Enables search
   */
  if (plugins.search.length || plugins.searchResults) {
    var handler = "bat/rd-search.php";
    var defaultTemplate = '<h5 class="search_title"><a target="_top" href="#{href}" class="search_link">#{title}</a></h5>' +
        '<p>...#{token}...</p>' +
        '<p class="match"><em>Terms matched: #{count} - URL: #{href}</em></p>';
    var defaultFilter = '*.html';

    if (plugins.search.length) {

      for (i = 0; i < plugins.search.length; i++) {
        var searchItem = $(plugins.search[i]),
            options = {
              element: searchItem,
              filter: (searchItem.attr('data-search-filter')) ? searchItem.attr('data-search-filter') : defaultFilter,
              template: (searchItem.attr('data-search-template')) ? searchItem.attr('data-search-template') : defaultTemplate,
              live: (searchItem.attr('data-search-live')) ? searchItem.attr('data-search-live') : false,
              liveCount: (searchItem.attr('data-search-live-count')) ? parseInt(searchItem.attr('data-search-live')) : 4,
              current: 0, processed: 0, timer: {}
            };

        if ($('.rd-navbar-search-toggle').length) {
          var toggle = $('.rd-navbar-search-toggle');
          toggle.on('click', function () {
            if (!($(this).hasClass('active'))) {
              searchItem.find('input').val('').trigger('propertychange');
            }
          });
        }

        if (options.live) {
          searchItem.find('input').on("keyup input propertychange", $.proxy(function () {
            this.term = this.element.find('input').val().trim();
            this.spin = this.element.find('.input-group-addon');
            clearTimeout(this.timer);

            if (this.term.length > 2) {
              this.timer = setTimeout(liveSearch(this), 200);
            } else if (this.term.length == 0) {
              $('#' + this.live).addClass('cleared').html('');
            }
          }, options, this));
        }

        searchItem.submit($.proxy(function () {
          $('<input />').attr('type', 'hidden')
              .attr('name', "filter")
              .attr('value', this.filter)
              .appendTo(this.element);
          return true;
        }, options, this))
      }
    }

    if (plugins.searchResults.length) {
      var regExp = /\?.*s=([^&]+)\&filter=([^&]+)/g;
      var match = regExp.exec(location.search);

      if (match != null) {
        $.get(handler, {
          s: decodeURI(match[1]),
          dataType: "html",
          filter: match[2],
          template: defaultTemplate,
          live: ''
        }, function (data) {
          plugins.searchResults.html(data);
        })
      }
    }
  }

  /**
   * Slick carousel
   * @description  Enable Slick carousel plugin
   */
  if (plugins.slick.length) {
    var i;
    for (i = 0; i < plugins.slick.length; i++) {
      var $slickItem = $(plugins.slick[i]);

      $slickItem.slick({
        slidesToScroll: parseInt($slickItem.attr('data-slide-to-scroll')) || 1,
        asNavFor: $slickItem.attr('data-for') || false,
        dots: $slickItem.attr("data-dots") == "true",
        infinite: $slickItem.attr("data-loop") == "true",
        focusOnSelect: true,
        arrows: $slickItem.attr("data-arrows") == "true",
        swipe: $slickItem.attr("data-swipe") == "true",
        autoplay: $slickItem.attr("data-autoplay") == "true",
        vertical: $slickItem.attr("data-vertical") == "true",
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 0,
            settings: {
              slidesToShow: parseInt($slickItem.attr('data-items')) || 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: parseInt($slickItem.attr('data-xs-items')) || 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: parseInt($slickItem.attr('data-sm-items')) || 1,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: parseInt($slickItem.attr('data-md-items')) || 1,
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: parseInt($slickItem.attr('data-lg-items')) || 1,
            }
          }
        ]
      });
    }
  }



  /**
   * jQuery Count To
   * @description Enables Count To plugin
   */
  if (plugins.counter.length) {
    var i;
    for (i = 0; i < plugins.counter.length; i++) {
      var counterNotAnimated = plugins.counter.not(".animated");

      $document.on("scroll", function () {
        for (i = 0; i < counterNotAnimated.length; i++) {
          var counterNotAnimatedItem = $(counterNotAnimated[i]);
          if ((!counterNotAnimatedItem.hasClass("animated")) && (isScrolledIntoView(counterNotAnimatedItem))) {
            counterNotAnimatedItem.countTo({
              refreshInterval: 40,
              speed: counterNotAnimatedItem.attr("data-speed") || 1000
            });
            counterNotAnimatedItem.addClass('animated');
          }
        }
      });
      $document.trigger("scroll");
    }
  }

  /**
   * Isotope
   * @description Enables Isotope plugin
   */
  if (plugins.isotope.length) {
    var i, isogroup = [];
    for (i = 0; i < plugins.isotope.length; i++) {
      var isotopeItem = plugins.isotope[i]
          , iso = new Isotope(isotopeItem, {
        itemSelector: '.isotope-item',
        layoutMode: isotopeItem.getAttribute('data-isotope-layout') ? isotopeItem.getAttribute('data-isotope-layout') : 'masonry',
        filter: '*'
      });

      isogroup.push(iso);
    }

    $(window).on('load', function () {
      setTimeout(function () {
        var i;
        for (i = 0; i < isogroup.length; i++) {
          isogroup[i].element.className += " isotope--loaded";
          isogroup[i].layout();
        }
      }, 600);
    });

    var resizeTimout;

    $("[data-isotope-filter]").on("click", function (e) {
      e.preventDefault();
      var filter = $(this);
      clearTimeout(resizeTimout);
      filter.parents(".isotope-filters").find('.active').removeClass("active");
      filter.addClass("active");
      var iso = $('.isotope[data-isotope-group="' + this.getAttribute("data-isotope-group") + '"]');
      iso.isotope({
        itemSelector: '.isotope-item',
        layoutMode: iso.attr('data-isotope-layout') ? iso.attr('data-isotope-layout') : 'masonry',
        filter: this.getAttribute("data-isotope-filter") == '*' ? '*' : '[data-filter*="' + this.getAttribute("data-isotope-filter") + '"]'
      });
    }).eq(0).trigger("click")
  }

  /**
   * WOW
   * @description Enables Wow animation plugin
   */
  if (isDesktop && $html.hasClass("wow-animation") && $(".wow").length) {
    new WOW().init();
  }

  /**
   * Bootstrap tabs
   * @description Activate Bootstrap Tabs
   */
  if (plugins.bootstrapTabs.length) {
    var i;
    for (i = 0; i < plugins.bootstrapTabs.length; i++) {
      var bootstrapTabsItem = $(plugins.bootstrapTabs[i]);

      bootstrapTabsItem.on("click", "a", function (event) {
        event.preventDefault();
        $(this).tab('show');
      });
    }
  }

  /**
   * JQuery mousewheel plugin
   * @description  Enables jquery mousewheel plugin
   */
  if (plugins.scroller.length) {
    var i;
    for (i = 0; i < plugins.scroller.length; i++) {
      var scrollerItem = $(plugins.scroller[i]);

      scrollerItem.mCustomScrollbar({
        scrollInertia: 200,
        scrollButtons: {enable: true}
      });
    }
  }

  /**
   * Socialite v2
   * @description  Enables Socialite v2 plugin
   */
  if (plugins.socialite.length) {
    Socialite.load();
  }

  /**
   * RD Video
   * @description Enables RD Video plugin
   */
  if (plugins.rdVideoBG.length) {
    var i;
    for (i = 0; i < plugins.rdVideoBG.length; i++) {
      var videoItem = $(plugins.rdVideoBG[i]);
      videoItem.RDVideo({});
    }
  }

	// RD Input Label
	if (plugins.rdInputLabel.length) {
		plugins.rdInputLabel.RDInputLabel();
	}

	// Regula
	if (plugins.regula.length) {
		attachFormValidator(plugins.regula);
	}

	// RD Mailform
	if (plugins.rdMailForm.length) {
		var i, j, k,
			msg = {
				'MF000': 'Successfully sent!',
				'MF001': 'Recipients are not set!',
				'MF002': 'Form will not work locally!',
				'MF003': 'Please, define email field in your form!',
				'MF004': 'Please, define type of your form!',
				'MF254': 'Something went wrong with PHPMailer!',
				'MF255': 'Aw, snap! Something went wrong.'
			};

		for (i = 0; i < plugins.rdMailForm.length; i++) {
			var $form = $(plugins.rdMailForm[i]),
				formHasCaptcha = false;

			$form.attr('novalidate', 'novalidate').ajaxForm({
				data: {
					"form-type": $form.attr("data-form-type") || "contact",
					"counter": i
				},
				beforeSubmit: function (arr, $form, options) {
					if (isNoviBuilder)
						return;

					var form = $(plugins.rdMailForm[this.extraData.counter]),
						inputs = form.find("[data-constraints]"),
						output = $("#" + form.attr("data-form-output")),
						captcha = form.find('.recaptcha'),
						captchaFlag = true;

					output.removeClass("active error success");

					if (isValidated(inputs, captcha)) {

						// veify reCaptcha
						if (captcha.length) {
							var captchaToken = captcha.find('.g-recaptcha-response').val(),
								captchaMsg = {
									'CPT001': 'Please, setup you "site key" and "secret key" of reCaptcha',
									'CPT002': 'Something wrong with google reCaptcha'
								};

							formHasCaptcha = true;

							$.ajax({
								method: "POST",
								url: "bat/reCaptcha.php",
								data: {'g-recaptcha-response': captchaToken},
								async: false
							})
								.done(function (responceCode) {
									if (responceCode !== 'CPT000') {
										if (output.hasClass("snackbars")) {
											output.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + captchaMsg[responceCode] + '</span></p>')

											setTimeout(function () {
												output.removeClass("active");
											}, 3500);

											captchaFlag = false;
										} else {
											output.html(captchaMsg[responceCode]);
										}

										output.addClass("active");
									}
								});
						}

						if (!captchaFlag) {
							return false;
						}

						form.addClass('form-in-process');

						if (output.hasClass("snackbars")) {
							output.html('<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>');
							output.addClass("active");
						}
					} else {
						return false;
					}
				},
				error: function (result) {
					if (isNoviBuilder)
						return;

					var output = $("#" + $(plugins.rdMailForm[this.extraData.counter]).attr("data-form-output")),
						form = $(plugins.rdMailForm[this.extraData.counter]);

					output.text(msg[result]);
					form.removeClass('form-in-process');

					if (formHasCaptcha) {
						grecaptcha.reset();
					}
				},
				success: function (result) {
					if (isNoviBuilder)
						return;

					var form = $(plugins.rdMailForm[this.extraData.counter]),
						output = $("#" + form.attr("data-form-output")),
						select = form.find('select');

					form
						.addClass('success')
						.removeClass('form-in-process');

					if (formHasCaptcha) {
						grecaptcha.reset();
					}

					result = result.length === 5 ? result : 'MF255';
					output.text(msg[result]);

					if (result === "MF000") {
						if (output.hasClass("snackbars")) {
							output.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + msg[result] + '</span></p>');
						} else {
							output.addClass("active success");
						}
					} else {
						if (output.hasClass("snackbars")) {
							output.html(' <p class="snackbars-left"><span class="icon icon-xxs mdi mdi-alert-outline text-middle"></span><span>' + msg[result] + '</span></p>');
						} else {
							output.addClass("active error");
						}
					}

					form.clearForm();

					if (select.length) {
						select.select2("val", "");
					}

					form.find('input, textarea').trigger('blur');

					setTimeout(function () {
						output.removeClass("active error success");
						form.removeClass('success');
					}, 3500);
				}
			});
		}
	}

  /**
   * RD Range
   * @description Enables RD Range plugin
   */
  if (plugins.rdRange.length) {
    plugins.rdRange.RDRange({});
  }

  /**
   * PhotoSwipe Gallery
   * @description Enables PhotoSwipe Gallery plugin
   */
  if (plugins.photoSwipeGallery.length) {

    // init image click event
    $document.delegate("[data-photo-swipe-item]", "click", function (event) {
      event.preventDefault();

      var $el = $(this),
          $galleryItems = $el.parents("[data-photo-swipe-gallery]").find("a[data-photo-swipe-item]"),
          pswpElement = document.querySelectorAll('.pswp')[0],
          encounteredItems = {},
          pswpItems = [],
          options,
          pswpIndex = 0,
          pswp;

      if ($galleryItems.length == 0) {
        $galleryItems = $el;
      }

      // loop over the gallery to build up the photoswipe items
      $galleryItems.each(function () {
        var $item = $(this),
            src = $item.attr('href'),
            size = $item.attr('data-size').split('x'),
            pswdItem;

        if ($item.is(':visible')) {

          // if we have this image the first time
          if (!encounteredItems[src] ) {
            // build the photoswipe item
            pswdItem = {
              src: src,
              w: parseInt(size[0], 10),
              h: parseInt(size[1], 10),
              el: $item // save link to element for getThumbBoundsFn
            };

            // store that we already had this item
            encounteredItems[src] = {
              item: pswdItem,
              index: pswpIndex
            };

            // push the item to the photoswipe list
            pswpItems.push(pswdItem);
            pswpIndex++;
          }
        }
      });

      options = {
        index: encounteredItems[$el.attr('href')].index,

        getThumbBoundsFn: function (index) {
          var $el = pswpItems[index].el,
              offset = $el.offset();

          return {
            x: offset.left,
            y: offset.top,
            w: $el.width()
          };
        }
      };

      // open the photoswipe gallery
      pswp = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, pswpItems, options);
      pswp.init();
    });
  }

	// Owl carousel
	if (plugins.owl.length) {
		for (var i = 0; i < plugins.owl.length; i++) {
			var c = $(plugins.owl[i]);
			plugins.owl[i].owl = c;

			initOwlCarousel(c);
		}
	}

  /**
   * Stacktable
   * @description Enables Stacktable plugin
   */
  if (plugins.stacktable.length) {
    var i;
    for (i = 0; i < plugins.stacktable.length; i++) {
      var stacktableItem = $(plugins.stacktable[i]);
      stacktableItem.stacktable();
    }
  }

  /**
   * Custom Toggles
   */
  if (plugins.customToggle.length) {
    var i;
    for (i = 0; i < plugins.customToggle.length; i++) {
      var $this = $(plugins.customToggle[i]);
      $this.on('click', function (e) {
        e.preventDefault();
        $("#" + $(this).attr('data-custom-toggle')).add(this).toggleClass('active');
      });

      if ($this.attr("data-custom-toggle-disable-on-blur") === "true") {
        $("body").on("click", $this, function (e) {
          if (e.target !== e.data[0] && $("#" + e.data.attr('data-custom-toggle')).find($(e.target)).length == 0 && e.data.find($(e.target)).length == 0) {
            $("#" + e.data.attr('data-custom-toggle')).add(e.data[0]).removeClass('active');
          }
        })
      }
    }
  }

  /**
   * Magnificent image zoom
   */
  if (plugins.imgZoom.length) {
    var i;
    for(i = 0; i < plugins.imgZoom.length; i++) {
      var $imgZoomItem = $(plugins.imgZoom[i]);
      $imgZoomItem.mag();
    }
  }

  /**
   * Custom Waypoints
   */
  if (plugins.customWaypoints.length) {
    var i;
    for (i = 0; i < plugins.customWaypoints.length; i++) {
      var $this = $(plugins.customWaypoints[i]);

      $this.on('click', function (e) {
        e.preventDefault();
        $("body, html").stop().animate({
          scrollTop: $("#" + $(this).attr('data-custom-scroll-to')).offset().top
        }, 1000, function () {
          $(window).trigger("resize");
        });
      });
    }
  }
});

