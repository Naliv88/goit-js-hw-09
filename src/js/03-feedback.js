import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onStorage, 1000));
form.addEventListener('submit', submit);

loadWithStorage();

const formData = {};

function onStorage(data) {
  formData[data.target.name] = data.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function submit(data) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  data.preventDefault();
  data.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function loadWithStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = document.querySelector('input');
  const message = document.querySelector('textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
};
