import deleteIcon from '../../src/images/delete-forever.svg';
import { createInput } from './createInput';
import { getLocal, saveLocal } from './local';
import { renderContacts } from './renderContacts';

export const groupItem = (title, i, isInput = false) => {
  const newGroup = document.createElement('div');
  newGroup.classList.add('group');
  let groupTitle;
  if (isInput) {
    groupTitle = createInput('Введите название', 'groupName');
  } else {
    groupTitle = document.createElement('div');
    groupTitle.classList.add('groupTitle');
    groupTitle.innerHTML = title;
  }

  const deleteButton = document.createElement('button');
  const icon = document.createElement('img');
  icon.src = deleteIcon;
  icon.classList.add('icon');
  deleteButton.classList.add('controlBtn', 'delete');
  deleteButton.append(icon);
  deleteButton.onclick = () => {
    const groupList = getLocal();
    newGroup.parentElement.removeChild(newGroup);
    groupList.splice(i, 1);
    saveLocal(groupList);
    renderContacts();
  };

  newGroup.append(groupTitle, deleteButton);

  return newGroup;
};
