'use strict';

(function () {
  var mainHeader = document.querySelector('.main-header');
  var burger = mainHeader.querySelector('.burger');

  burger.addEventListener('click', function () {
    mainHeader.classList.toggle('main-header--open');
    burger.classList.toggle('burger--close');
  });

})();
