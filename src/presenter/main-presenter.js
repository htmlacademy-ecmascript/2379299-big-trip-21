import ListContainerForEvent from '../view/container-for-event';
import ListSortView from '../view/list-sort-view.js';
import {render} from '../framework/render.js';
import ListEmptyView from '../view/list-empty-view.js';
import EventPresenter from './event-presenter.js';
import {sortDay, sortTime, sortPrice} from '../utils.js';
import {SortType} from '../const';
export default class MainPresenter {
  #container = null;
  #pointModel = null;

  #listSort = null;
  #listEmpty = new ListEmptyView();
  #containerForEvent = new ListContainerForEvent();
  #allPoints = new Map();
  #currentSortType = 'Day';

  constructor({container, pointModel}){
    this.#container = container;
    this.#pointModel = pointModel;
  }

  get points(){
    switch (this.#currentSortType) {
      case SortType.DAY:
        return[...this.#pointModel.points].sort(sortDay);

      case SortType.TIME:
        return[...this.#pointModel.points].sort(sortTime);

      case SortType.PRICE:
        return[...this.#pointModel.points].sort(sortPrice);

      default:
    }

    return this.#pointModel.points;
  }

  #handleSortTypeChange = (sortType) => {
    this.#currentSortType = sortType;
    this.#clearPointList();
    this.#renderPointsList();
  };

  #renderSort(){
    this.#listSort = new ListSortView({
      onSortTypeChange: this.#handleSortTypeChange
    });
    render(this.#listSort, this.#container);
  }

  #renderEmpty(){
    render(this.#listEmpty, this.#container);
  }

  init(){

    this.#renderSort();
    if (!this.points,length){
      this.#renderEmpty();
      return;
    }

    this.#renderPointsList();
  }

  #handlePointChange = (updatePoint) => {
    this.#allPoints.get(updatePoint.id).init(updatePoint);
  };

  #renderPointsList(){
    render(this.#containerForEvent, this.#container);
    for (let i = 0; i < this.points.length; i++) {
      this.#renderPoint(this.points[i]);
    }
  }

  #renderPoint(point){
    const pointPresentor = new EventPresenter({
      containerForEvent: this.#containerForEvent.element,
      onPointChange: this.#handlePointChange,
      onModeChange: this.#hendleModeChange
    });

    pointPresentor.init(point);
    this.#allPoints.set(point.id, pointPresentor);
  }

  #clearPointList() {
    this.#allPoints.forEach((presenter) => presenter.destroy());
    this.#allPoints.clear();
  }

  #hendleModeChange = () => {
    this.#allPoints.forEach((presenter) => presenter.resetView());
  };
}

