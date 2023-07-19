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
var logo = document.querySelector(".header__logo");
var container = document.querySelector(".header__container");
var openBurger = function openBurger() {
  burgerBtn.classList.add("--open");
  mainMenu.classList.add("--open");
  container.classList.add("--open");
  logo.style.opacity = 0;
};
var closeBurger = function closeBurger() {
  burgerBtn.classList.remove("--open");
  mainMenu.classList.remove("--open");
  logo.style.opacity = 1;
};
burgerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (burgerBtn.classList.contains("--open")) {
    closeBurger();
  } else {
    openBurger();
  }
});
// eslint-disable-next-line no-unused-vars, no-undef
var swiper = new Swiper(".js-main-swiper", {
  slidesPerView: 1,
  dynamicBullets: true,
  loop: true,
  pagination: {
    el: ".main-slider__pagination"
  },
  navigation: {
    nextEl: ".main-slider__next",
    prevEl: ".main-slider__prev"
  },
  autoplay: {
    delay: 5000
  }
});
var newsSwiper = new Swiper(".js-news-swiper", {
  slidesPerView: 3,
  dynamicBullets: true,
  spaceBetween: 25,
  pagination: {
    el: ".news__pagination"
  },
  navigation: {
    nextEl: ".news__next",
    prevEl: ".news__prev"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 25
    }
  }
});
var playsSwiper = new Swiper(".js-plays-swiper", {
  slidesPerView: 3,
  dynamicBullets: true,
  spaceBetween: 25,
  pagination: {
    el: ".plays__pagination"
  },
  navigation: {
    nextEl: ".plays__next",
    prevEl: ".plays__prev"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 25
    }
  }
});
var peoplesSwiper = new Swiper(".js-peoples-swiper", {
  slidesPerView: 4,
  dynamicBullets: true,
  spaceBetween: 25,
  pagination: {
    el: ".peoples__pagination"
  },
  navigation: {
    nextEl: ".peoples__next",
    prevEl: ".peoples__prev"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 25
    }
  },
  autoplay: {
    delay: 5000
  }
});
window.addEventListener("load", function () {
  var paragraphs = document.querySelectorAll(".article__text, .article__title");
  paragraphs.forEach(function (paragraph) {
    if (paragraph.scrollHeight > paragraph.clientHeight) {
      var text = paragraph.textContent.trim();
      var truncatedText = text;
      while (paragraph.scrollHeight > paragraph.clientHeight && truncatedText.length > 0) {
        truncatedText = truncatedText.slice(0, -1);
        paragraph.textContent = truncatedText + "...";
      }
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImJ1cmdlckJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhlYWRlckNvbnRhaW5lciIsIm1haW5NZW51IiwibG9nbyIsImNvbnRhaW5lciIsIm9wZW5CdXJnZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZSIsIm9wYWNpdHkiLCJjbG9zZUJ1cmdlciIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250YWlucyIsInN3aXBlciIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJkeW5hbWljQnVsbGV0cyIsImxvb3AiLCJwYWdpbmF0aW9uIiwiZWwiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYXV0b3BsYXkiLCJkZWxheSIsIm5ld3NTd2lwZXIiLCJzcGFjZUJldHdlZW4iLCJicmVha3BvaW50cyIsInBsYXlzU3dpcGVyIiwicGVvcGxlc1N3aXBlciIsIndpbmRvdyIsInBhcmFncmFwaHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInBhcmFncmFwaCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsInRleHQiLCJ0ZXh0Q29udGVudCIsInRyaW0iLCJ0cnVuY2F0ZWRUZXh0IiwibGVuZ3RoIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUM7QUFDdkQsSUFBTUMsZUFBZSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztBQUNwRSxJQUFNRSxRQUFRLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztBQUNyRCxJQUFNRyxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQztBQUNwRCxJQUFNSSxTQUFTLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG9CQUFvQixDQUFDO0FBRTlELElBQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQWU7RUFDN0JQLFNBQVMsQ0FBQ1EsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0VBQ2pDTCxRQUFRLENBQUNJLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztFQUNoQ0gsU0FBUyxDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFDakNKLElBQUksQ0FBQ0ssS0FBSyxDQUFDQyxPQUFPLEdBQUcsQ0FBQztBQUN4QixDQUFDO0FBRUQsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBZTtFQUM5QlosU0FBUyxDQUFDUSxTQUFTLENBQUNLLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFDcENULFFBQVEsQ0FBQ0ksU0FBUyxDQUFDSyxNQUFNLENBQUMsUUFBUSxDQUFDO0VBQ25DUixJQUFJLENBQUNLLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQUM7QUFDeEIsQ0FBQztBQUVEWCxTQUFTLENBQUNjLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDQyxDQUFDLEVBQUs7RUFDekNBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFDbEIsSUFBSWhCLFNBQVMsQ0FBQ1EsU0FBUyxDQUFDUyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7SUFDMUNMLFdBQVcsQ0FBQyxDQUFDO0VBQ2YsQ0FBQyxNQUFNO0lBQ0xMLFVBQVUsQ0FBQyxDQUFDO0VBQ2Q7QUFDRixDQUFDLENBQUM7QUFDRjtBQUNBLElBQU1XLE1BQU0sR0FBRyxJQUFJQyxNQUFNLENBQUMsaUJBQWlCLEVBQUU7RUFDM0NDLGFBQWEsRUFBRSxDQUFDO0VBQ2hCQyxjQUFjLEVBQUUsSUFBSTtFQUNwQkMsSUFBSSxFQUFFLElBQUk7RUFDVkMsVUFBVSxFQUFFO0lBQ1ZDLEVBQUUsRUFBRTtFQUNOLENBQUM7RUFDREMsVUFBVSxFQUFFO0lBQ1ZDLE1BQU0sRUFBRSxvQkFBb0I7SUFDNUJDLE1BQU0sRUFBRTtFQUNWLENBQUM7RUFDREMsUUFBUSxFQUFFO0lBQ1JDLEtBQUssRUFBRTtFQUNUO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsSUFBTUMsVUFBVSxHQUFHLElBQUlYLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtFQUMvQ0MsYUFBYSxFQUFFLENBQUM7RUFDaEJDLGNBQWMsRUFBRSxJQUFJO0VBQ3BCVSxZQUFZLEVBQUUsRUFBRTtFQUNoQlIsVUFBVSxFQUFFO0lBQ1ZDLEVBQUUsRUFBRTtFQUNOLENBQUM7RUFDREMsVUFBVSxFQUFFO0lBQ1ZDLE1BQU0sRUFBRSxhQUFhO0lBQ3JCQyxNQUFNLEVBQUU7RUFDVixDQUFDO0VBQ0RLLFdBQVcsRUFBRTtJQUNYLEdBQUcsRUFBRTtNQUNIWixhQUFhLEVBQUUsQ0FBQztNQUNoQlcsWUFBWSxFQUFFO0lBQ2hCLENBQUM7SUFDRCxHQUFHLEVBQUU7TUFDSFgsYUFBYSxFQUFFLENBQUM7TUFDaEJXLFlBQVksRUFBRTtJQUNoQixDQUFDO0lBQ0QsR0FBRyxFQUFFO01BQ0hYLGFBQWEsRUFBRSxDQUFDO01BQ2hCVyxZQUFZLEVBQUU7SUFDaEIsQ0FBQztJQUNELElBQUksRUFBRTtNQUNKWCxhQUFhLEVBQUUsQ0FBQztNQUNoQlcsWUFBWSxFQUFFO0lBQ2hCLENBQUM7SUFDRCxJQUFJLEVBQUU7TUFDSlgsYUFBYSxFQUFFLENBQUM7TUFDaEJXLFlBQVksRUFBRTtJQUNoQjtFQUNGO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsSUFBTUUsV0FBVyxHQUFHLElBQUlkLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRTtFQUNqREMsYUFBYSxFQUFFLENBQUM7RUFDaEJDLGNBQWMsRUFBRSxJQUFJO0VBQ3BCVSxZQUFZLEVBQUUsRUFBRTtFQUNoQlIsVUFBVSxFQUFFO0lBQ1ZDLEVBQUUsRUFBRTtFQUNOLENBQUM7RUFDREMsVUFBVSxFQUFFO0lBQ1ZDLE1BQU0sRUFBRSxjQUFjO0lBQ3RCQyxNQUFNLEVBQUU7RUFDVixDQUFDO0VBQ0RLLFdBQVcsRUFBRTtJQUNYLEdBQUcsRUFBRTtNQUNIWixhQUFhLEVBQUUsQ0FBQztNQUNoQlcsWUFBWSxFQUFFO0lBQ2hCLENBQUM7SUFDRCxHQUFHLEVBQUU7TUFDSFgsYUFBYSxFQUFFLENBQUM7TUFDaEJXLFlBQVksRUFBRTtJQUNoQixDQUFDO0lBQ0QsR0FBRyxFQUFFO01BQ0hYLGFBQWEsRUFBRSxDQUFDO01BQ2hCVyxZQUFZLEVBQUU7SUFDaEIsQ0FBQztJQUNELElBQUksRUFBRTtNQUNKWCxhQUFhLEVBQUUsQ0FBQztNQUNoQlcsWUFBWSxFQUFFO0lBQ2hCLENBQUM7SUFDRCxJQUFJLEVBQUU7TUFDSlgsYUFBYSxFQUFFLENBQUM7TUFDaEJXLFlBQVksRUFBRTtJQUNoQjtFQUNGO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsSUFBTUcsYUFBYSxHQUFHLElBQUlmLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRTtFQUNyREMsYUFBYSxFQUFFLENBQUM7RUFDaEJDLGNBQWMsRUFBRSxJQUFJO0VBQ3BCVSxZQUFZLEVBQUUsRUFBRTtFQUNoQlIsVUFBVSxFQUFFO0lBQ1ZDLEVBQUUsRUFBRTtFQUNOLENBQUM7RUFDREMsVUFBVSxFQUFFO0lBQ1ZDLE1BQU0sRUFBRSxnQkFBZ0I7SUFDeEJDLE1BQU0sRUFBRTtFQUNWLENBQUM7RUFDREssV0FBVyxFQUFFO0lBQ1gsR0FBRyxFQUFFO01BQ0haLGFBQWEsRUFBRSxDQUFDO01BQ2hCVyxZQUFZLEVBQUU7SUFDaEIsQ0FBQztJQUNELEdBQUcsRUFBRTtNQUNIWCxhQUFhLEVBQUUsQ0FBQztNQUNoQlcsWUFBWSxFQUFFO0lBQ2hCLENBQUM7SUFDRCxHQUFHLEVBQUU7TUFDSFgsYUFBYSxFQUFFLENBQUM7TUFDaEJXLFlBQVksRUFBRTtJQUNoQixDQUFDO0lBQ0QsSUFBSSxFQUFFO01BQ0pYLGFBQWEsRUFBRSxDQUFDO01BQ2hCVyxZQUFZLEVBQUU7SUFDaEIsQ0FBQztJQUNELElBQUksRUFBRTtNQUNKWCxhQUFhLEVBQUUsQ0FBQztNQUNoQlcsWUFBWSxFQUFFO0lBQ2hCO0VBQ0YsQ0FBQztFQUNESCxRQUFRLEVBQUU7SUFDUkMsS0FBSyxFQUFFO0VBQ1Q7QUFDRixDQUFDLENBQUM7QUFDRk0sTUFBTSxDQUFDckIsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFlBQVk7RUFDMUMsSUFBTXNCLFVBQVUsR0FBR25DLFFBQVEsQ0FBQ29DLGdCQUFnQixDQUMxQyxpQ0FDRixDQUFDO0VBRURELFVBQVUsQ0FBQ0UsT0FBTyxDQUFDLFVBQUNDLFNBQVMsRUFBSztJQUNoQyxJQUFJQSxTQUFTLENBQUNDLFlBQVksR0FBR0QsU0FBUyxDQUFDRSxZQUFZLEVBQUU7TUFDbkQsSUFBTUMsSUFBSSxHQUFHSCxTQUFTLENBQUNJLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7TUFDekMsSUFBSUMsYUFBYSxHQUFHSCxJQUFJO01BRXhCLE9BQ0VILFNBQVMsQ0FBQ0MsWUFBWSxHQUFHRCxTQUFTLENBQUNFLFlBQVksSUFDL0NJLGFBQWEsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFDeEI7UUFDQUQsYUFBYSxHQUFHQSxhQUFhLENBQUNFLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUNSLFNBQVMsQ0FBQ0ksV0FBVyxHQUFHRSxhQUFhLEdBQUcsS0FBSztNQUMvQztJQUNGO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbi8gLz0gLi4vLi4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5qc1xyXG4gKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHF1b3RlcyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5jb25zdCBidXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlci1idG5cIik7XHJcbmNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19jb250YWluZXJcIik7XHJcbmNvbnN0IG1haW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLW1lbnVcIik7XHJcbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbG9nb1wiKTtcclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2NvbnRhaW5lclwiKTtcclxuXHJcbmNvbnN0IG9wZW5CdXJnZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgYnVyZ2VyQnRuLmNsYXNzTGlzdC5hZGQoXCItLW9wZW5cIik7XHJcbiAgbWFpbk1lbnUuY2xhc3NMaXN0LmFkZChcIi0tb3BlblwiKTtcclxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIi0tb3BlblwiKTtcclxuICBsb2dvLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG59O1xyXG5cclxuY29uc3QgY2xvc2VCdXJnZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgYnVyZ2VyQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCItLW9wZW5cIik7XHJcbiAgbWFpbk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIi0tb3BlblwiKTtcclxuICBsb2dvLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG59O1xyXG5cclxuYnVyZ2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBpZiAoYnVyZ2VyQnRuLmNsYXNzTGlzdC5jb250YWlucyhcIi0tb3BlblwiKSkge1xyXG4gICAgY2xvc2VCdXJnZXIoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgb3BlbkJ1cmdlcigpO1xyXG4gIH1cclxufSk7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycywgbm8tdW5kZWZcclxuY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5qcy1tYWluLXN3aXBlclwiLCB7XHJcbiAgc2xpZGVzUGVyVmlldzogMSxcclxuICBkeW5hbWljQnVsbGV0czogdHJ1ZSxcclxuICBsb29wOiB0cnVlLFxyXG4gIHBhZ2luYXRpb246IHtcclxuICAgIGVsOiBcIi5tYWluLXNsaWRlcl9fcGFnaW5hdGlvblwiLFxyXG4gIH0sXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiBcIi5tYWluLXNsaWRlcl9fbmV4dFwiLFxyXG4gICAgcHJldkVsOiBcIi5tYWluLXNsaWRlcl9fcHJldlwiLFxyXG4gIH0sXHJcbiAgYXV0b3BsYXk6IHtcclxuICAgIGRlbGF5OiA1MDAwLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgbmV3c1N3aXBlciA9IG5ldyBTd2lwZXIoXCIuanMtbmV3cy1zd2lwZXJcIiwge1xyXG4gIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgZHluYW1pY0J1bGxldHM6IHRydWUsXHJcbiAgc3BhY2VCZXR3ZWVuOiAyNSxcclxuICBwYWdpbmF0aW9uOiB7XHJcbiAgICBlbDogXCIubmV3c19fcGFnaW5hdGlvblwiLFxyXG4gIH0sXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiBcIi5uZXdzX19uZXh0XCIsXHJcbiAgICBwcmV2RWw6IFwiLm5ld3NfX3ByZXZcIixcclxuICB9LFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAzMjA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgIH0sXHJcbiAgICA2NDA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgIH0sXHJcbiAgICA3Njg6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgc3BhY2VCZXR3ZWVuOiA0MCxcclxuICAgIH0sXHJcbiAgICAxMDI0OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogNTAsXHJcbiAgICB9LFxyXG4gICAgMTIwMDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDI1LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHBsYXlzU3dpcGVyID0gbmV3IFN3aXBlcihcIi5qcy1wbGF5cy1zd2lwZXJcIiwge1xyXG4gIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgZHluYW1pY0J1bGxldHM6IHRydWUsXHJcbiAgc3BhY2VCZXR3ZWVuOiAyNSxcclxuICBwYWdpbmF0aW9uOiB7XHJcbiAgICBlbDogXCIucGxheXNfX3BhZ2luYXRpb25cIixcclxuICB9LFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogXCIucGxheXNfX25leHRcIixcclxuICAgIHByZXZFbDogXCIucGxheXNfX3ByZXZcIixcclxuICB9LFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAzMjA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgIH0sXHJcbiAgICA2NDA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgIH0sXHJcbiAgICA3Njg6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgc3BhY2VCZXR3ZWVuOiA0MCxcclxuICAgIH0sXHJcbiAgICAxMDI0OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogNTAsXHJcbiAgICB9LFxyXG4gICAgMTIwMDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDI1LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHBlb3BsZXNTd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmpzLXBlb3BsZXMtc3dpcGVyXCIsIHtcclxuICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gIGR5bmFtaWNCdWxsZXRzOiB0cnVlLFxyXG4gIHNwYWNlQmV0d2VlbjogMjUsXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgZWw6IFwiLnBlb3BsZXNfX3BhZ2luYXRpb25cIixcclxuICB9LFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogXCIucGVvcGxlc19fbmV4dFwiLFxyXG4gICAgcHJldkVsOiBcIi5wZW9wbGVzX19wcmV2XCIsXHJcbiAgfSxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgMzIwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICB9LFxyXG4gICAgNjQwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICB9LFxyXG4gICAgNzY4OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogNDAsXHJcbiAgICB9LFxyXG4gICAgMTAyNDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDUwLFxyXG4gICAgfSxcclxuICAgIDEyMDA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyNSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBhdXRvcGxheToge1xyXG4gICAgZGVsYXk6IDUwMDAsXHJcbiAgfSxcclxufSk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgcGFyYWdyYXBocyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcIi5hcnRpY2xlX190ZXh0LCAuYXJ0aWNsZV9fdGl0bGVcIlxyXG4gICk7XHJcblxyXG4gIHBhcmFncmFwaHMuZm9yRWFjaCgocGFyYWdyYXBoKSA9PiB7XHJcbiAgICBpZiAocGFyYWdyYXBoLnNjcm9sbEhlaWdodCA+IHBhcmFncmFwaC5jbGllbnRIZWlnaHQpIHtcclxuICAgICAgY29uc3QgdGV4dCA9IHBhcmFncmFwaC50ZXh0Q29udGVudC50cmltKCk7XHJcbiAgICAgIGxldCB0cnVuY2F0ZWRUZXh0ID0gdGV4dDtcclxuXHJcbiAgICAgIHdoaWxlIChcclxuICAgICAgICBwYXJhZ3JhcGguc2Nyb2xsSGVpZ2h0ID4gcGFyYWdyYXBoLmNsaWVudEhlaWdodCAmJlxyXG4gICAgICAgIHRydW5jYXRlZFRleHQubGVuZ3RoID4gMFxyXG4gICAgICApIHtcclxuICAgICAgICB0cnVuY2F0ZWRUZXh0ID0gdHJ1bmNhdGVkVGV4dC5zbGljZSgwLCAtMSk7XHJcbiAgICAgICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdHJ1bmNhdGVkVGV4dCArIFwiLi4uXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufSk7Il19
