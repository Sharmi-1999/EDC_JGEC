"use strict";

/* Show and hide menu */
// $(document).ready(function(){
//   'use strict';
//   $(window).scroll(function() {
//       'use strict';
//       if($(window).scrollTop() < 80 ) {
//           $('.navbar-default').css({
//               'background-color': 'rgb(70, 66, 66)'
//           });
//       } else {
//           $('.navbar').css ({
//              'margin-top': '0px',
//               'opacity': '1'
//           });
//           $('.navbar-default').css({
//               'background-color': 'rgb(70, 66, 66)',
//               'border-color': '#444'
//           });
//          ;
//           $('.navbar-nav > li > a ').css({
//               'padding-top': '15px'
//           });
//       }
//   });
// });
// //add smooth scrolling
// $(document).ready(function() {
//   'use strict';
//   $('.nav-item, #scroll-to-top').click(function() {
//   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//     var target = $(this.hash);
//     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//     if (target.length) {
//       $('html, body').animate({
//         scrollTop: target.offset().top
//       }, 1000);
//       return false;
//     }
//   }
// });
// });
// /* active menu item on click */
// $(document).ready(function() {
//   'use strict';
//   $('.navbar-nav li a').click(function(){
//       'use strict';
//       $('.navbar-nav li a').parent().removeClass("active");
//       $(this).parent().addClass("active");
//   });
// });
// // highlight menu item on scroll
// $(document).ready(function() {
//   'use strict';
//   $(window).scroll( function() {
//       'use strict';
//       $("section").each(function()  {
//           'use strict';
//           var bb = $(this).attr("id");  // ABOUT, CONTACT, DOWNLOAD
//           var hei = $(this).outerHeight();
//           var grttop = $(this).offset().top - 70;
//           if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
//               $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
//           } else {
//               $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
//           }
//       });
//   });
// });
// // add auto padding to header 
// $(document).ready(function() {
//   'use strict';
//   setInterval( function() {
//       'use strict';
//       var windowHeight = $(window).height();
//       var containerHeight = $(".header-container").height();
//       var padTop = windowHeight - containerHeight;
//       $(".header-container").css({
//           'padding-top': Math.round( padTop / 2) + 'px',
//           'padding-bottom': Math.round( padTop / 2) + 'px'
//       });
//   }, 10)
// });
// // Add bx slider to screens
// $(document).ready(function() {
//   $('.bxslider').bxSlider({
//       slideWidth: 292.5,
//       auto: true,
//       minSlides: 1, 
//       maxSlides: 3, 
//       slideMargin: 50
//   });
// });
// // Add counter
// $(document).ready(function() {
//   $('.counter-num').counterUp({
//       delay: 10,
//       time: 2000
//   });
// });
// // Add animation/ Initialize Woo
// $(document).ready(function() {
//   'use strict';
//   new WOW().init();
// });

/* Show and hide menu */
$(document).ready(function () {
  'use strict';

  $(window).scroll(function () {
    'use strict';

    if ($(window).scrollTop() < 80) {
      $('.navbar-default').css({
        'background-color': 'transparent'
      });
      $('.navbar-nav > li > a ').css({
        'padding-top': '25px',
        'color': 'white'
      });
    } else {
      $('.navbar').css({
        'margin-top': '0px',
        'opacity': '1'
      });
      $('.navbar-default').css({
        'background-color': 'lightgray' // 'border-color': '#444'

      });
      $('.navbar-nav > li > a ').css({
        'padding-top': '25px',
        'color': 'black'
      });
    }
  });
}); //add smooth scrolling

$(document).ready(function () {
  'use strict';

  $('.nav-item, #scroll-to-top').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
}); // /* active menu item on click */

$(document).ready(function () {
  'use strict';

  $('.navbar-nav li a').click(function () {
    'use strict';

    $('.navbar-nav li a').parent().removeClass("active");
    $(this).parent().addClass("active");
  });
}); // highlight menu item on scroll

$(document).ready(function () {
  'use strict';

  $(window).scroll(function () {
    'use strict';

    $("section").each(function () {
      'use strict';

      var bb = $(this).attr("id"); // ABOUT, CONTACT, DOWNLOAD

      var hei = $(this).outerHeight();
      var grttop = $(this).offset().top - 70;

      if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
        $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
      } else {
        $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
      }
    });
  });
}); // add auto padding to header 

$(document).ready(function () {
  'use strict';

  setInterval(function () {
    'use strict';

    var windowHeight = $(window).height();
    var containerHeight = $(".header-container").height();
    var padTop = windowHeight - containerHeight;
    $(".header-container").css({
      'padding-top': Math.round(padTop / 2) + 'px',
      'padding-bottom': Math.round(padTop / 2) + 'px'
    });
  }, 10);
}); // Add bx slider to screens

