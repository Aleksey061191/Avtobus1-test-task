import { getLocal, saveLocal } from './local';
import { removeContact } from './removeContact';
import { renderContacts } from './renderContacts';

export const saveForm = () => {
  const nameInput = document.getElementById('fio');
  const phoneInput = document.getElementById('phone');
  const selectInput = document.querySelector('select');
  const selectIndex = selectInput.id.split('-');
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
    const group = groupList.filter((item) => item.group === selectInput.value);
    const index = groupList.indexOf(group[0]);
    const newEl = groupList[index];
    newEl.contacts.push(newContact);
    groupList.splice(index, 1, newEl);
    saveLocal(groupList);
    if (+selectIndex[0] >= 0 && +selectIndex[1] >= 0) {
      removeContact(+selectIndex[0], +selectIndex[1]);
    }

    nameInput.value = '';
    phoneInput.value = '';
    selectInput.value = '';
  }
  renderContacts();
};
