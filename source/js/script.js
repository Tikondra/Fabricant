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
// слайдер
(function () {
  var slider = document.querySelector('.slider');
  var sliderList = slider.querySelector('.slider__list');
  var slides = slider.querySelectorAll('.slider__item');
  var btnPrev = slider.querySelector('.slider__btn--prev');
  var btnNext = slider.querySelector('.slider__btn--next');
  var pagNumber = slider.querySelector('.slider__active-pag');
  var pagAllCount = slider.querySelector('.slider__all-pag');
  var countSlides = slides.length;
  var gap = 20;

  pagAllCount.textContent = '0' + slides.length;

  var onMoveSlideNext = function () {
    var widthList = sliderList.getBoundingClientRect().width;
    var right = (getComputedStyle(sliderList).left).slice(0, -2);
    var maxLeft = - ((countSlides * widthList) - widthList);
    var pagActive = Number(pagNumber.textContent);
    var maxPag = countSlides;
    var newLeft = right - widthList;

    if (newLeft < maxLeft) {
      newLeft = maxLeft;
    }
    if (pagActive >= maxPag) {
      pagNumber.textContent = '0' + maxPag;
    } else {
      pagNumber.textContent = '0' + (pagActive + 1);
    }
    sliderList.style.left = newLeft + 'px';
  };
  var onMoveSlidePrev = function () {
    var widthList = sliderList.getBoundingClientRect().width;
    var right = sliderList.getBoundingClientRect().left - gap;
    var pagActive = Number(pagNumber.textContent);
    var minLeft = 0;
    var minPag = 1;
    var newLeft = right + widthList;
    if (newLeft > minLeft) {
      newLeft = minLeft;
    }
    if (pagActive <= minPag) {
      pagNumber.textContent = '0' + minPag;
    } else {
      pagNumber.textContent = '0' + (pagActive - 1);
    }
    return sliderList.style.left = newLeft + 'px';
  };
  btnNext.addEventListener('click', onMoveSlideNext);
  btnPrev.addEventListener('click', onMoveSlidePrev);
})();
