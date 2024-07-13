import arrowIcon from '../../src/images/arrow.svg';
import { contactsItem } from './contactsItem';

export const contactsGroup = (item, i) => {
  const mainWrapper = document.querySelector('.mainWrapper');
  const card = document.createElement('div');
  card.classList.add('card');
  const headerCard = document.createElement('div');
  headerCard.classList.add('headerCollapse');
  headerCard.dataset.bsToggle = 'collapse';
  headerCard.dataset.bsTarget = `#collapse${i}`;
  headerCard.ariaExpanded = 'true';
  headerCard.ariaControls = `collapse${i}`;

  const title = document.createElement('h2');
  title.classList.add('titleCollapse');
  title.innerHTML = item.group;

  const arrow = document.createElement('img');
  arrow.src = arrowIcon;
  arrow.classList.add('arrow');

  const body = document.createElement('div');
  body.classList.add('collapse', 'show');
  body.id = `collapse${i}`;

  item.contacts.map((contact) => {
    body.append(contactsItem(contact, body));
  });

  headerCard.append(title, arrow);
  card.append(headerCard, body);
  mainWrapper.append(card);
};
