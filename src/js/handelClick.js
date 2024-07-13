import { addContact } from './addContact';
import { groupItem } from './groupItem';
import { getLocal } from './local';

export const handelClick = (e, indexGroup, index) => {
  e.preventDefault();
  const groupList = getLocal();
  const bodyModal = document.querySelector('.offcanvas-body');
  const title = document.querySelector('.offcanvas-title');
  const btnAdd = document.querySelector('.addGroup');
  bodyModal.innerHTML = '';
  const idBtn = e.target.id;

  if (idBtn === 'groups') {
    title.innerHTML = 'Группы контактов';
    btnAdd.classList.add('visible');
    if (groupList.length > 0) {
      groupList.map((item, i) => {
        bodyModal.append(groupItem(item.group, i));
      });
    }
  } else {
    title.innerHTML = 'Добавление контакта';
    btnAdd.classList.remove('visible');
    bodyModal.append(addContact(indexGroup, index));
  }
};

export const headerBtnsListener = () => {
  const btns = document.querySelector('.btns');
  btns.addEventListener('click', (e) => handelClick(e));
};
