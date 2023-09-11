/**
    *  
*/

; (function ($) {

    "use strict";

    var btnmenu = function() {
        if ($('header').hasClass('header')) {
            
            $('.show-search').on('click', function () {
                $(this).closest('.header-search').find('.top-search').toggleClass('active');
            });

            $('.mobile-button').on('click', function () {
              $(this).closest('#header_main').find('.mobile-nav-wrap').toggleClass('active');
            });
            $('.mobile-nav-close').on('click', function () {
                $(this).closest('#header_main').find('.mobile-nav-wrap').toggleClass('active');
            });
            $('.mobile-nav-wrap .overlay-mobile-nav').on('click', function () {
                $(this).closest('#header_main').find('.mobile-nav-wrap').toggleClass('active');
            });
    
            $(document).on("click", ".menu-item-has-children-mobile", function () {
                var args = { duration: 600 };
                if ($(this).hasClass("active")) {
                  $(this).children(".sub-menu-mobile").slideUp(args);
                  $(this).removeClass("active");
                } else {
                  $(".sub-menu-mobile").slideUp(args);
                  $(this).children(".sub-menu-mobile").slideDown(args);
                  $(".menu-item-has-children-mobile").removeClass("active");
                  $(this).addClass("active");
                }
          });
            
        }
    }

    var video = function(){
        if ($('div').hasClass('video-wrap')) {
          $('.popup-youtube').magnificPopup({
            type: 'iframe'
          });
        }
      };

    // Dom Ready
    $(function () {
        btnmenu();
        video();
    });

})(jQuery);
