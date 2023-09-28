/**
    *  
*/

; (function ($) {

    "use strict";

    var headerFixed = function () {
      if ($("header").hasClass("header-fixed")) {
        var nav = $("#header_main");
  
        if (nav.length) {
          var offsetTop = nav.offset().top,
            headerHeight = nav.height(),
            injectSpace = $("<div>", {
              height: headerHeight,
            });
          injectSpace.hide();
  
          if ($("header").hasClass("style-absolute")) {
            injectSpace.hide();
          } else {
            injectSpace.insertAfter(nav);
          }
  
          $(window).on("load scroll", function () {
            if ($(window).scrollTop() > offsetTop + headerHeight) {
              nav.addClass("is-fixed");
              injectSpace.show();
              $(".header-2 .top").hide();
            } else {
              nav.removeClass("is-fixed");
              injectSpace.hide();
              $(".header-2 .top").show();
            }
  
            if ($(window).scrollTop() > 500) {
              nav.addClass("is-small");
            } else {
              nav.removeClass("is-small");
            }
          });
        }
      }
    };

    var btnmenu = function() {
        if ($('header').hasClass('header')) {

          $('.canvas').on('click', function () {
            $(this).closest('#header_main').find('.canvas-nav-wrap').toggleClass('active');
          });
          $('.canvas-nav-close').on('click', function () {
              $(this).closest('#header_main').find('.canvas-nav-wrap').toggleClass('active');
          });
          $('.canvas-nav-wrap .overlay-canvas-nav').on('click', function () {
              $(this).closest('#header_main').find('.canvas-nav-wrap').toggleClass('active');
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

    var topSearch=function(){
        
      $(document).on('click',function(e){
          var clickID=e.target.id;if((clickID!=='s')){
              $('.top-search').removeClass('active');
          }});
      $(document).on('click',function(e){
          var clickID=e.target.class;if((clickID!=='a111')){
              $('.show-search').removeClass('active');
      }});
          
      $('.show-search').on('click',function(event){
          event.stopPropagation();});
      $('.search-form').on('click',function(event){
          event.stopPropagation();});
      $('.show-search').on('click',function(event){
          if(!$('.top-search').hasClass("active")){
              $('.top-search').addClass('active');
                  event.preventDefault();
              }
          else
              $('.top-search').removeClass('active');
              event.preventDefault();
              if(!$('.show-search').hasClass("active"))
                  $('.show-search').addClass('active');
              else
                  $('.show-search').removeClass('active'); 
      })
    ;}

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
        });

        skipSlider.noUiSlider.on("update", function (values, handle) {
          skipValues[handle].innerHTML = "$" + values[handle];
        });
      }
    };

    var styleshop = function() {
      if ($('div').hasClass('wg-shop')) {
        $('.button-list').on('click',function() {
            $('.wg-shop-content').find('.col-md-6').removeClass('col-md-6').addClass('col-xl-12');
            $('.wg-shop-content').find('.product-item').addClass('style-list');
          })
        $('.button-grid').on('click',function() {
            $('.wg-shop-content').find('.col-xl-12').removeClass('col-xl-12').addClass('col-md-6');
            $('.wg-shop-content').find('.product-item').removeClass('style-list');
        })
      }
    };

    var btnQuantity = function () {
      $(".minus-btn").on("click", function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest("div").find("input");
        var value = parseInt($input.val());
  
        if (value > 1) {
          value = value - 1;
        }
  
        $input.val(value);
      });
  
      $(".plus-btn").on("click", function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest("div").find("input");
        var value = parseInt($input.val());
  
        if (value > 0) {
          value = value + 1;
        }
  
        $input.val(value);
      });
    };

    // Dom Ready
    $(function () {
      headerFixed();
      btnmenu();
      topSearch();
      video();
      counter();
      flatAccordion('.flat-accordion','.flat-toggle');
      tabs(); 
      rangeslider();
      styleshop();
      btnQuantity();
    });

})(jQuery);
