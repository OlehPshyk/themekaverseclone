import 'slick-carousel';

document.addEventListener('DOMContentLoaded', () => { 
  // console.log("Start APP");



  $('.js-gallery-slider').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    autoplaySpeed: 6000,
    // respondTo: 'window',    
    initialSlide: 0,
    infinite: true,    
    // slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    touchMove: true,
    variableWidth: true,
    pauseOnHover: false,
  })
  
  $('.js-gallery-slider').css({"opacity": "1","transition": "opacity 0.5s ease"});

  $('.gallery-item').on('click',function() {    
    $('.js-gallery-slider').slick("slickNext");
  });

});
if (module.hot) {
  module.hot.accept();
}
