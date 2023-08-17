import EventItemView from '../view/event-item-view';
import ListContainerForEvent from '../view/container-for-event';
import ListSortView from '../view/list-sort-view.js';
import ListFormView from '../view/event-item-form-view.js';
import {render} from '../render.js';

export default class EventPresenter {
  listSort = new ListSortView();
  containerForEvent = new ListContainerForEvent();

  constructor({container, pointModel}){
    this.container = container;
    this.pointModel = pointModel;
  }

  init(){
    this.boardpoints = [...this.pointModel.getPoints()];
    render(this.listSort, this.container);
    render(this.containerForEvent, this.container);
    render(new ListFormView(), this.containerForEvent.getElement());

    for (let i = 0; i < this.boardpoints.length; i++) {
      render(new EventItemView({point:this.boardpoints[i]}), this.containerForEvent.getElement());
    }
  }
}


