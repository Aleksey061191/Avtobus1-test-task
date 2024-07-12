let groupList = ['Друзья', 'Коллеги'];

export const renderContacts = () => {
  const main = document.querySelector('.mainWrapper');
  if (groupList.length === 0) {
    const content = document.createElement('h2');
    content.classList.add('content');
    content.innerHTML = 'Список контактов пуст';
    main.append(content);
  } else {
  }
};
