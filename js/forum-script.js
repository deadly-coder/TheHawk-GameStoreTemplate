/* global jQuery, document, window*/
(function (document, window, $) {
    'use strict';
    $(document).ready(function () {
        $('#text-value').keypress(function () {
            $('.preview').addClass('appear');
        });
        $('#title-value').keypress(function () {
            $('.preview').addClass('appear');
        });
        
        /* ------------------------------- */
        
        $('#close-p').click(function () {
            $('.preview').removeClass('appear');
        }); 
        
        /* ------------------------------- */
        $('.expand-all-btn').click(function () {
            $('.reply-comments').slideToggle(300);
        });
        
        $('.reply-btn').on('click', function() {
            $(this).parent(".user-comment").parent(".Cbody-inner").parent(".Cbody").parent(".uc-content").siblings('.reply-comments').slideToggle(500);
        }); // end click        
                
    });
      
})(document, window, jQuery);

/* preview text from the textarea */
function previewFunction() {
    var x = document.getElementById("text-value").value;
    var y = document.getElementById("title-value").value;
    document.getElementById("text-preview").innerHTML = x;    
    document.getElementById("title-preview").innerHTML = y;    
}

/* place image in the text function */
 function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image-in-text').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}