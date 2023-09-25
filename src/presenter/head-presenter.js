import ListEventInfoView from '../view/event-info-view.js';
import ListFilterView from '../view/list-filter-view.js';
import {render, RenderPosition} from '../framework/render.js';
import {UpdateType} from '../const.js';

export default class HeadPresenter {
  #siteHeadContainer = null;
  #filterModel = null;
  #listInfo = new ListEventInfoView();

  #handleClickTypeFilter = (filterType) => {
    this.#filterModel.setFilter(UpdateType.MAJOR,filterType);
  };

  #ListFilter = new ListFilterView({
    onClickTypeFilter: this.#handleClickTypeFilter

  });

  constructor({siteHeadContainer, filterModel}){
    this.#siteHeadContainer = siteHeadContainer;
    this.#filterModel = filterModel;
  }

  init(){
    render(this.#listInfo, this.#siteHeadContainer, RenderPosition.AFTERBEGIN);
    render(this.#ListFilter, this.#siteHeadContainer);
  }
}


