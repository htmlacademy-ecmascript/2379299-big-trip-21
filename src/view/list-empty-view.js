import AbstractView from '../framework/view/abstract-stateful-view.js';

function createListEmptyTemplate() {
  return (
    `<section class="trip-events">
    <h2 class="visually-hidden">Trip events</h2>

    <p class="trip-events__msg">Click New Event to create your first point</p>

  </section>`
  );
}

export default class ListEmptyView extends AbstractView{
  get template() {
    return createListEmptyTemplate();
  }
}
