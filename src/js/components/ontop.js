const topButton = $(".footer__back-to-top");

topButton.on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 1000);
});
