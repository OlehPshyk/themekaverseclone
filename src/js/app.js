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


  $('.js-work-slider').slick({
    arrows: false,
    autoplay: false,
    dots: true,
    initialSlide: 0,
    infinite: false,    
    slidesToShow: 2,
    slidesToScroll: 2,
    touchMove: false,
  })
  
  $('.js-work-slider').css({"opacity": "1","transition": "opacity 0.5s ease"});

  let heroVideo = document.getElementById('hero-video');
  document.addEventListener('scroll', function() {    
    heroVideo.style.transform=`translateY(${window.pageYOffset/2}px)`;
  });  
  heroVideo.addEventListener('loadedmetadata', () => {
    const registerVideo = (bound, video) => {
      bound = document.querySelector(bound);
      video = document.querySelector(video);
      const scrollVideo = ()=>{
        if(video.duration) {        
          const rawPercentScrolled = window.pageYOffset / window.innerHeight;
          const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
          video.currentTime = video.duration * percentScrolled;
          // video.currentTime = video.duration * Math.min(Math.max(window.pageYOffset / window.innerHeight, 0), 1);
        }      
        requestAnimationFrame(scrollVideo);      
      }
      requestAnimationFrame(scrollVideo);    
    }
    registerVideo("#hero-video", "#hero-video");
  })

  

  

  

});
if (module.hot) {
  module.hot.accept();
}
