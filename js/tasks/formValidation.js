/* eslint-disable max-len */
const button = document.getElementById('try_btn');
const inputArr = [...document.querySelectorAll('.content-block-form-input')];
const form = document.getElementById('form');
const message = document.getElementById('form-message');

const name = document.getElementById('name');
const mail = document.getElementById('mail');
const password = document.getElementById('password');

const nameRegExp = /^[a-zA-Z ]+$/;
const mailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegExp = /(?=^.{6,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;

function isDataValid(regExp, input) {
  const result = regExp.test(input.value);

  if (!result) {
    message.innerHTML += `Please check ${input.id}. `;
  }
}

function checkInputs() {
  message.innerHTML = '';

  isDataValid(nameRegExp, name);
  isDataValid(mailRegExp, mail);
  isDataValid(passwordRegExp, password);
}

function validateForm(e) {
  const check = inputArr.every((el) => el.value !== '');

  check
    ? button.classList.remove('disabled')
    : button.classList.add('disabled');
}

const formValidation = {
  init: () => {
    form.addEventListener('submit', (e) => e.preventDefault());
    button.addEventListener('click', checkInputs);
    form.addEventListener('input', validateForm);
  },
};

export default formValidation;
