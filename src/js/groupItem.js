import deleteIcon from '../../src/images/delete-forever.svg';

export const groupItem = (title, isInput = false) => {
  const groupList = document.querySelector('.offcanvas-body');
  const newGroup = document.createElement('div');
  newGroup.classList.add('group');
  let groupTitle;
  if (isInput) {
    groupTitle = document.createElement('input');
    groupTitle.classList.add('groupTitle', 'inputTitle');
    groupTitle.placeholder = 'Введите название';
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
    groupList.removeChild(newGroup);
  };

  newGroup.append(groupTitle, deleteButton);
  groupList.appendChild(newGroup);
};
