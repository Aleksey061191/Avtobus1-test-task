export const saveLocal = (groupList) => {
  localStorage.setItem('groupList', JSON.stringify(groupList));
};

export const getLocal = () => {
  const groupList = JSON.parse(localStorage.getItem('groupList')) || [];
  return groupList;
};
