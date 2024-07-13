import { groupItem } from './groupItem';
import { getLocal, saveLocal } from './local';
import { renderContacts } from './renderContacts';
import { saveForm } from './saveForm';

export const add = (e) => {
  e.preventDefault();
  const groupList = getLocal();
  const body = document.querySelector('.offcanvas-body');
  const saveClass = document
    .getElementById('addGroup')
    .classList.contains('visible');
  const idBtn = e.target.id;
  if (idBtn === 'addGroup' && !body.querySelector('input')) {
    body.append(groupItem('', '', true));
  }
  if (idBtn === 'save' && saveClass) {
    const title = document.querySelector('.inputTitle');
    const value = title?.value;
    if (value) {
      title.parentElement.remove();
      body.append(groupItem(value));
      groupList.push({ group: value, contacts: [] });
      saveLocal(groupList);
      renderContacts();
    }
  }
  if (idBtn === 'save' && !saveClass) {
    saveForm();
  }
};

export const modalBtnsListener = () => {
  const modalBtn = document.querySelector('.modalBtn');
  modalBtn.addEventListener('click', (e) => add(e));
};
