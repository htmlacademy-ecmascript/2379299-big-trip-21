import AbstractView from '../framework/view/abstract-stateful-view.js';
import {formatDateMonth} from '../utils.js';

function createEventInfoTemplate({sum, cities, dates}) {
  const citiesString = cities.join(' &mdash; ');
  const datesString = dates.join('');

  return (
    ` <section class="trip-main__trip-info  trip-info">
        <div class="trip-info__main">
          <h1 class="trip-info__title">${citiesString}</h1>
          <p class="trip-info__dates">${datesString}</p>
        </div>

        <p class="trip-info__cost">
          Total: &euro;&nbsp;<span class="trip-info__cost-value">${sum}</span>
        </p>
      </section>`
  );
}
export default class ListEventInfoView extends AbstractView{
  #pointModel = null;

  constructor({pointModel}) {
    super();
    this.#pointModel = pointModel;
    this.#pointModel.addObserver(this.#handleModelEvent);
    this._setState({
      sum: 0,
      cities: [],
      dates: []
    });

  }

  #calculateSum(points) {
    return points?.reduce((accumulator, current) => {
      const pointsPrice = accumulator + current.price;
      const sumOfOffers = current.offers?.reduce((offerSum, offer) => offerSum + offer.price, 0);
      return pointsPrice + sumOfOffers;
    }, 0);
  }

  #calculateDates(points){
    if (points.length === 0){
      return [];
    }

    if (points.length === 1){
      return [
        formatDateMonth(points[0]?.dateFrom)
      ];
    }

    return [
      formatDateMonth(points[0]?.dateFrom),
      '&nbsp;&mdash;&nbsp;',
      formatDateMonth(points[points.length - 1]?.dateFrom)
    ];
  }

  #calculateCities(points){
    // console.log('points.length', points.length);
    // const counter = points.reduce((sum) => sum + 1, 1);

    if (points.length === 0){
      return [];
    }

    if (points.length > 3){
      return [
        points[0]?.destination?.name,
        '...',
        points[points.length - 1]?.destination?.name
      ];
    }

    return points.map((current) => current?.destination?.name);
  }

  #handleModelEvent = () => {
    const points = this.#pointModel.points;
    this.updateElement({
      sum: this.#calculateSum(points),
      cities: this.#calculateCities(points),
      dates: this.#calculateDates(points)
    });
  };

  _restoreHandlers(){ }

  get template() {
    return createEventInfoTemplate({
      sum: this._state?.sum || 0,
      cities: this._state?.cities || [],
      dates: this._state?.dates || []
    });
  }
}
