/* global, jQuery, document, window */
(function (document, window, $) {
    'use strict';
    $(document).ready(function () {
                      
		$('.trend-body').owlCarousel({
			loop: true,
			items: 1,
			margin: 10,
            autoplay: true,
            autoplayTimeout: 2000,
            nav: false,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					nav: false
				},
				600: {
				    items: 1,
					nav: false
				},
				1000: {
					items: 1,
					nav: false,
					loop: true
				}
			}
		});
             
    });
})(document, window, jQuery);