window.addEventListener("load", function () {
  const paragraphs = document.querySelectorAll(
    ".article__text, .article__title"
  );

  paragraphs.forEach((paragraph) => {
    if (paragraph.scrollHeight > paragraph.clientHeight) {
      const text = paragraph.textContent.trim();
      let truncatedText = text;

      while (
        paragraph.scrollHeight > paragraph.clientHeight &&
        truncatedText.length > 0
      ) {
        truncatedText = truncatedText.slice(0, -1);
        paragraph.textContent = truncatedText + "...";
      }
    }
  });
});
