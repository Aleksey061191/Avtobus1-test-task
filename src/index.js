import '../src/css/style.scss';
import { modalBtnsListener } from './js/addGroup';
import { collapsedListener } from './js/collapsedGroups';
import { headerBtnsListener } from './js/handelClick';
import { renderContacts } from './js/renderContacts';

function render() {
  renderContacts();
  headerBtnsListener();
  modalBtnsListener();
  collapsedListener();
}

render();
