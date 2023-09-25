import ListContainerForEvent from '../view/container-for-event';
import ListSortView from '../view/list-sort-view.js';
import {render, remove} from '../framework/render.js';
import ListEmptyView from '../view/list-empty-view.js';
import EventPresenter from './event-presenter.js';
import {sortDay, sortTime, sortPrice, filter} from '../utils.js';
import {SortType,UserAction, UpdateType} from '../const';
export default class MainPresenter {
  #container = null;
  #pointModel = null;
  #filterModel = null;
  #currentFilter = [];
  #listEmpty = null;

  #listSort = null;

  #containerForEvent = new ListContainerForEvent();
  #allPoints = new Map();
  #currentSortType = 'Day';

  constructor({container, pointModel, filterModel}){
    this.#container = container;
    this.#pointModel = pointModel;
    this.#filterModel = filterModel;


    this.#pointModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get points(){
    this.#currentFilter = this.#filterModel.filter;
    const filtredArray = filter(this.#currentFilter, this.#pointModel);

    switch (this.#currentSortType) {
      case SortType.DAY:
        return[...filtredArray].sort(sortDay);

      case SortType.TIME:
        return[...filtredArray].sort(sortTime);

      case SortType.PRICE:
        return[...filtredArray].sort(sortPrice);

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
    this.#listEmpty = new ListEmptyView({
      filterType: this.#currentFilter
    });
    render(this.#listEmpty, this.#container);
  }

  init(){

    this.#renderSort();

    if (!this.points.length){
      this.#renderEmpty();
      return;
    }

    this.#renderPointsList();
  }

  #handleViewAction = (actionType, updateType, update) => { //раньше искал по id во всех точках и заменял , сейчас this.#hendlePointChange в event presenter
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointModel.updatePoint(updateType, update);
        break;
      case UserAction.ADD_POINT:
        this.#pointModel.addPoint(updateType, update);
        break;
      case UserAction.DELETE_POINT:
        this.#pointModel.deletePoint(updateType, update);
        break;
    }
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#allPoints.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this.#clearPointList();
        this.#renderPointsList();
        break;
      case UpdateType.MAJOR:
        this.#clearPointList();

        if (!this.points.length){
          this.#renderEmpty();
          return;
        }
        this.#renderPointsList();
        break;
    }
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
      onPointChange: this.#handleViewAction,
      onModeChange: this.#hendleModeChange
    });

    pointPresentor.init(point);
    this.#allPoints.set(point.id, pointPresentor);
  }

  #clearPointList() {
    this.#allPoints.forEach((presenter) => presenter.destroy());
    this.#allPoints.clear();
    if (this.#listEmpty){
      remove (this.#listEmpty);
    }
  }

  #hendleModeChange = () => {
    this.#allPoints.forEach((presenter) => presenter.resetView());
  };
}

