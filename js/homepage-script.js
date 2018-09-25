/* global $, jQuery, alert, console, document, window */
(function (document, window, $) {
    'use strict';
    $(document).ready(function () {
                      
		$('.myslider').owlCarousel({
			loop: true,
			items: 1,
			margin: 10,
			mouseDrag: false,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					nav: true
				},
				600: {
				    items: 1,
					nav: true
				},
				1000: {
					items: 1,
					nav: true,
					loop: true
				}
			}
		});
        
        // the count down for the upcoming game
        // Set the date we're counting down to
        var countDownDate = new Date(document.getElementById("place-the-countdown-date").innerHTML).getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            document.getElementById("demo1").innerHTML = days;
            document.getElementById("demo2").innerHTML = hours;
            document.getElementById("demo3").innerHTML = minutes;
            document.getElementById("demo4").innerHTML = seconds;
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);
        
        /* the timeline style of moving script for the review-boxes */
        $(window).scroll(function () {				 
            $('.rr-content #r-box').each(function(){
                var scrollTop     = $(window).scrollTop(),
                    elementOffset = $(this).offset().top,
                    distance      = (elementOffset - scrollTop),
                        windowHeight  = $(window).height(),
                        breakPoint    = windowHeight*0.9;

                    if(distance > breakPoint) {
                        $(this).addClass("move");	
                    }  if(distance < breakPoint) {
                        $(this).removeClass("move");	
                    }
            });
        });        
        
    });
})(document, window, jQuery);