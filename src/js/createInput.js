import { getLocal } from './local';
import { phoneMask } from './mask';

export const createInput = (placeholder, id, value = '') => {
  const input = document.createElement('input');
  input.classList.add('groupTitle', 'inputTitle');
  input.placeholder = placeholder;
  input.value = value;
  input.id = id;
  if (id === 'phone') {
    input.addEventListener('input', phoneMask);
    input.addEventListener('focus', phoneMask);
    input.addEventListener('blur', phoneMask);
    input.addEventListener('keydown', phoneMask);
  }
  return input;
};

export const createSelectInput = (value = '', id = '') => {
  const selectInput = document.createElement('select');
  selectInput.id = id;
  selectInput.required = true;
  const option = document.createElement('option');
  option.value = '';
  option.innerHTML = 'Выберите группу';
  selectInput.append(option);
  const arr = getLocal();
  arr.map((item) => {
    const option = document.createElement('option');
    option.value = item.group;
    option.innerHTML = item.group;
    selectInput.append(option);
  });
  selectInput.value = value;
  selectInput.classList.add('groupTitle', 'inputTitle', 'select');

  return selectInput;
};
