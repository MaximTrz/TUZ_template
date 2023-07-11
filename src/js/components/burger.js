/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
const burgerBtn = document.querySelector(".burger-btn");
const headerContainer = document.querySelector(".header__container");
const mainMenu = document.querySelector(".main-menu");

const openBurger = function () {
  burgerBtn.classList.add("--open");
  mainMenu.classList.add("--open");
};

const closeBurger = function () {
  burgerBtn.classList.remove("--open");
  mainMenu.classList.remove("--open");
};

burgerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (burgerBtn.classList.contains("--open")) {
    closeBurger();
  } else {
    openBurger();
  }
});
