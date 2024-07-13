import { getLocal, saveLocal } from './local';

export const removeContact = (indexGroup, index) => {
  const groupList = getLocal();
  const newEl = groupList[indexGroup];
  newEl.contacts.splice(index, 1);
  groupList.splice(indexGroup, 1, newEl);
  saveLocal(groupList);
};
