import { groupItem } from './groupItem';

const groupList = document.querySelector('.offcanvas-body');

export const addGroup = (e) => {
  e.preventDefault();
  const idBtn = e.target.id;
  if (idBtn === 'add' && !groupList.querySelector('input')) {
    groupItem('', true);
  }
  if (idBtn === 'save') {
    const title = document.querySelector('.inputTitle');
    const value = title?.value;
    if (value) {
      title.parentElement.remove();
      groupItem(value);
    }
  }
};

export const modalBtnsListener = () => {
  const modalBtn = document.querySelector('.modalBtn');
  modalBtn.addEventListener('click', addGroup);
};
