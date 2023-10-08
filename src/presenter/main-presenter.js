import ListContainerForEvent from '../view/list-container-for-event';
import ListSortView from '../view/list-sort-view.js';
import {render, remove} from '../framework/render.js';
import ListEmptyView from '../view/list-empty-view.js';
import AddNewPointPresenter from './add-new-point-presenter.js';
import EventPresenter from './event-presenter.js';
import {sortDay, sortTime, sortPrice, filter} from '../utils.js';
import {SortType,UserAction, UpdateType} from '../const';
import LoadingView from '../view/loading-view.js';
import UiBlocker from '../framework/ui-blocker/ui-blocker';
import ErrorView from '../view/error-view';
export default class MainPresenter {
  #container = null;
  #pointModel = null;
  #filterModel = null;
  #currentFilters = [];
  #listEmpty = null;
  #newPointForm = null;

  #listSort = null;
  #loadingComponent = new LoadingView();
  #errorComponent = new ErrorView();
  #containerForEvent = new ListContainerForEvent();
  #allPoints = new Map();
  #currentSortType = 'Day';
  #isLoading = true;

  #uiBlocker = new UiBlocker({lowerLimit: 0, upperLimit: 500});

  constructor({container, pointModel, filterModel}){
    this.#container = container;
    this.#pointModel = pointModel;
    this.#filterModel = filterModel;

    this.#pointModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);

    this.#newPointForm = new AddNewPointPresenter({
      containerForEvent: this.#containerForEvent.element,
      onPointChange: this.#handleViewAction,
      closeEditForms: this.#hendleModeChange,
      pointModel: this.#pointModel,
      filterModel: this.#filterModel
    });
  }

  get points(){
    this.#currentFilters = this.#filterModel.filter;
    const filteredPoints = filter(this.#currentFilters, this.#pointModel);

    switch (this.#currentSortType) {
      case SortType.DAY:
        return[...filteredPoints].sort(sortDay);

      case SortType.TIME:
        return[...filteredPoints].sort(sortTime);

      case SortType.PRICE:
        return[...filteredPoints].sort(sortPrice);

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
      onSortTypeChange: this.#handleSortTypeChange,
      filterModel: this.#filterModel
    });
    render(this.#listSort, this.#container);
  }

  #renderEmpty(){
    this.#listEmpty = new ListEmptyView({
      filterType: this.#currentFilters
    });
    render(this.#listEmpty, this.#container);
  }

  init(){
    this.#renderPointsList();
  }

  #handleViewAction = (actionType, updateType, update) => {
    this.#uiBlocker.block();

    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointModel.updatePoint(updateType, update);
        break;
      case UserAction.ADD_POINT:
        return this.#pointModel.addPoint(updateType, update);
      case UserAction.DELETE_POINT:
        this.#pointModel.deletePoint(updateType, update);
        break;
    }
  };

  #handleModelEvent = (updateType, data) => {
    this.#uiBlocker.unblock();

    switch (updateType) {
      case UpdateType.PATCH:
        this.#allPoints.get(data.id).init(data);
        this.#allPoints.get(data.id).resetView();
        break;
      case UpdateType.MINOR:
      case UpdateType.MAJOR:
      case UpdateType.UI_RESET:
        this.#clearPointList();
        this.#renderPointsList();
        break;
      case UpdateType.INIT:
        this.#renderSort();
        this.#isLoading = false;
        this.#clearLoading();
        this.#clearPointList();
        this.#renderNewForm();
        this.#renderPointsList();
        break;
      case UpdateType.ERROR:
        if (data?.id !== undefined){
          this.#allPoints.get(data.id).pointForm.shake();
          this.#allPoints.get(data.id).pointForm.resetLoadings();
        }
        break;
      case UpdateType.LOAD_ERROR:
        this.#isLoading = false;
        this.#clearLoading();
        this.#clearPointList();
        this.#renderNewForm();
        this.#renderErrorLoading();
        break;
    }
  };

  #renderLoading() {
    render(this.#loadingComponent, this.#container);
  }

  #clearLoading() {
    remove(this.#loadingComponent);
  }

  #renderErrorLoading() {
    render(this.#errorComponent, this.#container);
  }

  #renderPointsList(){
    if (this.#isLoading) {
      this.#renderLoading();
      return;
    }

    if (!this.points.length){
      this.#renderEmpty();
      return;
    }

    render(this.#containerForEvent, this.#container);
    for (let i = 0; i < this.points.length; i++) {
      this.#renderPoint(this.points[i]);
    }
  }

  #renderNewForm() {
    try {
      this.#newPointForm.init({
        offers: this.#pointModel.offers,
        destinations: this.#pointModel.destinations
      });
    } catch (error) { /* empty */ }
  }

  #renderPoint(point){
    const pointPresentor = new EventPresenter({
      containerForEvent: this.#containerForEvent.element,
      onPointChange: this.#handleViewAction,
      onModeChange: this.#hendleModeChange,
      offers: this.#pointModel.offers,
      destinations: this.#pointModel.destinations,
      closeAddForm: this.#newPointForm.closeForm
    });

    pointPresentor.init(point);
    this.#allPoints.set(point.id, pointPresentor);
  }

  #clearPointList() {
    this.#allPoints.forEach((presenter) => presenter.destroy());
    this.#allPoints.clear();
    if (this.#listEmpty){
      remove(this.#listEmpty);
    }
  }

  #hendleModeChange = () => {
    this.#allPoints.forEach((presenter) => presenter.resetView());
  };
}
