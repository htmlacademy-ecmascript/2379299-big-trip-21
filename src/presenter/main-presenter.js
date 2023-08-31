import ListContainerForEvent from '../view/container-for-event';
import ListSortView from '../view/list-sort-view.js';
import {render} from '../framework/render.js';
import ListEmplyView from '../view/list-emply-view.js';
import EventPresenter from './event-presenter.js';
export default class MainPresenter {
  #container = null;
  #pointModel = null;

  #listSort = new ListSortView();
  #listEmply = new ListEmplyView();
  #containerForEvent = new ListContainerForEvent();
  #boardPoints = [];

  constructor({container, pointModel}){
    this.#container = container;
    this.#pointModel = pointModel;
  }

  #renderSort(){
    render(this.#listSort, this.#container);
  }

  #renderEmply(){
    render(this.#listEmply, this.#container);
  }

  init(){
    this.#boardPoints = [...this.#pointModel.points];
    this.#renderSort();
    if (!this.#boardPoints.length){
      this.#renderEmply();
      return;
    }

    render(this.#containerForEvent, this.#container);
    for (let i = 0; i < this.#boardPoints.length; i++) {
      this.#renderPoint(this.#boardPoints[i]);
    }
  }


  #renderPoint(point){
    const pointPresentor = new EventPresenter({containerForEvent: this.#containerForEvent.element});
    pointPresentor.init(point);
  }
}
