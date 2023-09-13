import AbstractView from '../framework/view/abstract-stateful-view.js';
import {formatDateMonth, formatTime, getDurationInMinutes, convertMinutesToHoursFormat} from '../utils.js';

function createEventItemTemplate(point) {
  const {price, destination, type, dateFrom, dateTo, isFavorite, offers} = point;
  const dateMonth = formatDateMonth(dateFrom);
  const timeFrom = formatTime(dateFrom);
  const timeTo = formatTime(dateTo);
  const durationMinutes = getDurationInMinutes(dateFrom, dateTo);
  const timeInterval = convertMinutesToHoursFormat(durationMinutes);
  const favoriteClass = isFavorite ? 'event__favorite-btn event__favorite-btn--active' : 'event__favorite-btn';
  const typeKey = type.toLowerCase();

  const offersGroup = offers.reduce((result, item) => {
    result += `<li class="event__offer">
    <span class="event__offer-title">${item.title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${item.price}</span>
    </li>`;
    return result;
  }, '');

  return (
    `<li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="2019-03-18">${dateMonth}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${typeKey}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${type} ${destination.name}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="2019-03-18T10:30">${timeFrom}</time>
            &mdash;
            <time class="event__end-time" datetime="2019-03-18T11:00">${timeTo}</time>
          </p>
          <p class="event__duration">${timeInterval}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${price}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${offersGroup}
        </ul>
        <button class="${favoriteClass}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
}

export default class EventItemView extends AbstractView{
  #handleOnClick = null;
  #point = null;
  #handleFavoriteClick = null;

  constructor({point, onClick, onFavoriteClick}){
    super();
    this.#point = point;
    this.#handleOnClick = onClick;
    this.#handleFavoriteClick = onFavoriteClick;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#clickHandler);
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favoriteClick);
  }

  get template() {
    return createEventItemTemplate(this.#point);
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this.#handleOnClick();
  };

  #favoriteClick = (evt) => {
    evt.preventDefault();
    this.#handleFavoriteClick();
  };
}
