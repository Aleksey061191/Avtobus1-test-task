import { groupItem } from './groupItem';

let groupList = ['Друзья', 'Коллеги'];
const groupListItem = document.querySelector('.offcanvas-body');

export const handelClick = (e) => {
  e.preventDefault();
  const title = document.querySelector('.offcanvas-title');
  const btnAdd = document.querySelector('.addGroup');
  groupListItem.innerHTML = '';
  const idBtn = e.target.id;
  if (idBtn === 'add') {
    title.innerHTML = 'Добавление контакта';
    btnAdd.classList.remove('visible');
  } else {
    title.innerHTML = 'Группы контактов';
    btnAdd.classList.add('visible');
    if (groupList.length > 0) {
      groupList.map((item) => {
        groupItem(item);
      });
    }
  }
};

export const headerBtnsListener = () => {
  const btns = document.querySelector('.btns');
  btns.addEventListener('click', handelClick);
};
