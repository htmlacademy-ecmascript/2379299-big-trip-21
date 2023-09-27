import ListFormView from '../view/event-item-form-view.js';
import {replace, render} from '../framework/render.js';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import {DEFAULT__POINT} from '../view/event-item-form-view.js';
import {nanoid} from 'nanoid';
import {UserAction, UpdateType} from '../const.js';

class EmptiPoint extends AbstractStatefulView {
  get template() {

    return `<li>   </li>`;
  }
}
export default class AddNewPointPresenter {
  #containerForEvent = null;
  #newPointForm = null;
  #emptiPoint = null;
  #hendlePointChange = null;

  constructor({containerForEvent, onPointChange}){
    this.#containerForEvent = containerForEvent;
    this.#hendlePointChange = onPointChange;
  }

  init(){
    this.#newPointForm = new ListFormView({
      point: DEFAULT__POINT,
      onFormSubmit: this.#handleOnFormSubmit,
      // onClickButton: this.resetView.bind(this),
      // onClickDelete: this.#handleOnClickDelete,
    });


    this.#emptiPoint = new EmptiPoint();

    render(this.#emptiPoint, this.#containerForEvent);
    document.querySelector('.trip-main__event-add-btn').addEventListener('click', this.#handleOnOpenForm);

  }

  #handleOnFormSubmit = (point) => {
    this.#replaceFormToEmpty(); // закрывает форму
    this.#hendlePointChange(//(в main presenter) раньше искал по id во всех точках и заменял, сейчас this.#handleViewAction
      UserAction.ADD_POINT,
      UpdateType.MINOR,
      {id: nanoid(), ...point}
    );
  };

  #handleOnOpenForm = () => {
    this.#replaceEmptyToForm();
  };

  #replaceEmptyToForm(){
    replace(this.#newPointForm, this.#emptiPoint);
  }

  #replaceFormToEmpty(){
    replace(this.#emptiPoint, this.#newPointForm);
    // document.removeEventListener('keydown', this.#escKeyDownHandler);
    // this.#mode = Mode.DEFAULT;
  }

  // #handleOnClickDelete = () => {
  //   this.#hendlePointChange(
  //     UserAction.DELETE_POINT,
  //     UpdateType.MINOR,
  //     this.#point
  //   );
  // };
}
