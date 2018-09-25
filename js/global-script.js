/* global $, jQuery, alert, console, document, window */
(function (document, window, $) {
    'use strict';
    $(document).ready(function () {
       
        // switch on the tooltip
        $(function () {
          $('[data-toggle="tooltip"]').tooltip()
        });
        
        // the menu button action for the navbar in phones screen
        $(function () {
            var pull        = $('#pull'),
            menu        = $('.header-nav li'),
            menuHeight  = menu.height();

            $(pull).on('click', function (e) {
                e.preventDefault();
                menu.slideToggle();
            });

            $(window).resize(function () {
                var w = $(window).width();
                if (w > 600 && menu.is(':hidden')) {
                    menu.removeAttr('style');
                }
            });
        });

        /* comment reply system */
        $('.reply-btn').on('click', function() {
            $(this).parent("li").parent("ul").parent(".comment-footer").parent(".comment-post").parent(".comment").siblings('.reply-comments').slideToggle(600);
        });          
        
    });
})(document, window, jQuery);