// eslint-disable-next-line no-unused-vars, no-undef
const swiper = new Swiper(".js-main-swiper", {
  slidesPerView: 1,
  dynamicBullets: true,
  pagination: {
    el: ".main-slider__pagination",
  },
  navigation: {
    nextEl: ".main-slider__next",
    prevEl: ".main-slider__prev",
  },
});
