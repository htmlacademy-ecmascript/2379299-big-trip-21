import EventItemView from '../view/event-item-view';
import ListContainerForEvent from '../view/container-for-event';
import ListSortView from '../view/list-sort-view.js';
import ListFormView from '../view/event-item-form-view.js';
import {render, replace} from '../framework/render.js';

export default class EventPresenter {
  #container = null;
  #pointModel = null;

  #listSort = new ListSortView();
  #containerForEvent = new ListContainerForEvent();
  #boardPoints = [];

  constructor({container, pointModel}){
    this.#container = container;
    this.#pointModel = pointModel;
  }

  init(){
    this.#boardPoints = [...this.#pointModel.points];
    render(this.#listSort, this.#container);
    render(this.#containerForEvent, this.#container);

    for (let i = 0; i < this.#boardPoints.length; i++) {
      this.#renderPoint(this.#boardPoints[i]);
    }
  }

  #renderPoint(point){
    const pointItem = new EventItemView({point,
      onClick: () => {
        replacePointToForm();
      }
    });

    const pointForm = new ListFormView({point,
      onFormSubmit: () => {
        replaceFormToPoint();
      }
    });

    function replacePointToForm(){
      replace(pointForm, pointItem);
    }

    function replaceFormToPoint(){
      replace(pointItem, pointForm);
    }

    render(pointItem,this.#containerForEvent.element);

  }
}
