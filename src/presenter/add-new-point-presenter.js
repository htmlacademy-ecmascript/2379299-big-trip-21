import ListFormView from '../view/event-item-form-view.js';
import {replace, render} from '../framework/render.js';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import {UserAction, UpdateType} from '../const.js';

class EmptyPoint extends AbstractStatefulView {
  get template() {
    return '<li></li>';
  }
}
export default class AddNewPointPresenter {
  #containerForEvent = null;
  #newPointForm = null;
  #emptyPoint = null;
  #hendlePointChange = null;
  #formOpened = false;
  #offers = [];
  #destinations = [];

  constructor({containerForEvent, onPointChange}){
    this.#containerForEvent = containerForEvent;
    this.#hendlePointChange = onPointChange;
  }

  init({offers, destinations}){
    this.#offers = offers;
    this.#destinations = destinations;

    this.#newPointForm = new ListFormView({
      onFormSubmit: this.#handleOnFormSubmit,
      onClickDelete: this.#handleOnClickClose,
      onClickButton: this.#handleOnClickClose,
      offers: offers, destinations: destinations
    });
    this.#emptyPoint = new EmptyPoint();

    render(this.#emptyPoint, this.#containerForEvent);
    // перенести в Subscribe
    document.querySelector('.trip-main__event-add-btn').addEventListener('click', this.#handleOnOpenForm);
  }

  #handleOnFormSubmit = (point) => {
    this.#formOpened = false;
    this.#replaceFormToEmpty(); // закрывает форму
    // тут надо сделать запрос на апи и результат положить в hendlePointChange
    this.#hendlePointChange(//(в main presenter) раньше искал по id во всех точках и заменял, сейчас this.#handleViewAction
      UserAction.ADD_POINT,
      UpdateType.MINOR,
      point
    );
  };

  #handleOnOpenForm = () => {
    if (this.#formOpened === false){
      this.#replaceEmptyToForm();
      this.#formOpened = true;
    }
  };

  #replaceEmptyToForm(){
    replace(this.#newPointForm, this.#emptyPoint);
  }

  #replaceFormToEmpty(){
    replace(this.#emptyPoint, this.#newPointForm);
  }

  #handleOnClickClose = () => {
    this.#formOpened = false;
    this.#replaceFormToEmpty();
  };
}
