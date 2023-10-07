import AbstractView from '../framework/view/abstract-stateful-view.js';

function createEventInfoTemplate({sum, cities}) {
  const citiesString = cities.join(' &mdash; ');

  return (
    ` <section class="trip-main__trip-info  trip-info">
        <div class="trip-info__main">
          <h1 class="trip-info__title">${citiesString}</h1>
          <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
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
      cities: ['Amsterdam','Chamonix','Geneva']
    });

  }

  #calculateSum(points) {
    return points?.reduce((accumulator, current) => {
      const pointsPrice = accumulator + current.price;
      const sumOfOffers = current.offers?.reduce((offerSum, offer) => offerSum + offer.price, 0);
      return pointsPrice + sumOfOffers;
    }, 0);
  }

  #calculateCities(points){
    const counter = points.reduce((sum) => sum + 1, 1);

    if (counter === 0){
      return [];
    }

    if (counter > 3){
      return [
        points[0]?.destination?.name,
        '...',
        points[counter - 2]?.destination?.name
      ];
    }

    return points.map((current) => current?.destination?.name);
  }

  #handleModelEvent = () => {
    const points = this.#pointModel.points;
    this.updateElement({
      sum: this.#calculateSum(points),
      cities: this.#calculateCities(points)
    });
  };

  _restoreHandlers(){ }

  get template() {
    return createEventInfoTemplate({
      sum: this._state?.sum || 0,
      cities: this._state?.cities || []
    });
  }
}
