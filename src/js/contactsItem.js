import deleteIcon from '../../src/images/delete-forever.svg';
import editIcon from '../../src/images/edit.svg';
import { handelClick } from './handelClick';
import { removeContact } from './removeContact';
import { renderContacts } from './renderContacts';

export const contactsItem = (contact, indexGroup, index) => {
  const item = document.createElement('div');
  item.classList.add('collapseItem');

  const fio = document.createElement('span');
  fio.classList.add('fio');
  fio.innerHTML = contact.name;

  const rightSide = document.createElement('div');
  rightSide.classList.add('controlItems');

  const phone = document.createElement('span');
  phone.classList.add('phone');
  phone.innerHTML = contact.phone;

  const btns = document.createElement('div');
  btns.classList.add('controlBtns');

  const deleteButton = document.createElement('button');
  const iconD = document.createElement('img');
  iconD.src = deleteIcon;
  iconD.classList.add('icon');
  deleteButton.classList.add('controlBtn', 'delete');
  deleteButton.append(iconD);
  deleteButton.onclick = () => {
    removeContact(indexGroup, index);
    renderContacts();
  };

  const editButton = document.createElement('button');
  const iconE = document.createElement('img');
  iconE.src = editIcon;
  iconE.classList.add('icon');
  editButton.id = 'add';
  editButton.classList.add('controlBtn', 'edit');
  editButton.dataset.bsToggle = 'offcanvas';
  editButton.dataset.bsTarget = `#offcanvasWithBothOptions`;
  editButton.ariaControls = `offcanvasWithBothOptions`;
  editButton.append(iconE);
  editButton.onclick = (e) => {
    handelClick(e, indexGroup, index);
  };

  btns.append(editButton, deleteButton);
  rightSide.append(phone, btns);
  item.append(fio, rightSide);

  return item;
};
