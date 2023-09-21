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

    var rangeslider = function () {
      if ($("#range-two-val").length > 0) {
        var skipSlider = document.getElementById("range-two-val");
        var skipValues = [
          document.getElementById("skip-value-lower"),
          document.getElementById("skip-value-upper")
        ];

        noUiSlider.create(skipSlider, {
          start: [20, 99],
          connect: true,
          behaviour: "drag",
          step: 1,
          range: {
            min: 20,
            max: 120
          },
          format: {
            from: function (value) {
              return parseInt(value);
            },
            to: function (value) {
              return parseInt(value);
            }
          }
        });

        skipSlider.noUiSlider.on("update", function (values, handle) {
          skipValues[handle].innerHTML = values[handle];
        });
      }
    };

    var styleshop = function() {
      if ($('div').hasClass('wg-shop')) {
        $('.button-list').on('click',function() {
            $('.wg-shop-content').find('.col-xl-6').removeClass('col-xl-6').addClass('col-12');
            $('.wg-shop-content').find('.product-item').addClass('style-list');
          })
        $('.button-grid').on('click',function() {
            $('.wg-shop-content').find('.col-12').removeClass('col-12').addClass('col-xl-6');
            $('.wg-shop-content').find('.product-item').removeClass('style-list');
        })
      }
    };

    // Dom Ready
    $(function () {
        btnmenu();
        video();
        counter();
        flatAccordion('.flat-accordion','.flat-toggle');
        tabs(); 
        rangeslider();
        styleshop();
    });

})(jQuery);
