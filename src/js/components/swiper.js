// eslint-disable-next-line no-unused-vars, no-undef
const swiper = new Swiper(".js-main-swiper", {
  slidesPerView: 1,
  dynamicBullets: true,
  loop: true,
  pagination: {
    el: ".main-slider__pagination",
  },
  navigation: {
    nextEl: ".main-slider__next",
    prevEl: ".main-slider__prev",
  },
  autoplay: {
    delay: 5000,
  },
});

const newsSwiper = new Swiper(".js-news-swiper", {
  slidesPerView: 3,
  dynamicBullets: true,
  spaceBetween: 25,
  pagination: {
    el: ".news__pagination",
  },
  navigation: {
    nextEl: ".news__next",
    prevEl: ".news__prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});

const playsSwiper = new Swiper(".js-plays-swiper", {
  slidesPerView: 3,
  dynamicBullets: true,
  spaceBetween: 25,
  pagination: {
    el: ".plays__pagination",
  },
  navigation: {
    nextEl: ".plays__next",
    prevEl: ".plays__prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});

const peoplesSwiper = new Swiper(".js-peoples-swiper", {
  slidesPerView: 4,
  dynamicBullets: true,
  spaceBetween: 25,
  pagination: {
    el: ".peoples__pagination",
  },
  navigation: {
    nextEl: ".peoples__next",
    prevEl: ".peoples__prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  },
  autoplay: {
    delay: 5000,
  },
});
