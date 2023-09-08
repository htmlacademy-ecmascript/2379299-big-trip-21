import ListContainerForEvent from '../view/container-for-event';
import ListSortView from '../view/list-sort-view.js';
import {render} from '../framework/render.js';
import ListEmptyView from '../view/list-empty-view.js';
import EventPresenter from './event-presenter.js';
import {updateItem, sortDay, sortTime, sortPrice} from '../utils.js';
import {SortType} from '../const';

export default class MainPresenter {
  #container = null;
  #pointModel = null;

  #listSort = null;
  #listEmpty = new ListEmptyView();
  #containerForEvent = new ListContainerForEvent();
  #boardPoints = [];
  #allPoints = new Map();

  constructor({container, pointModel}){
    this.#container = container;
    this.#pointModel = pointModel;
  }

  #handleSortTypeChange = (sortType) => {
    switch (sortType) {
      case SortType.DAY:
        this.#boardPoints.sort(sortDay);
        break;

      case SortType.TIME:
        this.#boardPoints.sort(sortTime);
        break;

      case SortType.PRICE:
        this.#boardPoints.sort(sortPrice);
        break;

      default:

    }
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
    this.#boardPoints = [...this.#pointModel.points];
    this.#renderSort();
    if (!this.#boardPoints.length){
      this.#renderEmpty();
      return;
    }
    this.#boardPoints.sort(sortDay);
    this.#renderPointsList();

  }

  #handlePointChange = (updatePoint) => {
    console.log('updatePoint', updatePoint);
    this.#boardPoints = updateItem(this.#boardPoints, updatePoint);
    this.#allPoints.get(updatePoint.ID).init(updatePoint);
    console.log('this.#boardPointstttttttttttttttttttttttt ', updatePoint.ID,"2" ,this.#allPoints );

  };

  #renderPointsList(){
    render(this.#containerForEvent, this.#container);
    for (let i = 0; i < this.#boardPoints.length; i++) {
      this.#renderPoint(this.#boardPoints[i]);
    }
  }


  #renderPoint(point){
    const pointPresentor = new EventPresenter({
      containerForEvent: this.#containerForEvent.element,
      onPointChange: this.#handlePointChange,
      onModeChange: this.#hendleModeChange
    });

    pointPresentor.init(point);
    this.#allPoints.set(point.ID, pointPresentor);
    console.log(999999999999999999999)
  }

  #clearPointList() {
    this.#allPoints.forEach((presenter) => presenter.destroy());
    this.#allPoints.clear();
  }

  #hendleModeChange = () => {
    this.#allPoints.forEach((presenter) => presenter.resetView());
  };
}

