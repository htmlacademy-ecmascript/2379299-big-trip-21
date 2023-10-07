import ListEventInfoView from '../view/list-event-info-view.js';
import ListFilterView from '../view/list-filter-view.js';
import {render, RenderPosition} from '../framework/render.js';
import {UpdateType} from '../const.js';
export default class HeadPresenter {
  #siteHeadContainer = null;
  #filterModel = null;
  #pointModel = null;
  #listInfo = null;
  #listFilter = null;
  #addButton = null;

  #handleClickTypeFilter = (filterType) => {
    this.#filterModel.setFilter(UpdateType.MAJOR,filterType);
  };

  constructor({siteHeadContainer, filterModel, pointModel}){
    this.#siteHeadContainer = siteHeadContainer;
    this.#filterModel = filterModel;
    this.#pointModel = pointModel;
    this.#listInfo = new ListEventInfoView({
      pointModel: pointModel
    });

    this.#pointModel.addObserver(this.#handleModelEvent);
    this.#addButton = document.querySelector('.trip-main__event-add-btn');
    this.#addButton.disabled = true;
  }

  init(){

    this.#listFilter = new ListFilterView({
      onClickTypeFilter: this.#handleClickTypeFilter,
      pointModel: this.#pointModel,
      filterModel: this.#filterModel
    });
    render(this.#listInfo, this.#siteHeadContainer, RenderPosition.AFTERBEGIN);
    render(this.#listFilter, this.#siteHeadContainer);
  }

  #handleModelEvent = (updateType) => {
    switch (updateType) {
      case UpdateType.INIT:
        this.#addButton.disabled = false;
        break;
    }
  };
}
