import ListContainerForEvent from '../view/container-for-event';
import ListSortView from '../view/list-sort-view.js';
import {render} from '../framework/render.js';
import ListEmptyView from '../view/list-empty-view.js';
import EventPresenter from './event-presenter.js';
import {sortDay, sortTime, sortPrice} from '../utils.js';
import {SortType,UserAction, UpdateType} from '../const';
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

    this.#pointModel.addObserver(this.#handleModelEvent); //добавляем в pointModel функцию колбэк #handleModelEvent что бы при наступлении события произошло обновление
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


  #handleViewAction = (actionType, updateType, update) => { //раньше искал по id во всех точках и заменял , сейчас this.#hendlePointChange в event presenter
    switch (actionType) {
      case UserAction.UPDATE_TASK:
        this.#pointModel.updateTask(updateType, update);
        break;
      case UserAction.ADD_TASK:
        this.#pointModel.addTask(updateType, update);
        break;
      case UserAction.DELETE_TASK:
        this.#pointModel.deleteTask(updateType, update);
        break;
    }
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        // - обновить часть списка (например, когда поменялось описание)
        this.#allPoints.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        // - обновить список (например, когда задача ушла в архив)
        break;
      case UpdateType.MAJOR:
        // - обновить всю доску (например, при переключении фильтра)
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
  }

  #hendleModeChange = () => {
    this.#allPoints.forEach((presenter) => presenter.resetView());
  };
}

