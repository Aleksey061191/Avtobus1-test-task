import '../src/css/style.scss';
import { modalBtnsListener } from './js/add';
import { headerBtnsListener } from './js/handelClick';
import { renderContacts } from './js/renderContacts';

function render() {
  renderContacts();
  headerBtnsListener();
  modalBtnsListener();
}

render();
