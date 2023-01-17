import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="depo-cards"
export default class extends Controller {
  connect() {
    const swiper = new Swiper('.home__cards', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: '1',

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 3000,
      },

      effect: 'slide',

    });

    console.log('what')
  }
}
