import { createInput, createSelectInput } from './createInput';
import { getLocal, saveLocal } from './local';
import { removeContact } from './removeContact';
import { renderContacts } from './renderContacts';

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
    selectInput = createSelectInput(groupValue);
  } else {
    nameInput = createInput('Введите ФИО', 'fio');
    phoneInput = createInput('Введите номер', 'phone');
    selectInput = createSelectInput();
  }
  form.append(nameInput, phoneInput, selectInput);
  listener(indexGroup, index);
  return form;
};

const listener = (iG, i) => {
  const el = document.getElementById('save');
  el.addEventListener('click', () => {
    const nameInput = document.getElementById('fio');
    const phoneInput = document.getElementById('phone');
    const selectInput = document.querySelector('select');
    if (
      nameInput?.value.trim().length > 0 &&
      phoneInput?.value.trim().length === 18 &&
      selectInput?.value.trim().length > 0
    ) {
      const groupList = getLocal();
      const newContact = {
        name: nameInput.value,
        phone: phoneInput.value,
      };
      const group = groupList.filter(
        (item) => item.group === selectInput.value
      );
      const index = groupList.indexOf(group[0]);
      const newEl = groupList[index];
      newEl.contacts.push(newContact);
      groupList.splice(index, 1, newEl);
      saveLocal(groupList);
      if (iG >= 0 && i >= 0) {
        console.log(iG, i);
        removeContact(iG, i);
      }

      nameInput.value = '';
      phoneInput.value = '';
      selectInput.value = '';
    }
    renderContacts();
  });
};
