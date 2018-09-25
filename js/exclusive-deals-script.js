/* global $, jQuery, alert, console, document, window */
(function (document, window, $) {
    'use strict';
    $(document).ready(function () {
       
		$('.mygames').owlCarousel({
			loop: true,
			items: 5,
            margin: 10,
            autoplay:true,
            autoplayTimeout:2000,            
            nav: false,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					nav: false
				},                
				600: {
				    items: 3,
					nav: false
				},
				1000: {
					items: 5,
					loop: true
				}
			}
		});
        
        // the count down for the offer deadline
        // Set the date we're counting down to
        var countDownDate = new Date("Dec 4, 2020 15:37:25").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
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
        
    });
})(document, window, jQuery);