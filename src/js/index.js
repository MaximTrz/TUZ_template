document.addEventListener("DOMContentLoaded", function () {
  //= components/swiper.js
});

window.addEventListener("load", function () {
  //= components/news_paragraph.js
  //= components/burger.js
  //= components/ontop.js
  //= components/Gallary.js

  // Использование класса Gallary
  if (document.querySelector(".gallary") !== null) {
    const myGallery = new Gallary(".gallary");
  }
  //
});
