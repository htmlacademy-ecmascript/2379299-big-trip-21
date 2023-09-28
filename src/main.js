import HeadPresenter from './presenter/head-presenter.js';
import MainPresenter from './presenter/main-presenter.js';
import PointModel from './model/point-model.js';
import FilterModel from './model/filter-model.js';


const siteHeadContainer = document.querySelector('.trip-main');
const siteEventContainer = document.querySelector('.trip-events');

const pointModel = new PointModel();
const filterModel = new FilterModel();
const headPresenter = new HeadPresenter({siteHeadContainer, filterModel});
const mainPresenter = new MainPresenter({container:siteEventContainer, pointModel, filterModel});

headPresenter.init();
mainPresenter.init();
