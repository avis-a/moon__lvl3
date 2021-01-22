let sendButton = document.querySelector('.form__button');
let searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', function (evt) {
  let isValidateSuccess = true;

  // получаем поля формы
  let name = document.getElementById('name');
  let tel = document.getElementById('tel');

  if (name.value === ''){
    name.required = true;
    isValidateSuccess = false;
  }

  if (tel.value === ''){
    tel.required = true;
    isValidateSuccess = false;
  }

  if(isValidateSuccess !== true){
    evt.preventDefault();
  }
});
