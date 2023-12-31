const FilterType = {
  EVERYTHING: 'Everything',
  FUTURE: 'Future',
  PRESENT: 'Present',
  PAST: 'Past'
};

const SortType = {
  DAY: 'Day',
  EVENT: 'Event',
  TIME: 'Time',
  PRICE: 'Price',
  OFFERS: 'Offers'
};

const POINT__TYPE = [
  'Taxi',
  'Bus',
  'Train',
  'Ship',
  'Drive',
  'Flight',
  'Check-in',
  'Sightseeing',
  'Restaurant'
];

const DESTINATION = [
  'Paris',
  'Kyoto',
  'Venice',
  'Prague',
  'Cape Town',
  'Sydney',
  'Santorini',
  'Rio de Janeiro',
  'Quebec City',
  'Budapest'
];

const DATES_FROM = [
  '2024-07-10T08:15:23.456Z',
  '2019-07-12T14:34:12.123Z',
  '2024-07-15T17:55:00.000Z',
  '2019-07-18T22:23:45.678Z',
  '2024-07-22T09:10:56.789Z',
  '2019-07-24T02:55:23.123Z',
  '2019-07-28T12:34:56.789Z',
  '2019-07-30T18:45:34.123Z',
  '2024-08-02T20:15:45.678Z',
  '2019-08-05T21:25:56.789Z'
];

const DATES_TO = [
  '2019-09-10T08:15:23.456Z',
  '2019-09-12T14:34:12.123Z',
  '2019-09-15T17:55:00.000Z',
  '2019-09-18T22:23:45.678Z',
  '2019-09-22T09:10:56.789Z',
  '2019-09-24T02:55:23.123Z',
  '2019-09-28T12:34:56.789Z',
  '2019-09-30T18:45:34.123Z',
  '2019-11-02T20:15:45.678Z',
  '2019-11-05T21:25:56.789Z'
];

const CITY__DESCRIPTIONS = [
  'A bustling metropolis with a mix of modern skyscrapers and historic temples.',
  'A coastal city known for its picturesque harbors and vibrant nightlife.',
  'Nestled among mountains, this city boasts stunning views and serene parks.',
  'Famed for its canals, bridges, and artistic heritage.',
  'A city where ancient traditions meet cutting-edge technology.',
  'Home to grand monuments, wide boulevards, and charming cafés.',
  'Known for its vibrant street markets and a rich tapestry of cultures.',
  'A desert oasis with a skyline that reaches for the clouds.',
  'Steeped in history, offering cobblestone streets and quaint architecture.',
  'A city that never sleeps, always buzzing with energy and excitement.'
];

const PHOTO__DESCRIPTIONS = [
  'Sunlit city square',
  'Rainy alleyway',
  'Historic downtown',
  'Skyscraper silhouette',
  'Bustling marketplace',
  'Tranquil city park',
  'Glowing streetlights',
  'Iconic city bridge',
  'Cobblestone streets',
  'City skyline at dusk'
];

const TITLE = [
  'FastPass+',
  'VIP Lounge',
  'Free Refill',
  'Early Access',
  'Bonus Gift'
];

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
  IDLE: 'IDLE',
  ERROR: 'ERROR',
  UI_RESET: 'UI_RESET',
  LOAD_ERROR: 'LOAD_ERROR'
};

export {POINT__TYPE, DESTINATION, CITY__DESCRIPTIONS, PHOTO__DESCRIPTIONS, FilterType, SortType, TITLE, DATES_FROM, DATES_TO, UserAction, UpdateType};
