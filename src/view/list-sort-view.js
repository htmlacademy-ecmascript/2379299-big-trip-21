import {SORT} from '../const.js';
import AbstractView from '../framework/view/abstract-stateful-view.js';

const typeGroupSort = SORT.reduce((result, item) => {
  const itemKey = item.toLowerCase();
  result += `<div class="trip-sort__item  trip-sort__item--${itemKey}">
  <input id="sort-${itemKey}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${itemKey}">
  <label class="trip-sort__btn" for="sort-${itemKey}">${item}</label>
</div>`;
  return result;
}, '');

function createListSortTemplate() {
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${typeGroupSort}
  </form>`
  );
}

export default class ListSortView extends AbstractView{
  get template() {
    return createListSortTemplate();
  }
}

