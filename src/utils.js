import dayjs from 'dayjs';
import {FilterType} from './const';

const TIME_FORMAT = 'HH:mm';
export default class UniqueRandomGenerator {
  constructor(min, max) {
    this.min = min;
    this.max = max;
    this.generatedNumbers = new Set();
  }

  generate() {
    if (this.generatedNumbers.size === (this.max - this.min + 1)) {
      throw new Error('All numbers in the range have been generated');
    }

    let number;
    do {
      number = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    } while (this.generatedNumbers.has(number));

    this.generatedNumbers.add(number);
    return number;
  }
}

function getRandomElement(elements) {
  const shuffled = elements.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, Math.random() > 0.5 ? 2 : 3);
  return selected.join(', ');
}
function getRandomElementFromArray(elements) {
  const randomIndex = Math.floor(Math.random() * elements.length);
  return elements[randomIndex];
}

function formatDateMonth(dueDate) {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const day = dueDate.getDate();
  const month = months[dueDate.getMonth()];

  return `${day} ${month}`;
}

function formatTime(dueDate) {
  return dueDate ? dayjs(dueDate).format(TIME_FORMAT) : '';
}

function getDurationInMinutes(startTime, endTime) {
  return dayjs(endTime).diff(dayjs(startTime), 'minute');
}

function padZero(value) {
  return value < 10 ? `0${value}` : value;
}

function convertMinutesToHoursFormat(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${padZero(hours)}H ${padZero(minutes)}M`;
}

function convertToCustomFormat(isoDate, format = 'DD/MM/YYYY HH:mm') {
  if (isoDate === ''){
    return '';
  }

  const date = dayjs(isoDate);

  const formattedDate = date.format(format);

  return formattedDate;
}

function getWeightForNullDate(dateA, dateB) {
  if (!dateA && !dateB) {
    return 0;
  }

  if (!dateA) {
    return 1;
  }

  if (!dateB) {
    return -1;
  }

  return null;
}

function sortDay(pointA, pointB) {
  const weight = getWeightForNullDate(pointA.dateFrom, pointB.dateFrom);

  return weight ?? dayjs(pointA.dateFrom).diff(dayjs(pointB.dateFrom));
}

function sortTime(pointA, pointB) {
  const durationMinutesA = getDurationInMinutes(pointA.dateFrom, pointA.dateTo);
  const durationMinutesB = getDurationInMinutes(pointB.dateFrom, pointB.dateTo);
  return durationMinutesB - durationMinutesA;
}

function sortPrice(pointA, pointB) {
  return pointB.price - pointA.price;
}

function isDatesEqual(dateA, dateB) {
  return (dateA === null && dateB === null) || dayjs(dateA).isSame(dateB);
}

function filter(filterType, pointModel) {
  const currentDate = (new Date());
  switch (filterType) {
    case FilterType.FUTURE:
      return pointModel.points.filter((point) => (new Date(point.dateFrom)) > currentDate);
    case FilterType.PRESENT:
      return pointModel.points.filter((point) => currentDate === new Date(point.dateFrom));
    case FilterType.PAST:
      return pointModel.points.filter((point)=> new Date(point.dateFrom) < currentDate);
    case FilterType.EVERYTHING:
    default:
      return pointModel.points;
  }
}
export{getRandomElementFromArray, formatDateMonth, formatTime, getDurationInMinutes, padZero, convertMinutesToHoursFormat, convertToCustomFormat, sortDay, sortTime, sortPrice, getRandomElement, isDatesEqual, filter};

