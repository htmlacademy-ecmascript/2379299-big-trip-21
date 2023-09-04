import {SORT} from '../const.js';
import AbstractView from '../framework/view/abstract-stateful-view.js';

const Sorts = SORT.reduce((result, item) => {
  const itemKey = item.toLowerCase();
  result += `<div class="trip-sort__item  trip-sort__item--${itemKey}">
  <input id="sort-${itemKey}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${itemKey}"${item === 'Event' || item === 'Offers' ? 'disabled' : ''}>
  <label class="trip-sort__btn" for="sort-${itemKey}" data-sort-type="${item}">${item}</label>
</div>`;
  return result;
}, '');

function createListSortTemplate() {
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${Sorts}
  </form>`
  );
}
export default class ListSortView extends AbstractView{

  #handleSortTypeChange = null;

  constructor({onSortTypeChange}) {
    super();
    this.#handleSortTypeChange = onSortTypeChange;

    this.element.addEventListener('click', this.#sortTypeChangeHandler);
  }

  #sortTypeChangeHandler = (evt) => {
    if (evt.target.tagName !== 'LABEL') {
      return;
    }

    evt.preventDefault();
    this.#handleSortTypeChange(evt.target.dataset.sortType);
  };

  get template() {
    return createListSortTemplate();
  }
}

