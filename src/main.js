import HeadPresenter from './presenter/head-presenter.js';
import MainPresenter from './presenter/main-presenter.js';
import PointModel from './model/point-model.js';

const siteMainContainer = document.querySelector('.trip-main');
const siteEventContainer = document.querySelector('.trip-events');

const pointModel = new PointModel();
const headPresenter = new HeadPresenter({siteMainContainer});
const mainPresenter = new MainPresenter({container:siteEventContainer, pointModel});

headPresenter.init();
mainPresenter.init();

