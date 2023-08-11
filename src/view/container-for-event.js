
import {createElement} from '../render.js';

function createContainerForEventTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class ListContainerForEvent {
  getTemplate() {
    return createContainerForEventTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

