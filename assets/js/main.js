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

    var counter = function () {
      if ($(document.body).hasClass("counter-scroll")) {
        var a = 0;
        $(window).scroll(function () {
          var oTop = $(".counter").offset().top - window.innerHeight;
          if (a == 0 && $(window).scrollTop() > oTop) {
            if ($().countTo) {
              $(".counter")
                .find(".number")
                .each(function () {
                  var to = $(this).data("to"),
                    speed = $(this).data("speed");
                  $(this).countTo({
                    to: to,
                    speed: speed,
                  });
                });
            }
            a = 1;
          }
        });
      }
    };

    var flatAccordion = function (class1,class2) {
      var args = { duration: 600 };

      $(class2 + ' .toggle-title.active').siblings('.toggle-content').show();
      $(class1 +' .toggle-title').on('click', function () {
          $(class1 + ' ' + class2).removeClass('active');
          $(this).closest(class2).toggleClass('active');

          if( !$(this).is('.active') ) {
              $(this).closest(class1).find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
              $(this).toggleClass('active');
              $(this).next().slideToggle(args);
          } else {
              $(class1 + ' ' + class2).removeClass('active');
              $(this).toggleClass('active');
              $(this).next().slideToggle(args);
          }     
      });
    };

    var tabs = function(){
      $('.widget-tabs').each(function(){
          $(this).find('.widget-content-tab').children().hide();
          $(this).find('.widget-content-tab').children(".active").show();
          $(this).find('.widget-menu-tab').children('li').on('click',function(){
              var liActive = $(this).index();
              var contentActive=$(this).siblings().removeClass('active').parents('.widget-tabs').find('.widget-content-tab').children().eq(liActive);
              contentActive.addClass('active').fadeIn("slow");
              contentActive.siblings().removeClass('active');
              $(this).addClass('active').parents('.widget-tabs').find('.widget-content-tab').children().eq(liActive).siblings().hide();
          });
      });
  };

    // Dom Ready
    $(function () {
        btnmenu();
        video();
        counter();
        flatAccordion('.flat-accordion','.flat-toggle');
        tabs(); 
    });

})(jQuery);
