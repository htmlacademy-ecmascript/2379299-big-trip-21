import MainPresenter from './presenter/main-presenter.js';
import EventPresenter from './presenter/event-presenter.js';

const siteMainContainer = document.querySelector('.trip-main');
const siteEventContainer = document.querySelector('.trip-events');

const mainPresenter = new MainPresenter({siteMainContainer});
const eventPresenter = new EventPresenter({siteEventContainer});

mainPresenter.init();
eventPresenter.init();
