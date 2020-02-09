'use strict';

// меню
(function () {
  var menu = document.querySelector('.navigation');
  var menuOpenBtn = document.querySelector('.header__open-menu');
  var menuCloseBtn = menu.querySelector('.navigation__close');

  menuOpenBtn.addEventListener('click', function () {
    menu.classList.toggle('navigation--show');
  });
})();
// слайдер в баннере
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    dots: false,
    nav: true
  });
});
// слайдер
(function () {
  var slider = document.querySelector('.slider');
  var sliderList = slider.querySelector('.slider__list');
  var slides = slider.querySelectorAll('.slider__item');
  var btnPrev = slider.querySelector('.slider__btn-prev');
  var btnNext = slider.querySelector('.slider__btn-next');
  var pagNumber = slider.querySelector('.slider__active-pag');
  var countSlides = slides.length;
  var gap = 20;

  var onMoveSlideNext = function () {
    var widthList = sliderList.getBoundingClientRect().width;
    var right = sliderList.getBoundingClientRect().left - gap;
    var maxLeft = - ((countSlides * widthList) - widthList);
    var newLeft = right - widthList;
    if (newLeft < maxLeft) {
      newLeft = maxLeft;
    }
    return sliderList.style.left = newLeft + 'px';
  };
  var onMoveSlidePrev = function () {
    var widthList = sliderList.getBoundingClientRect().width;
    var right = sliderList.getBoundingClientRect().left - gap;
    var minLeft = 0;
    var newLeft = right + widthList;
    if (newLeft > minLeft) {
      newLeft = minLeft;
    }
    return sliderList.style.left = newLeft + 'px';
  };
  btnNext.addEventListener('click', onMoveSlideNext);
  btnPrev.addEventListener('click', onMoveSlidePrev);
})();
