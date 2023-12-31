import {SortType, UpdateType} from '../const.js';
import AbstractView from '../framework/view/abstract-stateful-view.js';

const Sorts = Object.values(SortType).reduce((result, item) => {

  const itemKey = item.toLowerCase();
  result += `<div class="trip-sort__item  trip-sort__item--${itemKey}">
  <input id="sort-${itemKey}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${itemKey}"${item === SortType.EVENT || item === SortType.OFFERS ? 'disabled' : ''} ${item === SortType.DAY ? 'checked' : ''}>
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

  constructor({onSortTypeChange, filterModel}) {
    super();
    this.#handleSortTypeChange = onSortTypeChange;

    this.element.addEventListener('click', this.#sortChangeHandler);

    filterModel.addObserver(this.#handleModelEvent);
  }

  #sortChangeHandler = (evt) => {
    if (evt.target.tagName !== 'LABEL') {
      return;
    }

    const item = evt.target.dataset.sortType;
    if (item === SortType.EVENT || item === SortType.OFFERS){
      return;
    }

    this.#handleSortTypeChange(item);
  };

  #handleModelEvent = (updateType) => {
    switch (updateType) {
      case UpdateType.UI_RESET:
        this.#handleSortTypeChange(SortType.DAY);
        document.querySelector('form.trip-events__trip-sort').reset();
        break;
    }
  };

  get template() {
    return createListSortTemplate();
  }
}

