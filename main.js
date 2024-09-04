AOS.init();
// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!
  gsap.from('.intro', {
    x: -800,
    opacity:0,
    scrollTrigger:{
      trigger: '.slogan',
      scrub: 1,
    },
  });
  gsap.from('.introImg1', {
    x: 500,
    opacity:0,
    scrollTrigger:{
      trigger: '.slogan',
      // duration: 3,  >> 秒數
      scrub: 1,
    },
  });
  gsap.from('.introImg2', {
    x: 1500,
    opacity:0,
    scrollTrigger:{
      trigger: '.slogan',
      scrub: 1,
    },
  });
  gsap.from('.introImg3', {
    x: 2000,
    opacity:0,
    scrollTrigger:{
      trigger: '.slogan',
      scrub: 1,
    },
  });

  gsap.from('.projects', {
    y: -200,
    opacity:0,
    duration:1,
    scrollTrigger: {
      trigger:'.projR',
      scrub: 1,
    },
  });

});