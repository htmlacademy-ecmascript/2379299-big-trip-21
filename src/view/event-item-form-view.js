import { POINT__TYPE, DESTINATION } from '../const.js';
import AbstractView from '../framework/view/abstract-stateful-view.js';
import {convertToCustomFormat} from '../utils.js';
import {allOffers} from '../mock/point.js';

const DEFAULT__POINT = {
  basePrice: 1100,
  dateFrom: '2019-07-10T22:55:56.845Z',
  dateTo:  '2019-07-11T11:22:13.375Z',
  destination: 11,
  isFavorite: false,
  offers: [1],
  type: 'taxi'
};

function createFormTemplate(point) {
  const{destination, type, dateFrom, dateTo, basePrice, offers} = point;
  const timeFrom = convertToCustomFormat(dateFrom);
  const timeTo = convertToCustomFormat(dateTo);

  const currentDestinationPictures = destination.pictures.reduce((result, item) => {
    const {src, description} = item;
    result += `<img class="event__photo" src="${src}" alt="${description}">`;
    return result;
  }, '');

  const typeGroupHTML = POINT__TYPE.reduce((result, item) => {
    const itemKey = item.toLowerCase();
    result += `<div class="event__type-item">
      <input id="event-type-${itemKey}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${itemKey}"${item === type ? 'checked' : ''} >
      <label class="event__type-label  event__type-label--${itemKey}" for="event-type-${itemKey}-1">${item}</label>
      </div>`;
    return result;
  }, '');

  const destinationGroupHTML = DESTINATION.reduce((result, item) => {
    result += `<option value="${item}"></option>`;
    return result;
  }, '');
  function createEventOffersGroup(currentOffers){
    const offersGroup = allOffers.reduce((result, item) => {
      item.offers.forEach((offer) => {
        const { title, price } = offer;
        const titleKey = title.toLowerCase();
        const currentOffer = currentOffers.find((el)=> el.title === title);
        result += `<div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${titleKey}-1" type="checkbox" name="event-offer-${titleKey}" ${currentOffer ? 'checked' : ''}>
        <label class="event__offer-label" for="event-offer-${titleKey}-1">
          <span class="event__offer-title">${title}class</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${price}</span>
        </label>
      </div>`;
      });
      return result;
    }, '');

    return offersGroup;
  }

  const offersGroupHTML = createEventOffersGroup(offers);

  return (
    `<li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${typeGroupHTML}


              </fieldset>
            </div>
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${type}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination.name}" list="destination-list-1">
            <datalist id="destination-list-1">
            ${destinationGroupHTML}
            </datalist>
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${timeFrom}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${timeTo}">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Cancel</button>
        </header>
        <section class="event__details">
          <section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>

            <div class="event__available-offers">
            ${offersGroupHTML}
            </div>
          </section>


          <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">${destination.name}</h3>
          <p class="event__destination-description">${destination.description}</p>

          <div class="event__photos-container">
            <div class="event__photos-tape">
              ${currentDestinationPictures}
            </div>
          </div>
        </section>


        </section>
      </form>
    </li>`
  );
}

export default class ListFormView extends AbstractView{
  #point = null;
  constructor({point = DEFAULT__POINT}){
    super();
    this.#point = point;
  }

  get template() {
    return createFormTemplate(this.#point);
  }
}

