// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"
import { fixNavbar } from "./misc/navbar";

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: '4',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  effect: 'slide',
  fadeEffect: {
    crossFade: true
  },

});

document.querySelector('.section__text').getBoundingClientRect()

fixNavbar();


// 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards'
