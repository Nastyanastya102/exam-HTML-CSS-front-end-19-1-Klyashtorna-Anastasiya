$('.slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button" style="display: block;">Prev</button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block;">Next</button>',
    responsive: [
      
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  

  $('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: "<img src='img//fashion1.jpg' class='prev' alt='1'>",
    nextArrow: "<img src='img//fashion-next.jpg' class='next' alt='2'>",
    responsive: [
      
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  $('.slide-bar').slick({
   
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    variableWidth: true,
    
    prevArrow: "<img src='img//fashion1.jpg' class='button-for-last-slider-prev' alt='1'>",
    nextArrow: "<img src='img//fashion-next.jpg' class='button-for-last-slider-next' alt='2'>",
    responsive: [
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
 