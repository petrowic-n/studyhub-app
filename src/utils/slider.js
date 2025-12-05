"use strict";

const sliderComponent = () => {
  const slides = document.querySelectorAll(".slide");
  const leftBtn = document.querySelector(".slider__btn--left");
  const rightBtn = document.querySelector(".slider__btn--right");

  // define current slide
  let currentSlide = 0;
  // total number of slides
  const maxSlide = slides.length;

  // positions all slides relative to the target slide
  const goToSlide = (slide) => {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  // next slide
  const nextSlide = () => {
    // If on the last slide, it wraps to 0
    if (currentSlide === maxSlide - 1) currentSlide = 0;
    else currentSlide++;
    goToSlide(currentSlide);
  };

  const prevSlide = () => {
    if (currentSlide === 0) currentSlide = maxSlide - 1;
    else currentSlide--;
    goToSlide(currentSlide);
  };

  rightBtn.addEventListener("click", nextSlide);
  leftBtn.addEventListener("click", prevSlide);

  // when page loads start at first slide
  goToSlide(0);
};

export default sliderComponent;
