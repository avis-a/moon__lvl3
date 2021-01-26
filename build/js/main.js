'use strict';

(function () {

  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');
  var searchForm = document.querySelector('.form');

  if (navMain && navToggle) {
    navMain.classList.remove('main-nav__opened');
    navMain.classList.add('main-nav__closed');
    navMain.classList.remove('main-nav__nojs');

    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('main-nav__closed')) {
        navMain.classList.remove('main-nav__closed');
        navMain.classList.add('main-nav__opened');
      } else {
        navMain.classList.add('main-nav__closed');
        navMain.classList.remove('main-nav__opened');
      }
    });
  }


  if (searchForm) {
    searchForm.addEventListener('submit', function (evt) {
      var isValidateSuccess = true;

      // получаем поля формы
      var name = document.getElementById('name');
      var tel = document.getElementById('tel');

      if (name.value === '') {
        name.required = true;
        isValidateSuccess = false;
      }

      if (tel.value === '') {
        tel.required = true;
        isValidateSuccess = false;
      }

      if (isValidateSuccess !== true) {
        evt.preventDefault();
      }
    });
  }
})();
