"use strict";

/*
/ /= ../../node_modules/jquery/dist/jquery.js
 */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
var burgerBtn = document.querySelector(".burger-btn");
var headerContainer = document.querySelector(".header__container");
var mainMenu = document.querySelector(".main-menu");
var openBurger = function openBurger() {
  burgerBtn.classList.add("--open");
  mainMenu.classList.add("--open");
};
var closeBurger = function closeBurger() {
  burgerBtn.classList.remove("--open");
  mainMenu.classList.remove("--open");
};
burgerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (burgerBtn.classList.contains("--open")) {
    closeBurger();
  } else {
    openBurger();
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImJ1cmdlckJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhlYWRlckNvbnRhaW5lciIsIm1haW5NZW51Iiwib3BlbkJ1cmdlciIsImNsYXNzTGlzdCIsImFkZCIsImNsb3NlQnVyZ2VyIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRhaW5zIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDO0FBQ3ZELElBQU1DLGVBQWUsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsb0JBQW9CLENBQUM7QUFDcEUsSUFBTUUsUUFBUSxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxZQUFZLENBQUM7QUFFckQsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBZTtFQUM3QkwsU0FBUyxDQUFDTSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFDakNILFFBQVEsQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0FBQ2xDLENBQUM7QUFFRCxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFlO0VBQzlCUixTQUFTLENBQUNNLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLFFBQVEsQ0FBQztFQUNwQ0wsUUFBUSxDQUFDRSxTQUFTLENBQUNHLE1BQU0sQ0FBQyxRQUFRLENBQUM7QUFDckMsQ0FBQztBQUVEVCxTQUFTLENBQUNVLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDQyxDQUFDLEVBQUs7RUFDekNBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFDbEIsSUFBSVosU0FBUyxDQUFDTSxTQUFTLENBQUNPLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtJQUMxQ0wsV0FBVyxDQUFDLENBQUM7RUFDZixDQUFDLE1BQU07SUFDTEgsVUFBVSxDQUFDLENBQUM7RUFDZDtBQUNGLENBQUMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4vIC89IC4uLy4uL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkuanNcclxuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBxdW90ZXMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuY29uc3QgYnVyZ2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXItYnRuXCIpO1xyXG5jb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fY29udGFpbmVyXCIpO1xyXG5jb25zdCBtYWluTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1tZW51XCIpO1xyXG5cclxuY29uc3Qgb3BlbkJ1cmdlciA9IGZ1bmN0aW9uICgpIHtcclxuICBidXJnZXJCdG4uY2xhc3NMaXN0LmFkZChcIi0tb3BlblwiKTtcclxuICBtYWluTWVudS5jbGFzc0xpc3QuYWRkKFwiLS1vcGVuXCIpO1xyXG59O1xyXG5cclxuY29uc3QgY2xvc2VCdXJnZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgYnVyZ2VyQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCItLW9wZW5cIik7XHJcbiAgbWFpbk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIi0tb3BlblwiKTtcclxufTtcclxuXHJcbmJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgaWYgKGJ1cmdlckJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCItLW9wZW5cIikpIHtcclxuICAgIGNsb3NlQnVyZ2VyKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG9wZW5CdXJnZXIoKTtcclxuICB9XHJcbn0pOyJdfQ==
