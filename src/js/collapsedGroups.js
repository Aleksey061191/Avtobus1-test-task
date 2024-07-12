export const collapsedGroups = (e) => {
  e.preventDefault();
};

export const collapsedListener = () => {
  const wrapper = document.querySelector('.mainWrapper');
  wrapper.addEventListener('click', collapsedGroups);
};
