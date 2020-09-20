

/* Show and hide menu */

$(document).ready(function(){
   
    'use strict';
     
    $(window).scroll(function() {
        
        'use strict';
        
        if($(window).scrollTop() < 80 ) {
            
           
            
            $('.navbar-default').css({
                'background-color': 'transparent'
    
            });
            $('.navbar-nav > li > a ').css({
                'padding-top': '25px',
                'color':'white'
                
            });
            
        } else {
            
            $('.navbar').css ({
               'margin-top': '0px',
                'opacity': '1'
                
            });
            
            $('.navbar-default').css({
                'background-color': 'lightgray'
                // 'border-color': '#444'
                
            });
            
            
            $('.navbar-nav > li > a ').css({
                'padding-top': '25px',
                'color':'black'
                
            });
            
            
        }
       
        
    });
    
    
});

//add smooth scrolling
$(document).ready(function() {
    
    'use strict';
   
    
    $('.nav-item, #scroll-to-top').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
    
    
});

// /* active menu item on click */
$(document).ready(function() {
    
    'use strict';
    
    
    $('.navbar-nav li a').click(function(){
        
        'use strict';
        
        $('.navbar-nav li a').parent().removeClass("active");
        
        $(this).parent().addClass("active");
    
    });
});

// highlight menu item on scroll
$(document).ready(function() {
    
    'use strict';
    
    $(window).scroll( function() {
        
        'use strict';
        
        $("section").each(function()  {
            
            'use strict';
            
            var bb = $(this).attr("id");  // ABOUT, CONTACT, DOWNLOAD
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;
            
            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
             
                $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
           
            } else {
                $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
                
            }
            
            
        });
    
    
    });
    
    
});

// add auto padding to header 

$(document).ready(function() {
    
    'use strict';
    
    setInterval( function() {
        
        'use strict';
        
        var windowHeight = $(window).height();
        
        var containerHeight = $(".header-container").height();
        
        var padTop = windowHeight - containerHeight;
        
        $(".header-container").css({
            
            'padding-top': Math.round( padTop / 2) + 'px',
            'padding-bottom': Math.round( padTop / 2) + 'px'
            
        });
        
        
    }, 10)
    
    
});

// Add bx slider to screens
$(document).ready(function() {
    
    $('.bxslider').bxSlider({
        
        slideWidth: 292.5,
        auto: true,
        minSlides: 1, 
        maxSlides: 3, 
        slideMargin: 50
    });
    
});


// Add counter
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
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


// Add animation/ Initialize Woo
$(document).ready(function() {
    
    'use strict';
   
    new WOW().init();
    
});

$("#back-top .link").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      900
    );
    return false;
  });

  var temp = $(window).height();
  $(window).on("scroll load", function (event) {
    if ($(window).scrollTop() > temp) {
      $("#back-top .link").addClass("show-btn");
    } else {
      $("#back-top .link").removeClass("show-btn");
    }
  });





// $(window).on("load", function () {
//     if ($(window).width() < 768) {
//       setTimeout(function () {
//         var header_height = $("header").height();
//         var tabBtn_height = $(
//           ".tab-search .nav-tabs .tab-btn-wrapper"
//         ).height();
//         console.log(tabBtn_height);
//         $(".page-banner").css("top", header_height * -1);
//         $(".page-banner").css(
//           "margin-bottom",
//           header_height * -1 - tabBtn_height
//         );
//       }, 0);
//     }
//     window.loading_screen = window.pleaseWait({
//       logo: "static/images/favicon.ico",
//       backgroundColor: "#121212",
//       loadingHtml: "<div class='spinner sk-spinner-wave'><div class='rect1'></div><div class='rect2'></div><div class='rect3'></div><div class='rect4'></div><div class='rect5'></div></div>",
//   });
//     function tmpshow() {
//       window.loading_screen.finish();
//       $("#divLoading").css("display", "none");
//     }
//     tmpshow();
//     // setTimeout(tmpshow(), 300);
//     if ($(window).width() >= 768 && $(window).width() <= 1024) {
//       $(window).on("resize", function () {
//         location.reload();
//       });
//     }
//   });


  (function(){
    // setup your carousels as you normally would using JS
    // or via data attributes according to the documentation
    // https://getbootstrap.com/javascript/#carousel
    $('#video-carousel').carousel({ interval: false });                 //Disable auto-slide
}());



