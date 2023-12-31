import Observable from '../framework/observable.js';
import {UpdateType} from '../const.js';
export default class PointModel extends Observable {
  #offers = [];
  #destinations = [];
  #points = [];
  #pointsApiService = null;
  #offersApiService = null;
  #destinationsApiService = null;

  constructor({pointsApiService, offersApiService, destinationsApiService}){
    super();
    this.#pointsApiService = pointsApiService;
    this.#offersApiService = offersApiService;
    this.#destinationsApiService = destinationsApiService;
  }

  get points(){
    return this.#points;
  }

  get offers() {
    return this.#offers;
  }

  get destinations() {
    return this.#destinations;
  }

  async init() {
    this._notify(UpdateType.IDLE);
    try {
      this.#destinations = await this.#destinationsApiService.destinations;
      this.#offers = await this.#offersApiService.offers;
      const points = await this.#pointsApiService.getPoints();
      this.#points = points.map(this.#adaptToClient);
      this._notify(UpdateType.INIT);
    } catch(err) {
      this._notify(UpdateType.LOAD_ERROR);
      this.#points = [];
    }
  }

  async updatePoint(updateType, update) {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      this._notify(UpdateType.ERROR, update);
      throw new Error('Can\'t update unexisting point');
    }

    try {
      const response = await this.#pointsApiService.updatePoint(update);

      const updatedPoint = this.#adaptToClient(response);

      this.#points = [
        ...this.#points.slice(0, index),
        updatedPoint,
        ...this.#points.slice(index + 1),
      ];

      this._notify(updateType, updatedPoint);
    } catch(err) {
      this._notify(UpdateType.ERROR, update);
      throw new Error('Can\'t update point');
    }
  }

  async addPoint(updateType, update) {
    if (update?.id !== undefined){
      delete update.id;
    }

    try {
      const response = await this.#pointsApiService.addPoint(update);
      const newPoint = this.#adaptToClient(response);

      this.#points = [
        newPoint,
        ...this.#points,
      ];

      this._notify(updateType, newPoint);
    } catch (e) {
      this._notify(UpdateType.ERROR, update);
    }
  }

  async deletePoint(updateType, update) {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t add point');
    }

    try {
      await this.#pointsApiService.deletePoint(update);
      this.#points.splice(index, 1);
      this._notify(updateType);
    }catch(err) {
      throw new Error('Can\'t delete point');
    }
  }

  #mapOfferToPoint(point){
    const offersType = this.#offers.find((offer) => offer.type === point.type);
    return point.offers.map((offerId) =>
      offersType.offers.find((offer) => offer.id === offerId)
    );
  }

  #mapDestinationToPoint(point){
    return this.#destinations.find((destination) => destination.id === point.destination);
  }

  #adaptToClient = (point) => {
    const adaptedPoint = {
      ...point,
      'dateFrom': point['date_from'] !== null ? new Date(point['date_from']) : point['date_from'],
      'dateTo': point['date_to'] !== null ? new Date(point['date_to']) : point['date_to'],
      'price': point.base_price,
      'isFavorite': point.is_favorite,
      offers: this.#mapOfferToPoint(point),
      destination: this.#mapDestinationToPoint(point)
    };

    delete adaptedPoint.date_from;
    delete adaptedPoint.date_to;
    delete adaptedPoint.base_price;
    delete adaptedPoint.is_favorite;

    return adaptedPoint;
  };
}
