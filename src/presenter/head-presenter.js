import ListEventInfoView from '../view/event-info-view.js';
import ListFilterView from '../view/list-filter-view.js';
import {render, RenderPosition} from '../framework/render.js';
import {UpdateType} from '../const.js';

export default class HeadPresenter {
  #siteHeadContainer = null;
  #filterModel = null;
  #pointModel = null;
  #listInfo = new ListEventInfoView();
  #listFilter = null;

  #handleClickTypeFilter = (filterType) => {
    this.#filterModel.setFilter(UpdateType.MAJOR,filterType);
  };

  constructor({siteHeadContainer, filterModel, pointModel}){
    this.#siteHeadContainer = siteHeadContainer;
    this.#filterModel = filterModel;
    this.#pointModel = pointModel;
  }

  init(){
    this.#listFilter = new ListFilterView({
      onClickTypeFilter: this.#handleClickTypeFilter,
      pointModel: this.#pointModel,
    });
    render(this.#listInfo, this.#siteHeadContainer, RenderPosition.AFTERBEGIN);
    render(this.#listFilter, this.#siteHeadContainer);
  }
}
