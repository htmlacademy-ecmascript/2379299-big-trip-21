import {FILTER} from '../const.js';
import AbstractView from '../framework/view/abstract-stateful-view.js';

const filters = FILTER.reduce((result, item) => {
  const itemKey = item.toLowerCase();
  result += `<div class="trip-filters__filter">
  <input id="filter-${itemKey}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${itemKey}">
  <label class="trip-filters__filter-label" for="filter-${itemKey}">${item}</label>
</div>`;
  return result;
}, '');

function createListFilterTemplate() {
  return (
    `<form class="trip-filters" action="#" method="get">
    ${filters}
  </form>`
  );
}
export default class ListFilterView extends AbstractView{
  get template() {
    return createListFilterTemplate();
  }
}
