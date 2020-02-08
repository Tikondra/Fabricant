'use strict';

(function () {
  var menu = document.querySelector('.navigation');
  var menuOpenBtn = document.querySelector('.header__open-menu');
  var menuCloseBtn = menu.querySelector('.navigation__close');

  menuOpenBtn.addEventListener('click', function () {
    menu.classList.add('navigation--show');
  });

  menuCloseBtn.addEventListener('click', function () {
    menu.classList.remove('navigation--show');
  });
})();
