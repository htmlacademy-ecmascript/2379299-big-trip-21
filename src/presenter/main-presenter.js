import ListContainerForEvent from '../view/container-for-event';
import ListSortView from '../view/list-sort-view.js';
import {render} from '../framework/render.js';
import ListEmplyView from '../view/list-emply-view.js';
import EventPresenter from './event-presenter.js';
import {updateItem} from '../utils.js';

export default class MainPresenter {
  #container = null;
  #pointModel = null;

  #listSort = new ListSortView();
  #listEmply = new ListEmplyView();
  #containerForEvent = new ListContainerForEvent();
  #boardPoints = [];
  #allPoints = new Map();

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

  #handlePointChange = (updatePoint) => {
    this.#boardPoints = updateItem(this.#boardPoints, updatePoint);
    this.#allPoints.get(updatePoint.ID).init(updatePoint);
  };

  #renderPoint(point){
    const pointPresentor = new EventPresenter({
      containerForEvent: this.#containerForEvent.element,
      onPointChange: this.#handlePointChange
    });

    pointPresentor.init(point);
    this.#allPoints.set(point.ID, pointPresentor);

  }

  #clearPointList() {
    this.#allPoints.forEach((presenter) => presenter.destroy());
    this.#allPoints.clear();
  }
}

