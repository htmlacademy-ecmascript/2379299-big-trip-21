import AbstractView from '../framework/view/abstract-stateful-view.js';

function createContainerForEventTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class ListContainerForEvent extends AbstractView {
  get template () {
    return createContainerForEventTemplate();
  }
}


