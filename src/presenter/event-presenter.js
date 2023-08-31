import EventItemView from '../view/event-item-view';
import ListFormView from '../view/event-item-form-view.js';
import {render, replace, remove} from '../framework/render.js';


export default class EventPresenter {
  #containerForEvent = null;
  #point = null;

  #pointItem = null;
  #pointForm = null;

  constructor({containerForEvent}){
    this.#containerForEvent = containerForEvent;
  }

  init(point){
    this.#point = point;
    const prevPointItem = this.#pointItem;
    const prevPointForm = this.#pointForm;

    this.#pointItem = new EventItemView({point: this.#point,
      onClick: this.#handleOnClick
    });


    this.#pointForm = new ListFormView({point: this.#point,
      onFormSubmit: this.#handleOnFormSubmit
    });

    if (prevPointItem === null || prevPointForm === null){

      render(this.#pointItem, this.#containerForEvent);
      return;
    }

    if (this.#containerForEvent.contains(prevPointItem.element)) {

      replace(this.#pointItem, prevPointItem);
    }

    if (this.#containerForEvent.contains(prevPointForm.element)) {
      replace(this.#pointForm, prevPointForm);
    }

    remove(prevPointItem);
    remove(prevPointForm);

  }

  destroy() {
    remove(this.#pointItem);
    remove(this.#pointForm);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.replaceFormToPoint();
    }
  };

  #handleOnClick = () => {
    this.#replacePointToForm();
  };

  #handleOnFormSubmit = () => {
    this.#replaceFormToPoint();

  };

  #replacePointToForm(){
    replace(this.#pointForm, this.#pointItem);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  #replaceFormToPoint(){
    replace(this.#pointItem, this.#pointForm);
    document.removeEventListener('keydown', this.escKeyDownHandler);
  }
}

