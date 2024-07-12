import deletIcon from '../../src/images/delete-forever.svg';

const groupList = document.querySelector('.offcanvas-body');

export const groupItem = (title, isInput = false) => {
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
  icon.src = deletIcon;
  icon.classList.add('icon');
  deleteButton.classList.add('delete');
  deleteButton.append(icon);
  deleteButton.onclick = () => {
    groupList.removeChild(newGroup);
  };

  newGroup.append(groupTitle, deleteButton);
  groupList.appendChild(newGroup);
};
