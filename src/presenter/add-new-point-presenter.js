import ListFormView, { DEFAULT__POINT } from '../view/event-item-form-view.js';
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
  #closeEditForms = null;
  #newPointForm = null;
  #emptyPoint = null;
  #hendlePointChange = null;
  #formOpened = false;

  constructor({containerForEvent, onPointChange, closeEditForms}){
    this.#containerForEvent = containerForEvent;
    this.#hendlePointChange = onPointChange;
    this.#closeEditForms = closeEditForms;
  }

  init({offers, destinations}){
    this.#newPointForm = new ListFormView({
      point: DEFAULT__POINT,
      onFormSubmit: this.#handleOnFormSubmit,
      onClickDelete: this.#handleOnClickClose,
      onClickButton: this.#handleOnClickClose,
      offers: offers, destinations: destinations
    });
    this.#emptyPoint = new EmptyPoint();

    render(this.#emptyPoint, this.#containerForEvent);
    document.querySelector('.trip-main__event-add-btn').addEventListener('click', this.#handleOnOpenForm);
  }

  closeForm = () => {
    if (this.#formOpened === true){
      this.#newPointForm.resetForm();
      this.#formOpened = false;
      this.#replaceFormToEmpty();
    }
  };

  #handleOnFormSubmit = (point) => {
    this.#hendlePointChange(//(в main presenter) раньше искал по id во всех точках и заменял, сейчас this.#handleViewAction
      UserAction.ADD_POINT,
      UpdateType.MINOR,
      point
    ).then(() => {
      this.closeForm();
    });
  };

  #handleOnOpenForm = () => {
    if (this.#formOpened === false){
      this.#replaceEmptyToForm();
      this.#formOpened = true;
      this.#closeEditForms();
    }
  };

  #replaceEmptyToForm(){
    replace(this.#newPointForm, this.#emptyPoint);
  }

  #replaceFormToEmpty(){
    replace(this.#emptyPoint, this.#newPointForm);
  }

  #handleOnClickClose = () => {
    this.closeForm();
  };
}
