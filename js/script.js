$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      loop: true,
      dots: true,
      margin: 10,
      slideSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      resonsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
          0 : {
              items: 1
          },
          768 : {
              items: 1
          },
          960 : {
              items: 3
          },
          1200 : {
              items: 3
          },
          1920 : {
              items: 3
          }
      }
  });  
    

  wow = new WOW({
                    mobile: false
                });
  wow.init();
    
});
