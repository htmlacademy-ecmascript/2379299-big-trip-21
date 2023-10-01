import { POINT__TYPE, DESTINATION } from '../const.js';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import {convertToCustomFormat} from '../utils.js';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import he from 'he';

const Mode = {
  CREATE: 'Cancel',
  EDIT: 'Delete'
};

const DEFAULT__POINT = {
  id: null,
  price: 0,
  dateFrom: '2019-07-10T22:55:56.845Z',
  dateTo:  '2019-07-11T11:22:13.375Z',
  destination: null,
  type: 'taxi',
  offers: []
};

function createFormTemplate(point, allOffers, allDestinations) {
  const{destination, type, dateFrom, dateTo, price, offers, id} = point;
  const timeFrom = convertToCustomFormat(dateFrom);
  const timeTo = convertToCustomFormat(dateTo);
  const typeKey = type.toLowerCase();
  let currentDestinationPictures = '';
  if (destination){
    currentDestinationPictures = destination.pictures.reduce((result, item) => {
      const {src, description} = item;
      result += `<img class="event__photo" src="${src}" alt="${description}">`;
      return result;
    }, '');
  }

  const HTMLGroup = POINT__TYPE.reduce((result, item) => {
    const itemKey = item.toLowerCase();
    result += `<div class="event__type-item">
      <input id="event-type-${itemKey}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${itemKey}"${item === type ? 'checked' : ''} >
      <label class="event__type-label  event__type-label--${itemKey}" for="event-type-${itemKey}-1">${item}</label>
      </div>`;
    return result;
  }, '');

  const destinationGroupHTML = allDestinations.reduce((result, item) => {
    result += `<option value="${item.name}"></option>`;
    return result;
  }, '');

  function getCurrentOffers(offerType) {
    return allOffers.find((el) => el.type === offerType.toLowerCase());
  }

  function createEventOffersGroup(pointOffers){
    const offersGroup = getCurrentOffers(type).offers.reduce((result, offerItem) => {
      const isActive = pointOffers.find((el) => el.id === offerItem.id) !== undefined;
      const titleKey = offerItem.title.toLowerCase();
      result += `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${titleKey}-1" type="checkbox" data-offer="${offerItem.id}" name="event-offer-${titleKey}" ${(isActive) ? 'checked' : ''}>
      <label class="event__offer-label" for="event-offer-${titleKey}-1">
        <span class="event__offer-title">${offerItem.title}class</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offerItem.price}</span>
      </label>
    </div>`;

      return result;
    }, '');

    return offersGroup;
  }

  const offersGroupHTML = createEventOffersGroup(offers);

  function openClouseEvent(idPoint){
    if (!idPoint){
      return`
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>`;
    }
  }
  return (
    `<li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="/img/icons/${typeKey}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${HTMLGroup}

              </fieldset>
            </div>
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${type}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination?.name || ''}" list="destination-list-1">
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
            <input class="event__input  event__input--price" id="event-price-1" type="number" name="event-price" value="${ Number(price) }">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">${!id ? Mode.CREATE : Mode.EDIT }</button>
          ${openClouseEvent()}
        </header>
        <section class="event__details">
          <section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>

            <div class="event__available-offers">
            ${offersGroupHTML}
            </div>
          </section>


        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">${destination ? destination.name : ''}</h3>
          <p class="event__destination-description">${destination ? destination.description : ''}</p>

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
export default class ListFormView extends AbstractStatefulView{
  #handleOnFormSubmit = null;
  #handleOnClick = null;
  #datepickerFrom = null;
  #datepickerTo = null;
  #handleOnClickDelete = null;
  #offers = [];
  #destinations = [];

  constructor({
    point = DEFAULT__POINT, onClickButton, onFormSubmit, onClickDelete,
    offers, destinations
  }){
    super();
    this.#offers = offers;
    this.#destinations = destinations;

    this._setState(ListFormView.parseTaskToState(point));
    this.#handleOnFormSubmit = onFormSubmit;
    this.#handleOnClick = onClickButton;
    this.#handleOnClickDelete = onClickDelete;

    this._restoreHandlers();
  }

  get template() {
    return createFormTemplate(this._state, this.#offers, this.#destinations);
  }

  _restoreHandlers = () => {
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#clickHandler);
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandle);
    this.element.querySelector('.event__input--price').addEventListener('input', this.#priceInputHandler);
    this.element.querySelector('.event__type-wrapper').addEventListener('click', this.#typePointChangeHandler);
    this.element.querySelector('.event__input--destination').addEventListener('input', this.#destinationChangeHandler);
    this.#setDatepicker();
    this.element.querySelector('.event__reset-btn').addEventListener('click', this.#ClickDeleteHandler);
    this.element.querySelector('.event__available-offers').addEventListener('change', this.#offerChangeHandler);
  };

  #formSubmitHandle = (evt) => {
    evt.preventDefault();
    this.#handleOnFormSubmit(ListFormView.parseStateToTask(this._state));
  };

  #clickHandler = (evt) => {
    evt.preventDefault();
    this.#handleOnClick();
  };

  static parseTaskToState(point){
    return {...point};
  }

  static parseStateToTask(state) {
    return {...state};
  }

  #priceInputHandler = (evt) => {
    this._setState({
      price: evt.target.value,
    });
  };

  #typePointChangeHandler = (evt) => {
    if (evt.target.classList.contains('event__type-label')) {
      const updatedState = {
        type: evt.target.textContent.toLowerCase(),
        offers: []
      };

      this.updateElement(updatedState);
    }
  };

  #destinationChangeHandler = (evt) => {
    const currentDestination = this.#destinations.find((destination) => destination.name === evt.target.value);
    // console.log('destinationChangeHandler', evt.target.value, currentDestination, this.#destinations);

    if(!currentDestination){
      return;
    }
    const updatedState = {
      destination: currentDestination
    };
    this.updateElement(updatedState);
  };

  #offerChangeHandler = () => {
    const checkedOffers = Array.from(this.element.querySelectorAll('.event__offer-checkbox:checked'));
    const curentOffers = checkedOffers.map((item) => item.dataset.offer);
    const getAllOffersByType = this.#offers.find((item) => this._state.type === item.type);
    const selectedOffers = curentOffers.map((offerId) => getAllOffersByType.offers.find((offer) => offer.id === offerId));

    this._setState({
      ...this._state.point,
      offers: selectedOffers
    });
  };

  removeElement() {
    super.removeElement();

    if (this.#datepickerFrom) {
      this.#datepickerFrom.destroy();
      this.#datepickerFrom = null;
    }

    if (this.#datepickerTo) {
      this.#datepickerTo.destroy();
      this.#datepickerTo = null;
    }
  }

  #setDatepicker = () => {
    const dateFromElement = this.element.querySelector('.event__input--time[name="event-start-time"]');
    const dateToElement = this.element.querySelector('.event__input--time[name="event-end-time"]');
    const flatpickrConfig = {
      dateFormat: 'd/m/Y H:i',
      enableTime: true,
      locale: {
        firstDayOfWeek: 1,
      },
      'time_24hr': true,
    };

    this.#datepickerFrom = flatpickr(
      dateFromElement, {
        ...flatpickrConfig,
        defaultDate: this._state.dateFrom,
        onClose: this.#dateFromCloseHandler,
        maxDate: this._state.dateTo
      }
    );

    this.#datepickerTo = flatpickr(
      dateToElement, {
        ...flatpickrConfig,
        defaultDate: this._state.dateTo,
        onClose: this.#dateToCloseHandler,
        minDate: this._state.dateFrom
      }
    );
  };

  #dateFromCloseHandler = ([userDate]) => {
    this._setState({
      dateFrom: userDate,
    });
    this.#datepickerTo.set('minDate', this._state.dateFrom);
  };

  #dateToCloseHandler = ([userDate]) => {
    this._setState({
      dateTo: userDate
    });
    this.#datepickerFrom.set('maxDate', this._state.dateTo);
  };

  #ClickDeleteHandler = (evt) => {
    evt.preventDefault();
    this.#handleOnClickDelete(ListFormView.parseStateToTask(this._state));
  };

}

export {DEFAULT__POINT};
