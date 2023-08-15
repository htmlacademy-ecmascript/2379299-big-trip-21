import ListEventInfoView from '../view/event-info-view.js';
import ListFilterView from '../view/list-filter-view.js';
import {render, RenderPosition} from '../render.js';


export default class MainPresenter {
  listInfo = new ListEventInfoView();
  ListFilter = new ListFilterView();

  constructor({siteMainContainer}){
    this.siteMainContainer = siteMainContainer;
  }

  init(){
    render(this.listInfo, this.siteMainContainer, RenderPosition.AFTERBEGIN);
    render(this.ListFilter, this.siteMainContainer);
  }
}


