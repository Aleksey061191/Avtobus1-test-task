import { contactsGroup } from './contactsGroup';

let groupList = [
  {
    group: 'Друзья',
    contacts: [
      { name: 'Иванов Иван Иванович', phone: '+7***********' },
      { name: 'Иванов Иван Иванович', phone: '+7***********' },
      { name: 'Иванов Иван Иванович', phone: '+7***********' },
    ],
  },
  {
    group: 'Коллеги',
    contacts: [
      { name: 'Иванов Иван Иванович', phone: '+7***********' },
      { name: 'Иванов Иван Иванович', phone: '+7***********' },
    ],
  },
];

export const renderContacts = () => {
  const main = document.querySelector('.mainWrapper');
  if (groupList.length === 0) {
    const content = document.createElement('h2');
    content.classList.add('content');
    content.innerHTML = 'Список контактов пуст';
    main.append(content);
  } else {
    groupList.map((item, i) => {
      contactsGroup(item, i);
    });
  }
};
