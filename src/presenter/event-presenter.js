import EventItemView from '../view/event-item-view';
import ListFormView from '../view/event-item-form-view.js';
import {render, replace, remove} from '../framework/render.js';
import {UserAction, UpdateType} from '../const';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};
export default class EventPresenter {
  #containerForEvent = null;
  #point = null;
  #mode = Mode.DEFAULT;

  #pointItem = null;
  #pointForm = null;

  #hendlePointChange = null;
  #hendleModeChange = null;

  constructor({containerForEvent, onPointChange, onModeChange}){
    this.#containerForEvent = containerForEvent;
    this.#hendlePointChange = onPointChange;
    this.#hendleModeChange = onModeChange;
  }

  init(point){
    this.#point = point;
    const prevPointItem = this.#pointItem;
    const prevPointForm = this.#pointForm;

    this.#pointItem = new EventItemView({
      point: this.#point,
      onClick: this.#handleOnClick,
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#pointForm = new ListFormView({
      point: this.#point,
      onFormSubmit: this.#handleOnFormSubmit,
      onClickButton: this.resetView.bind(this)
    });

    if (!prevPointItem || !prevPointForm){

      render(this.#pointItem, this.#containerForEvent);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {

      replace(this.#pointItem, prevPointItem);
    }

    if (this.#mode === Mode.EDITING) {
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
      this.#replaceFormToPoint();
    }
  };

  #handleOnClick = () => {
    this.#replacePointToForm();
  };

  #handleOnFormSubmit = (point) => { // приходит  колбэк с event view с обновленными данными
    this.#replaceFormToPoint(); // закрывает форму
    this.#hendlePointChange( //(в main presenter) раньше искал по id во всех точках и заменял, сейчас this.#handleViewAction
      UserAction.UPDATE_POINT,
      UpdateType.MINOR,
      point
    );
  };

  #handleFavoriteClick = () => {
    this.#hendlePointChange(
      UserAction.UPDATE_POINT,
      UpdateType.MINOR,
      {...this.#point, isFavorite: !this.#point.isFavorite}
    );
  };

  #replacePointToForm(){
    replace(this.#pointForm, this.#pointItem);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#hendleModeChange();
    this.#mode = Mode.EDITING;
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceFormToPoint();
    }
  }

  #replaceFormToPoint(){
    replace(this.#pointItem, this.#pointForm);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  }
}

