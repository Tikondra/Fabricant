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
