import HeadPresenter from './presenter/head-presenter.js';
import MainPresenter from './presenter/main-presenter.js';
import PointModel from './model/point-model.js';
import FilterModel from './model/filter-model.js';
import PointsApiService from './point-api-service.js';
import OffersApiService from './offers-api-service.js';
import DestinationsApiService from './destinations-api-service.js';

const AUTHORIZATION = 'Basic hfyscmipwby1sa2j';
const END_POINT = 'https://21.objects.pages.academy/big-trip';

const siteHeadContainer = document.querySelector('.trip-main');
const siteEventContainer = document.querySelector('.trip-events');

const pointModel = new PointModel({
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION),
  offersApiService: new OffersApiService(END_POINT, AUTHORIZATION),
  destinationsApiService: new DestinationsApiService(END_POINT, AUTHORIZATION),
});
const filterModel = new FilterModel();
const headPresenter = new HeadPresenter({siteHeadContainer, filterModel, pointModel});
const mainPresenter = new MainPresenter({container:siteEventContainer, pointModel, filterModel});

pointModel.init().then(() => headPresenter.init());
mainPresenter.init();
