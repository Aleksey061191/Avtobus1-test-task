import { createInput, createSelectInput } from './createInput';
import { getLocal } from './local';

export const addContact = (indexGroup, index) => {
  const form = document.createElement('div');
  form.classList.add('form');
  let nameInput;
  let phoneInput;
  let selectInput;
  if (indexGroup >= 0 && index >= 0) {
    const groupList = getLocal();
    const groupValue = groupList[indexGroup].group;
    const phoneValue = groupList[indexGroup].contacts[index].phone;
    const nameValue = groupList[indexGroup].contacts[index].name;
    nameInput = createInput('Введите ФИО', 'fio', nameValue);
    phoneInput = createInput('Введите номер', 'phone', phoneValue);
    selectInput = createSelectInput(groupValue, `${indexGroup}-${index}`);
  } else {
    nameInput = createInput('Введите ФИО', 'fio');
    phoneInput = createInput('Введите номер', 'phone');
    selectInput = createSelectInput();
  }
  form.append(nameInput, phoneInput, selectInput);
  return form;
};