$(document).ready(function () {
  $('.bxslider').bxSlider({
    slideWidth: 292.5,
    auto: true,
    minSlides: 1,
    maxSlides: 3,
    slideMargin: 50
  });
}); // Add counter
// $(document).ready(function() {
//     $('.counter-num').counterUp({
//         delay: 10,
//         time: 2000
//     });
// });

$('.counter-num').each(function () {
  $(this).prop('Counter-num', 0).animate({
    Counter: $(this).text()
  }, {
    duration: 5000,
    easing: 'swing',
    step: function step(now) {
      $(this).text(Math.ceil(now));
    }
  });
}); // Add animation/ Initialize Woo

$(document).ready(function () {
  'use strict';

  new WOW().init();
});
$("#back-top .link").on("click", function () {
  $("body,html").animate({
    scrollTop: 0
  }, 900);
  return false;
});
var temp = $(window).height();
$(window).on("scroll load", function (event) {
  if ($(window).scrollTop() > temp) {
    $("#back-top .link").addClass("show-btn");
  } else {
    $("#back-top .link").removeClass("show-btn");
  }
}); // class parallaxTiltEffect {
//     constructor({element, tiltEffect}) {
//       this.element = element;
//       this.container = this.element.querySelector(".team");
//       this.size = [300, 360];
//       [this.w, this.h] = this.size;
//       this.tiltEffect = tiltEffect;
//       this.mouseOnComponent = false;
//       this.handleMouseMove = this.handleMouseMove.bind(this);
//       this.handleMouseEnter = this.handleMouseEnter.bind(this);
//       this.handleMouseLeave = this.handleMouseLeave.bind(this);
//       this.defaultStates = this.defaultStates.bind(this);
//       this.setProperty = this.setProperty.bind(this);
//       this.init = this.init.bind(this);
//       this.init();
//     }
//     handleMouseMove(event) {
//       const {offsetX, offsetY} = event;
//       let X;
//       let Y;
//       if (this.tiltEffect === "reverse") {
//         X = ((offsetX - (this.w/2)) / 3) / 3;
//         Y = (-(offsetY - (this.h/2)) / 3) / 3;
//       }
//       else if (this.tiltEffect === "normal") {
//         X = (-(offsetX - (this.w/2)) / 3) / 3;
//         Y = ((offsetY - (this.h/2)) / 3) / 3;
//       }
//       this.setProperty('--rY', X.toFixed(2));
//       this.setProperty('--rX', Y.toFixed(2));
//       this.setProperty('--bY', (80 - (X/4).toFixed(2)) + '%');
//       this.setProperty('--bX', (50 - (Y/4).toFixed(2)) + '%');
//     }
//     handleMouseEnter() {
//       this.mouseOnComponent = true;
//       this.container.classList.add("team--active");
//     }
//     handleMouseLeave() {
//       this.mouseOnComponent = false;
//       this.defaultStates();
//     }
//     defaultStates() {
//       this.container.classList.remove("team--active");
//       this.setProperty('--rY', 0);
//       this.setProperty('--rX', 0);
//       this.setProperty('--bY', '80%');
//       this.setProperty('--bX', '50%');
//     }
//     setProperty(p, v) {
//       return this.container.style.setProperty(p, v);
//     }
//     init() {
//       this.element.addEventListener('mousemove', this.handleMouseMove);
//       this.element.addEventListener('mouseenter', this.handleMouseEnter);
//       this.element.addEventListener('mouseleave', this.handleMouseLeave);
//     }
//   }
//   const $ = e => document.querySelector(e);
//   const wrap1 = new parallaxTiltEffect({
//     element: $('.wrap--1'),
//     tiltEffect: 'reverse'
//   });
//   const wrap2 = new parallaxTiltEffect({
//     element: $('.wrap--2'),
//     tiltEffect: 'normal'
//   });
//   const wrap3 = new parallaxTiltEffect({
//     element: $('.wrap--3'),
//     tiltEffect: 'reverse'
//   });

$(window).on("load", function () {
  if ($(window).width() < 768) {
    setTimeout(function () {
      var header_height = $("header").height();
      var tabBtn_height = $(".tab-search .nav-tabs .tab-btn-wrapper").height();
      console.log(tabBtn_height);
      $(".page-banner").css("top", header_height * -1);
      $(".page-banner").css("margin-bottom", header_height * -1 - tabBtn_height);
    }, 0);
  }

  window.loading_screen = window.pleaseWait({
    logo: "static/images/favicon.ico",
    backgroundColor: "#121212",
    loadingHtml: "<div class='spinner sk-spinner-wave'><div class='rect1'></div><div class='rect2'></div><div class='rect3'></div><div class='rect4'></div><div class='rect5'></div></div>"
  });

  function tmpshow() {
    window.loading_screen.finish();
    $("#divLoading").css("display", "none");
  } // tmpshow();


  setTimeout(tmpshow(), 300);

  if ($(window).width() >= 768 && $(window).width() <= 1024) {
    $(window).on("resize", function () {
      location.reload();
    });
  }
});