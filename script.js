let intervalId;
const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let slideIndex = 1;

prevButton.addEventListener("click", () => {
  if (slideIndex > 1) {
    slideIndex--;
    slider.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
  }
});

nextButton.addEventListener("click", () => {
  if (slideIndex < slider.children.length) {
    slideIndex++;
    slider.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
  }
});

window.addEventListener("resize", () => {
  slideIndex = 1;
  slider.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
});
