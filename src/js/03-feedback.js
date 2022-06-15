import { throttle } from 'lodash';
const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input[type="email"]'),
  textarea: document.querySelector('textarea[name="message"]'),
};
refs.form.addEventListener('submit', onStorageSubmit);
refs.form.addEventListener('input', throttle(onPlay, 500));
dataRecovery();

function onStorageSubmit(event) {
  event.preventDefault();
  const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const email = event.currentTarget.email.value;
  const message = event.currentTarget.message.value;

  if (email === '' || message === '') {
    return alert('Будь-ласка заповніть всі поля форми!');
  }
  if (parsedData) {
    console.log(parsedData);
  }
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onPlay(event) {
  const dataPlay = { email: refs.input.value, message: refs.textarea.value };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataPlay));
}

function dataRecovery() {
  const dataPlay = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(dataPlay);
  if (dataPlay) {
    refs.input.value = parsedData.email;
    refs.textarea.value = parsedData.message;
  }
}
