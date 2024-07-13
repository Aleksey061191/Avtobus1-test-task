import { contactsGroup } from './contactsGroup';
import { getLocal } from './local';

export const renderContacts = () => {
  const groupList = getLocal();
  const main = document.querySelector('.mainWrapper');
  main.innerHTML = '';
  if (groupList?.length === 0) {
    const div = document.createElement('div');
    div.classList.add('text');
    const content = document.createElement('h2');
    content.classList.add('content');
    content.innerHTML = 'Список контактов пуст';
    div.append(content);
    main.append(div);
  } else {
    groupList?.map((item, i) => {
      main.append(contactsGroup(item, i));
    });
  }
};
