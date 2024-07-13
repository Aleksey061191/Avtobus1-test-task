import deleteIcon from '../../src/images/delete-forever.svg';
import editIcon from '../../src/images/edit.svg';

export const contactsItem = (contact, body) => {
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
  btns.classList.add('btns');

  const deleteButton = document.createElement('button');
  const iconD = document.createElement('img');
  iconD.src = deleteIcon;
  iconD.classList.add('icon');
  deleteButton.classList.add('controlBtn', 'delete');
  deleteButton.append(iconD);
  deleteButton.onclick = () => {
    body.removeChild(item);
  };

  const editButton = document.createElement('button');
  const iconE = document.createElement('img');
  iconE.src = editIcon;
  iconE.classList.add('icon');
  editButton.classList.add('controlBtn', 'edit');
  editButton.append(iconE);

  btns.append(editButton, deleteButton);
  rightSide.append(phone, btns);
  item.append(fio, rightSide);

  return item;
};
