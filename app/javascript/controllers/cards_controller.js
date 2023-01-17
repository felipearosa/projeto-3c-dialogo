import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="cards"
export default class extends Controller {
  connect() {
    const swiper = new Swiper('.home__cards', {
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

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2
        },
        // when window width is >= 640px
        700: {
          slidesPerView: 3,
        },
        920: {
          slidesPerView: 4
        }
      }

    });

    const trainingCards = new Swiper('.training__cards', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      effect: 'creative',
      creativeEffect: {
        prev: {
          // will set `translateZ(-400px)` on previous slides
          translate: [0, 0, -400],
          shadow: true
        },
        next: {
          // will set `translateX(100%)` on next slides
          translate: ['100%', 0, 0],
          shadow: true
        },
      },

      autoplay: {
        delay: 3000,
      },
    });

  }
}
