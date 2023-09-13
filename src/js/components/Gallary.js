class Gallary {
  constructor(selector) {
    // Находим элемент .gallary внутри указанного селектора
    this.galleryElement = document.querySelector(selector);

    if (!this.galleryElement) {
      console.error(`Element with selector "${selector}" not found.`);
      return;
    }

    // Находим элемент .gallary__viewed внутри .gallary
    this.viewedImage = this.galleryElement.querySelector(".gallary__viewed");

    if (!this.viewedImage) {
      console.error(
        'Element with class "gallary__viewed" not found inside the gallery.'
      );
      return;
    }

    // Находим все элементы .gallary__img внутри .gallary
    this.imageElements = this.galleryElement.querySelectorAll(".gallary__img");

    if (this.imageElements.length === 0) {
      console.error(
        'No elements with class "gallary__img" found inside the gallery.'
      );
      return;
    }

    // Добавляем обработчик клика для каждого .gallary__img
    this.imageElements.forEach((img) => {
      img.addEventListener("click", () => {
        // Получаем значение атрибута style у выбранного .gallary__img
        const imgStyle = img.getAttribute("style");

        // Устанавливаем значение атрибута style для .gallary__viewed
        this.viewedImage.setAttribute("style", imgStyle);
      });
    });
  }
}
