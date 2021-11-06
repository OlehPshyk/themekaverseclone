import 'slick-carousel';


document.addEventListener('DOMContentLoaded', () => {
  const removeLoading = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    document.querySelector('.global-loader').style.opacity=(0);    
    setTimeout(function(){document.querySelector('.global-loader').remove();},1000);
  }
  setTimeout(removeLoading,300); 

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
  let timelineVideo = document.getElementById('timeline');
  let timelineContainer = document.querySelector('#timeline-container');

  document.addEventListener('scroll', function() {    
    heroVideo.style.transform=`translateY(${window.pageYOffset/2}px)`;
    let containerTop = timelineContainer.getBoundingClientRect().top;
    if(containerTop < (250 + window.innerHeight*0.2)) {      
      timelineVideo.style.transform=`translateY(${ (containerTop - window.innerHeight*0.2 - 250)*(-1) }px)`;
    }else{
      timelineVideo.style.transform=`translateY(0)`;
    }
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

  
  timelineVideo.addEventListener('loadedmetadata', () => {
    const registerVideoContainer = (bound, video) => {
      bound = document.querySelector(bound);
      video = document.querySelector(video);
      const scrollVideo = ()=>{
        if(video.duration) {
          const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top - 250;
          const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight + 250);
          const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);          
          video.currentTime = video.duration * percentScrolled;
        }
        requestAnimationFrame(scrollVideo);
      }
      requestAnimationFrame(scrollVideo);
    }
    
    
    registerVideoContainer("#timeline-container", "#timeline");
  })
  

  
  

});
if (module.hot) {
  module.hot.accept();
}
