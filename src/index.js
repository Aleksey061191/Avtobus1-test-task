import '../src/css/style.scss';

const handelClick = (e) => {
  const title = document.querySelector('.offcanvas-title');
  const btnAdd = document.querySelector('.add-group');

  const idBtn = e.target.id;
  if (idBtn === 'add') {
    title.innerHTML = 'Добавление контакта';
    btnAdd.classList.remove('visible');
  } else {
    title.innerHTML = 'Группы контактов';
    btnAdd.classList.add('visible');
  }
};

async function render() {
  const main = document.querySelector('.mainWrapper');
  const content = document.createElement('h2');
  content.classList.add('content');
  content.innerHTML = 'Список контактов пуст';
  main.appendChild(content);

  const btns = document.querySelector('.btns');
  btns.addEventListener('click', handelClick);
}

render();
