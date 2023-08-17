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

export{getRandomElementFromArray, formatDateMonth, formatTime};
