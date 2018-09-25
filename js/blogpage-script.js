/* global $, jQuery, alert, console, document, window */
(function (document, window, $) {
    'use strict';
    $(document).ready(function () {
        $('.reply-btn').on('click', function() {
            $(this).parent("li").parent("ul").parent(".comment-footer").parent(".comment-post").parent(".comment").siblings('.reply-comments').slideToggle(600);
        });  
    });
    
})(document, window, jQuery);