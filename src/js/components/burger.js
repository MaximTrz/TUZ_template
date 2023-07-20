/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
const burgerBtn = document.querySelector(".burger-btn");
const headerContainer = document.querySelector(".header__container");
const mainMenu = document.querySelector(".main-menu");
const logo = document.querySelector(".header__logo");
const container = document.querySelector(".header__container");

const openBurger = function () {
  burgerBtn.classList.add("--open");
  mainMenu.classList.add("--open");
  container.classList.add("--open");
  logo.style.opacity = 0;
  document.body.style.overflow = "hidden";
};

const closeBurger = function () {
  burgerBtn.classList.remove("--open");
  mainMenu.classList.remove("--open");
  logo.style.opacity = 1;
  document.body.style.overflow = "";
};

burgerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (burgerBtn.classList.contains("--open")) {
    closeBurger();
  } else {
    openBurger();
  }
});
