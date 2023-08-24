import MainPresenter from './presenter/main-presenter.js';
import EventPresenter from './presenter/event-presenter.js';
import PointModel from './model/point-model.js';

const siteMainContainer = document.querySelector('.trip-main');
const siteEventContainer = document.querySelector('.trip-events');

const pointModel = new PointModel();
const mainPresenter = new MainPresenter({siteMainContainer});
const eventPresenter = new EventPresenter({container:siteEventContainer, pointModel});

mainPresenter.init();
eventPresenter.init();
