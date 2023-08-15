import EventItemView from '../view/event-item-view';
import ListContainerForEvent from '../view/container-for-event';
import ListSortView from '../view/list-sort-view.js';
import ListFormView from '../view/event-item-form-view.js';
import {render} from '../render.js';

const EVENT_COUNT = 3;

export default class EventPresenter {
  listSort = new ListSortView();
  containerForEvent = new ListContainerForEvent();

  constructor({siteEventContainer}){
    this.siteEventContainer = siteEventContainer;
  }

  init(){
    render(this.listSort, this.siteEventContainer);
    render(this.containerForEvent, this.siteEventContainer);
    render(new ListFormView(), this.containerForEvent.getElement());

    for (let i = 0; i < EVENT_COUNT; i++) {
      render(new EventItemView(), this.containerForEvent.getElement());
    }
  }
}


