'use strict';

// меню
(function () {
  var menu = document.querySelector('.navigation');
  var menuOpenBtn = document.querySelector('.header__open-menu');
  var menuCloseBtn = menu.querySelector('.navigation__close');
  var btnSvg = document.querySelector('.ham1');

  menuOpenBtn.addEventListener('click', function () {
    menu.classList.toggle('navigation--show');
    menuOpenBtn.classList.toggle('header__open-menu--active');
    btnSvg.classList.toggle('active');
  });
})();
// слайдер
(function () {
  var sliderBanner = document.querySelector('.slider');
  var sliderPortfolio = document.querySelector('.portfolio__slider');

  var sliderInit = function (slider) {
    var sliderList = slider.querySelector('.slider__list');
    var slides = slider.querySelectorAll('.slider__item');
    var slideImages = slider.querySelectorAll('.slider__item img');
    var btnPrev = slider.querySelector('.slider__btn--prev');
    var btnNext = slider.querySelector('.slider__btn--next');
    var pagNumber = slider.querySelector('.slider__active-pag');
    var pagAllCount = slider.querySelector('.slider__all-pag');
    var countSlides = slides.length;

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
      var right = Math.floor((getComputedStyle(sliderList).left).slice(0, -2));
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
    var showInfo = function () {
      var info = slider.querySelectorAll('.slider__info');
      var btnInfo = slider.querySelector('.slider__btn-info');

      btnInfo.addEventListener('click', function () {
        info.forEach(function (item) {
          item.classList.toggle('slider__info--show');
        })
      })
    };
    var preview = function () {
      var previewList = slider.querySelector('.slider__preview');
      var previewItems = slider.querySelectorAll('.slider__preview-item');
      var previewImages = slider.querySelectorAll('.slider__preview-item img');
      var widthPrev = 117;
      var gap = 10;
      previewImages.forEach(function (item,index) {
        item.addEventListener('click', function () {
          var widthList = sliderList.getBoundingClientRect().width;
          var imgFull = ((item.src).slice(0, -5)) + '.jpg';
          previewItems.forEach(function (item) {
            item.classList.remove('slider__preview-item--active')
          });
          previewItems[index].classList.add('slider__preview-item--active');
          slideImages[index].src = imgFull;
          sliderList.style.left = - (widthList * index) + 'px';
          pagNumber.textContent = '0' + (index + 1);
          if (index > 2) {
            previewList.style.left = - ((index - 2) * (widthPrev + gap)) + 'px';
          } else {
            previewList.style.left = '0px';
          }
        })
      });
      var pagination = function (direct) {
        var pagNum = Number(pagNumber.textContent) - direct;
        if (pagNum < previewItems.length && pagNum >= 0) {
          previewItems.forEach(function (item) {
            item.classList.remove('slider__preview-item--active')
          });
          previewItems[pagNum].classList.add('slider__preview-item--active');
        }
        if (pagNum > 2 && pagNum < previewItems.length) {
          previewList.style.left = - ((pagNum - 2) * (widthPrev + gap)) + 'px';
        } else if (pagNum <= 2) {
          previewList.style.left = '0px';
        }
      };
      var onMovePrevPreview = function () {
        pagination(2);
      };
      var onMoveNextPreview = function () {
        pagination(0);
      };
      btnNext.addEventListener('click', onMoveNextPreview);
      btnPrev.addEventListener('click', onMovePrevPreview);
    };

    if (slider.querySelector('.slider__btn-info')) {
      showInfo();
      preview();
    }
    pagAllCount.textContent = '0' + slides.length;
    btnNext.addEventListener('click', onMoveSlideNext);
    btnPrev.addEventListener('click', onMoveSlidePrev);
  };
  sliderInit(sliderBanner);

  var initSlider = function (slider) {
    var slideIndex = 1;
    showSlide();
    init();

    slider.querySelector('.slider__btn--next').addEventListener('click', function () {
      slideIndex++;
      showSlide();
    });
    slider.querySelector('.slider__btn--prev').addEventListener('click', function () {
      slideIndex--;
      showSlide();
    });

    function init () {
      var dotBox = slider.querySelectorAll('.slider__dots');

      dotBox.forEach(function (container) {
        var dots = container.querySelectorAll('.slider__dot');
        dots[0].classList.add('slider__dot--active');
      })
    }

    function showSlide () {
      var slides = slider.querySelectorAll('.slider__item');
      var numbSlider = slider.querySelector('.slider__active-pag');
      var pagAllCount = slider.querySelector('.slider__all-pag');

      slides.forEach(function (item) {
        item.classList.add('slider__item--hide');
      });

      if (slideIndex > slides.length) {
        slideIndex = 1;
      } else if (slideIndex < 1) {
        slideIndex = slides.length;
      }
      slides[slideIndex - 1].classList.remove('slider__item--hide');
      numbSlider.textContent = '0' + slideIndex;
      pagAllCount.textContent = '0' + slides.length;
    }

    slider.querySelectorAll('.slider__dot').forEach(function (item) {
      item.addEventListener('click', function (evt) {
        var index = slideIndex - 1;
        deleteActive(index);
        var sliderImg = slider.querySelectorAll('.slider__img')[index];
        var dotImg = item.querySelector('img');
        sliderImg.src = dotImg.src;
        item.classList.add('slider__dot--active');

      });
    });

    function deleteActive (index) {
      var dots = slider
        .querySelectorAll('.slider__dots')[index]
        .querySelectorAll('.slider__dot');

      dots.forEach(function (item) {
        item.classList.remove('slider__dot--active');
      });
    }

    var moreInfo = slider.querySelectorAll('.slider__more-info');

    moreInfo.forEach(function (item) {
      item.addEventListener('click', function () {
        item.classList.toggle('slider__more-info--active');
      })
    })
  };

  initSlider(sliderPortfolio);
})();
