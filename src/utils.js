import dayjs from 'dayjs';

const DATE_MONTH_FORMAT = 'D MMMM';
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

function getRandomElementFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function formatDateMonth(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_MONTH_FORMAT) : '';
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

function convertToCustomFormat(isoDate) {
  const date = dayjs(isoDate);

  const formattedDate = date.format('DD/MM/YY HH:mm');

  return formattedDate;
}

export{getRandomElementFromArray, formatDateMonth, formatTime, getDurationInMinutes, padZero, convertMinutesToHoursFormat, convertToCustomFormat};
