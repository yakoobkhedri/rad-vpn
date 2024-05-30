// aos
AOS.init();
// mobile menu
let menu=document.querySelector('header .menu');
let li=Array.from(document.querySelectorAll('header .menu  > ul > li'));

document.getElementById('hamicon').addEventListener('click',function () {
  menu.classList.add('active');
  document.getElementById('hamicon').classList.add('active');
  document.getElementById('menuOverlay').classList.add('active');
  document.getElementById('menuOverlay').addEventListener('click',function () {
    this.classList.remove('active');
    menu.classList.remove('active');
  })
})
// scroll event
window.addEventListener('scroll',()=>{
  if (window.scrollY>40) {
    document.querySelector('header').style.backgroundColor='white';
    document.querySelector('header').style.boxShadow=' 0 0 50px 0 rgba(0, 0, 0, 0.1)'
  } else {
    document.querySelector('header').style.backgroundColor='transparent';
    document.querySelector('header').style.boxShadow='none'
  }
})
// swiper
var bannerSwiper= new Swiper(".bannerSwiper", {
  loop: true,
  spaceBetween: 35,
  slidesPerView: 1,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});