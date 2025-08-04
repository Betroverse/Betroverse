gsap.registerPlugin(ScrollTrigger); 

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('.hamburger-menu').addEventListener("click", function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  });
});

// ----------GSAP------------

const elements = ['#hero .animate span', '#about-container .animate span', '#brand .animate span', '#footer .animate span'];

elements.forEach((selector) => {
  gsap.from(selector,{
    y:300,
    rotation : 15,
    duration : 1,
    stagger : 0.2,
    ease : 'power4.out',

    scrollTrigger : {
      trigger : selector,
      start : 'top 120%',
      end : 'bottom 90%',
      toggleAction : 'restart none none none',
    }

  })
});

// ----------GSAP Image------------

gsap.to('#image-section .overlay',{
  scrollTrigger : {
      trigger : '#image-section',
      start : 'top 90%',
      end : 'bottom bottom',
      scrub : 1,
    },
    width : '86vw',
})

// ----------GSAP Card------------

gsap.fromTo('#service-project .grid .item',{
  opacity : 0,
  y : 100,
},{
  opacity : 1,
  y: 0,
  duration : 1,
  stagger : 0.2,
  scrollTrigger : {
    trigger : '#service-project .grid',
      start : 'top 100%',
      end : 'bottom bottom',
      toggleAction : 'play none none none',
  }
})

// ----------GSAP Brand------------

var copyfirst = document.querySelector('.logos-slide').cloneNode(true);
document.querySelector('.logos').appendChild(copyfirst);

var copysecond = document.querySelector('.logos-slide-rev').cloneNode(true);
document.querySelector('.logos-rev').appendChild(copysecond);


// Initialize Lenis
const lenis = new Lenis({
  duration: 6,
});


// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);