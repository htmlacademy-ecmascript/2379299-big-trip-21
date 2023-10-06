import EventItemFormView, { DEFAULT__POINT } from '../view/event-item-form-view.js';
import {replace, render} from '../framework/render.js';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import {FilterType, UpdateType, UserAction} from '../const.js';
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
  #addButton = null;
  #filterModel = null;

  constructor({containerForEvent, onPointChange, closeEditForms, pointModel, filterModel}){
    this.#containerForEvent = containerForEvent;
    this.#hendlePointChange = onPointChange;
    this.#closeEditForms = closeEditForms;
    this.#filterModel = filterModel;
    this.#addButton = document.querySelector('.trip-main__event-add-btn');

    this.#addButton.addEventListener('click', this.#openFormHandler);

    pointModel.addObserver(this.#handleModelEvent);
  }

  init({offers, destinations}){
    this.#newPointForm = new EventItemFormView({
      point: DEFAULT__POINT,
      onFormSubmit: this.#handleOnFormSubmit,
      onClickDelete: this.#handleOnClickClose,
      onClickButton: this.#handleOnClickClose,
      offers: offers, destinations: destinations,
    });
    this.#emptyPoint = new EmptyPoint();


    render(this.#emptyPoint, this.#containerForEvent);
  }

  #handleModelEvent = (updateType) => {
    switch (updateType) {
      case UpdateType.MINOR:
      case UpdateType.MAJOR:
        this.closeForm();
        break;
      case UpdateType.ERROR:
        this.#newPointForm.resetLoadings();
        this.#newPointForm.shake();
        break;
    }
  };

  closeForm = () => {
    if (this.#formOpened === true){
      document.removeEventListener('keydown', this.#escKeyDownHandler);
      this.#newPointForm.resetForm();
      this.#formOpened = false;
      this.#addButton.disabled = false;
      this.#replaceFormToEmpty();
    }
  };

  #handleOnFormSubmit = (point) => {
    this.#hendlePointChange(
      UserAction.ADD_POINT,
      UpdateType.MINOR,
      point
    );
  };

  #openFormHandler = () => {
    if (this.#formOpened === false){
      document.addEventListener('keydown', this.#escKeyDownHandler);
      this.#filterModel.setFilter(UpdateType.UI_RESET, FilterType.EVERYTHING);
      this.#replaceEmptyToForm();
      this.#formOpened = true;
      this.#addButton.disabled = true;
      this.#closeEditForms();
    }
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.closeForm();
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
