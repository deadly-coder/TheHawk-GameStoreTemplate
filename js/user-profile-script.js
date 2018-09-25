/* global jQuery, document, window, FileReader*/
(function (document, window, $) {
    'use strict';
    $(document).ready(function () {
        
        $('.file-up').each(function () {
            var $input	 = $(this),
                $label	 = $input.next('label'),
                labelVal = $label.html();

            $input.on('change', function (e) {
                var fileName = '';

                if (this.files && this.files.length > 1) {
                    fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
                } else if (e.target.value) {
                    fileName = e.target.value.split('\\').pop();
                }
                
                if (fileName) {
                    $label.find('span').html(fileName);
                } else {
                    $label.html(labelVal);
                }
            });

            // Firefox bug fix
            $input
                   .on('focus', function () { $input.addClass('has-focus'); })
                   .on('blur', function () { $input.removeClass('has-focus'); });
        });
        
        /* make the input of edit the description appear */
        $('#edit-description').click(function () {
            $('#description').addClass("disappear");
            $('#description-form').addClass("appear");
        });
        
        $('#description').click(function () {
            $(this).addClass("disappear");
            $('#description-form').addClass("appear");
        });        
        
        $('#cancel-description').click(function () {
            $('#description').removeClass("disappear");
            $('#description-form').removeClass("appear");
        });     
        
        /* see more notifications */
        $('#more-notif').click(function () {
            $('#nc').addClass("more");
            $(this).addClass("disappear");
            $('#less-notif').removeClass("disappear");
        });
        
        $('#less-notif').click(function () {
            $('#nc').removeClass("more");
            $(this).addClass("disappear");
            $('#more-notif').removeClass("disappear");            
        });
        
    });
      
})(document, window, jQuery);

/* edit description */
function editDescription() {
    var x = document.getElementById("edit-here").value;
    document.getElementById("description").innerHTML = x;
    document.getElementById("description-m").innerHTML = x;
}

/* change the profile image function */
 function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#profile-image').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

/* user background image change button function */
$(switchBackground);
var oFReader = new FileReader(),
    rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;

oFReader.onload = function(oFREvent) {
    localStorage.setItem('b', oFREvent.target.result);
    switchBackground();
};

function switchBackground() {
  var backgroundImage = localStorage.getItem('b');
  if (backgroundImage) {
    $('#user-header').css('background-image', 'url(' + localStorage.getItem('b') + ')');    
  } 
}

function loadImageFile(testEl) {
  if (! testEl.files.length) { return; }
  var oFile = testEl.files[0];
  if (!rFilter.test(oFile.type)) { alert("You must select a valid image file!"); return; }
  oFReader.readAsDataURL(oFile);
}