/*
 * Video carousel - Dynamically load in YouTube videos based on 'data-id'
 */
    //Load the YouTube Iframe API
    var tag = document.createElement('script');

    tag.src = "//www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


    //This will be the object name for interacting with the videos in the rest of this code
    var videoArray = new Array();



    //Function: onYouTubePlayerAPIReady - Run when API is ready
    function onYouTubePlayerAPIReady() {
        
        //Look for video 'data-id' in the '.youtube-video' div
        var videos = document.querySelectorAll('#video-carousel .youtube-video');
        
        
        //Loop through each div found
        for (var i = 0; i < videos.length; i++) {

            //Create an array to hold the video IDs from 'data-id'
            dataset = videos[i].dataset.id;
            
            //This will be the variable name for inserting videos into the HTML divs
            var divID = 'vid-' + i.toString();
            
            //Setup video object, configure how videos should be presented
            videoArray[i] = new YT.Player(divID, {
                height: '100%',
                width: '100%',
                playerVars: {
                    'autoplay': 0,
                    'controls': 0,
                    'modestbranding': 1,
                    'rel': 0,
                    'showinfo': 0,
                    'loop': 1,
                    'iv_load_policy': 3
                },
                videoId: dataset, //Uses current looped ID from array
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
            
        }
    }



    //Function: onPlayerReady - Run when video player is ready
   


    //Function: onPlayerStateChange - Run when a videos state has changed
  


    //Bind Click and Touchstart events to the custom video button
    $( ".play-button-wrapper" ).bind("click touchstart", function() {

        //Find the active carousel slide and target the Iframe within it
        $("#video-carousel").find('.active iframe').each(function(){
            
            //Find the integer from the div ID and split - Use objectID[1] to output the integer
            var objectID = $(this).attr('id').split('-');

            
            //If the active slide's video is Playing
            if (videoArray[ objectID[1] ].getPlayerState() == 1) {
                videoArray[ objectID[1] ].pauseVideo();     //Pause video on click

            //If the active slide's video is Paused
            } else if (videoArray[ objectID[1] ].getPlayerState() == 2) {
                videoArray[ objectID[1] ].playVideo();      //Play video on click

            //If the video is doing anything else
            } else {
                videoArray[ objectID[1] ].playVideo();      //Play video on click
            }

        });
    });


    // $("#scroll-top .link").on("click", function () {
    //   $("body,html").animate({ scrollTop: 0 }, 900);
    //   return false;
    // });
    // var temp = $(window).height();
    // $(window).on("scroll load", function (event) {
    //   if ($(window).scrollTop() > temp) {
    //     $("#scroll-top .link").addClass("show-btn");
    //   } else {
    //     $("#scroll-top .link").removeClass("show-btn");
    //   }
    // });



    const resizeObserver = new ResizeObserver(entries => {
        for (const { target } of entries) {
          if (target) refreshPerspective(target);
        }
      });
      
      function initSlideshow(slideshow) {
        // Fade in
        slideshow.classList.add("in");
        
        // Observe for changes to slideshow's dimensions
        resizeObserver.observe(slideshow);
      
        // Auto scroll slideshow
        setInterval(() => {
          const firstImage = [...slideshow.children].reduce((prev, current) => (Number(prev.style.order) < Number(current.style.order)) ? prev : current);
          
          // Move the first image back in queue when it's out of view
          if (firstImage.width < slideshow.scrollLeft) {
            slideshow.scrollLeft = slideshow.scrollLeft - firstImage.width;
            firstImage.style.order = slideshow.children.length;
            for (const image of [...slideshow.children]) {
              if (image != firstImage) image.style.order = image.style.order-1;
            }
          } else {
            slideshow.scrollLeft += 1;
          }    
        }, 20);
      }
      
      function refreshPerspective(slideshow) {
        const perspective = slideshow.getBoundingClientRect().width / 2;
        slideshow.style.perspective = `${perspective}px`;
      
        // Translate each image accordingly
        {
          let perspectiveThreshold = perspective / 4;
          let prevZ = -1;
          for (const [i, image] of [...slideshow.children].entries()) {
            image.dataset.y = image.dataset.y || Math.random();
            image.dataset.z = image.dataset.z || Math.random();
      
            let [y, z] = [
              Math.floor(image.dataset.y * perspectiveThreshold) - (perspectiveThreshold / 2), 
              Math.floor(image.dataset.z * perspectiveThreshold)
            ];
      
            // Readjust z-translation if it's to close.
            while (perspective > 100 && Math.abs(prevZ - z) < (perspectiveThreshold * 0.2)) {
              image.dataset.z = Math.random();
              z = Math.floor(image.dataset.z * perspectiveThreshold);
            }
      
            prevZ = z;
            image.style.cssText = `
              order: ${i};
              transform: translate3d(0, ${y}px, ${z}px);
              z-index: ${z};
            `;
          }
        }
      
        slideshow.scrollLeft = 0;
        return perspective;
      }
      
      (async () => {
        // Using a for..of loop in case you want more slideshows on page.
        for (const slideshow of [...document.querySelectorAll(".slideshow")]) {
          // Wait for all images to load before initializing the slideshow
          for (const image of [...slideshow.children]) {
            await new Promise(resolve => {
              if (image.complete) resolve();
              else image.onload = resolve;
            });
          }
          
          // Let's go
          initSlideshow(slideshow);
        }
      })();

// Function for Fade-slider




// function toSpans(span) {
//     var str=span.firstChild.data;
//     var a=str.length;
//     span.removeChild(span.firstChild);
//     for(var i=0; i<a; i++) {
//       var theSpan=document.createElement("SPAN");
//       theSpan.appendChild(document.createTextNode(str.charAt(i)));
//       span.appendChild(theSpan);
//     }
//   }
//   function RainbowSpan(span, hue, deg, brt, spd, hspd) {
//       this.deg=(deg==null?360:Math.abs(deg));
//       this.hue=(hue==null?0:Math.abs(hue)%360);
//       this.hspd=(hspd==null?3:Math.abs(hspd)%360);
//       this.length=span.firstChild.data.length;
//       this.span=span;
//       this.speed=(spd==null?50:Math.abs(spd));
//       this.hInc=this.deg/this.length;
//       this.brt=(brt==null?255:Math.abs(brt)%256);
//       this.timer=null;
//       toSpans(span);
//       this.moveRainbow();
//   }
//   RainbowSpan.prototype.moveRainbow = function() {
//     if(this.hue>359) this.hue-=360;
//     var color;
//     var b=this.brt;
//     var a=this.length;
//     var h=this.hue;
//     for(var i=0; i<a; i++) {
  
//       if(h>359) h-=360;
//       if(h<60) { color=Math.floor(((h)/60)*b); red=b;grn=color;blu=0; }
//       else if(h<120) { color=Math.floor(((h-60)/60)*b); red=b-color;grn=b;blu=0; }
//       else if(h<180) { color=Math.floor(((h-120)/60)*b); red=0;grn=b;blu=color; }
//       else if(h<240) { color=Math.floor(((h-180)/60)*b); red=0;grn=b-color;blu=b; }
//       else if(h<300) { color=Math.floor(((h-240)/60)*b); red=color;grn=0;blu=b; }
//       else { color=Math.floor(((h-300)/60)*b); red=b;grn=0;blu=b-color; }
//       h+=this.hInc;
//       this.span.childNodes[i].style.color="rgb("+red+", "+grn+", "+blu+")";
//     }
//     this.hue+=this.hspd;
//   }
//   var r1=document.getElementById("r1"); //get span to apply rainbow
//   var myRainbowSpan=new RainbowSpan(r1, 0, 360, 255, 50, 18); //apply static rainbow effect
//   myRainbowSpan.timer=window.setInterval("myRainbowSpan.moveRainbow()", myRainbowSpan.speed);
//   var r2=document.getElementById("r2"); //get span to apply rainbow
//   var myRainbowSpan2=new RainbowSpan(r2, 0, 360, 255, 50, 348); //apply static rainbow effect
//   myRainbowSpan2.timer=window.setInterval("myRainbowSpan2.moveRainbow()", myRainbowSpan2.speed);



  /* 
 * Credit:
 * Modal: https://www.runoob.com/try/try.php?filename=trycss_image_modal_js
 * 3D-carrousel: https://codepen.io/jaskiranchhokar/pen/wmGXav
 * Modified by Hilbert Kong
 */

// var modals = document.getElementsByClassName("modal");

// for(let i = 0; i < modals.length; i++) {
//     let modal = modals[i];
    
//     let img = document.getElementsByClassName("content-carousel")[0].getElementsByTagName("img")[i];
//     let modalImg = document.getElementById("img" + i);
//     let captionText = document.getElementsByClassName("caption")[i];
    
//     img.onclick = function () {
//         modal.style.display = "block";
//         modalImg.src = this.src;
//         modalImg.alt = this.alt;
//         captionText.innerHTML = this.alt;
//     }
    
//     let span = document.getElementsByClassName("close")[i];
    
//     span.onclick = function () {
//         modal.style.display = "none";
//     }
// }




 // window.location.reload(true);
 function stopLoader() {
  $(".loader").fadeOut(2000);
   $(".overlay_loader").hide();

}
$(document).ready(function () {
  $(".overlay_loader").show();
  setTimeout(stopLoader, 3000);
 

  $("#click").click(function () {
    $("#nav").toggleClass("closed");
  });
});