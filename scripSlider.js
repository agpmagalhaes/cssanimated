const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');

let currentSlide = 0;
const slideWidth = slider.clientWidth / 5;

function slideTo(slide) {
  slider.style.transform = `translateX(-${slide * slideWidth}px)`;
  currentSlide = slide;
}

function nextSlide() {
  if (currentSlide < 4) {
    slideTo(currentSlide + 1);
  } else {
    slideTo(0);
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    slideTo(currentSlide - 1);
  } else {
    slideTo(4);
  }
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
