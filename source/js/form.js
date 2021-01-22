'use strict';

var searchForm = document.querySelector('.form');

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
