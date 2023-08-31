import UniqueRandomGenerator, { getRandomElementFromArray } from '../utils.js';
import {POINT__TYPE, DESTINATION, CITY__DESCRIPTIONS, PHOTO__DESCRIPTIONS} from '../const.js';
import { nanoid } from 'nanoid';

const uniqueRandomGenerator = new UniqueRandomGenerator(1, 100);

const allDestinations = [
  {
    id: 11,
    description: getRandomElementFromArray(CITY__DESCRIPTIONS),
    name: getRandomElementFromArray(DESTINATION),
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${uniqueRandomGenerator.generate()}`,
        description: getRandomElementFromArray(PHOTO__DESCRIPTIONS)
      },
      {
        src: `https://loremflickr.com/248/152?random=${uniqueRandomGenerator.generate()}`,
        description: getRandomElementFromArray(PHOTO__DESCRIPTIONS)
      },
      {
        src: `https://loremflickr.com/248/152?random=${uniqueRandomGenerator.generate()}`,
        description: getRandomElementFromArray(PHOTO__DESCRIPTIONS)
      },
      {
        src: `https://loremflickr.com/248/152?random=${uniqueRandomGenerator.generate()}`,
        description: getRandomElementFromArray(PHOTO__DESCRIPTIONS)
      }
    ]
  },
  {
    id: 12,
    description: getRandomElementFromArray(CITY__DESCRIPTIONS),
    name: getRandomElementFromArray(DESTINATION),
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${uniqueRandomGenerator.generate()}`,
        description: getRandomElementFromArray(PHOTO__DESCRIPTIONS)
      },
      {
        src: `https://loremflickr.com/248/152?random=${uniqueRandomGenerator.generate()}`,
        description: getRandomElementFromArray(PHOTO__DESCRIPTIONS)
      },
      {
        src: `https://loremflickr.com/248/152?random=${uniqueRandomGenerator.generate()}`,
        description: getRandomElementFromArray(PHOTO__DESCRIPTIONS)
      },
      {
        src: `https://loremflickr.com/248/152?random=${uniqueRandomGenerator.generate()}`,
        description: getRandomElementFromArray(PHOTO__DESCRIPTIONS)
      },
      {
        src: `https://loremflickr.com/248/152?random=${uniqueRandomGenerator.generate()}`,
        description: getRandomElementFromArray(PHOTO__DESCRIPTIONS)
      }
    ]
  },
  {
    id: 13,
    description: getRandomElementFromArray(CITY__DESCRIPTIONS),
    name: getRandomElementFromArray(DESTINATION),
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${uniqueRandomGenerator.generate()}`,
        description: getRandomElementFromArray(PHOTO__DESCRIPTIONS)
      },
      {
        src: `https://loremflickr.com/248/152?random=${uniqueRandomGenerator.generate()}`,
        description: getRandomElementFromArray(PHOTO__DESCRIPTIONS)
      },
      {
        src: `https://loremflickr.com/248/152?random=${uniqueRandomGenerator.generate()}`,
        description: getRandomElementFromArray(PHOTO__DESCRIPTIONS)
      },
      {
        src: `https://loremflickr.com/248/152?random=${uniqueRandomGenerator.generate()}`,
        description: getRandomElementFromArray(PHOTO__DESCRIPTIONS)
      }
    ]
  },
  {
    id: 14,
    description: getRandomElementFromArray(CITY__DESCRIPTIONS),
    name: getRandomElementFromArray(DESTINATION),
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${uniqueRandomGenerator.generate()}`,
        description: getRandomElementFromArray(PHOTO__DESCRIPTIONS)
      },
      {
        src: `https://loremflickr.com/248/152?random=${uniqueRandomGenerator.generate()}`,
        description: getRandomElementFromArray(PHOTO__DESCRIPTIONS)
      },
      {
        src: `https://loremflickr.com/248/152?random=${uniqueRandomGenerator.generate()}`,
        description: getRandomElementFromArray(PHOTO__DESCRIPTIONS)
      },
      {
        src: `https://loremflickr.com/248/152?random=${uniqueRandomGenerator.generate()}`,
        description: getRandomElementFromArray(PHOTO__DESCRIPTIONS)
      },
      {
        src: `https://loremflickr.com/248/152?random=${uniqueRandomGenerator.generate()}`,
        description: getRandomElementFromArray(PHOTO__DESCRIPTIONS)
      }
    ]
  }

];

const allOffers = [
  {
    type: getRandomElementFromArray(POINT__TYPE),
    offers: [
      {
        id: 1,
        title: 'Upgrade 1',
        price: 120
      }]
  },
  {
    type: getRandomElementFromArray(POINT__TYPE),
    offers: [
      {
        id: 2,
        title: 'Upgrade 2',
        price: 220
      }]
  },
  {
    type: getRandomElementFromArray(POINT__TYPE),
    offers: [
      {
        id: 3,
        title: 'Upgrade 3',
        price: 320
      }]
  },
  {
    type: getRandomElementFromArray(POINT__TYPE),
    offers: [
      {
        id: 4,
        title: 'Upgrade 4',
        price: 420
      }]
  }
];

const points = [
  {
    id: uniqueRandomGenerator.generate(),
    basePrice: 1100,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo:  '2019-07-11T11:22:13.375Z',
    destination: 11,
    isFavorite: false,
    offers: [1, 2],
    type: getRandomElementFromArray(POINT__TYPE)
  },
  {
    id: uniqueRandomGenerator.generate(),
    basePrice: 2100,
    dateFrom: '2019-08-10T10:44:56.845Z',
    dateTo: '2019-08-11T11:44:13.375Z',
    destination: 12,
    isFavorite: true,
    offers: [2],
    type: getRandomElementFromArray(POINT__TYPE)
  },
  {
    id: uniqueRandomGenerator.generate(),
    basePrice: 3100,
    dateFrom: '2019-09-10T20:55:56.845Z',
    dateTo: '2019-09-11T11:22:15.375Z',
    destination: 13,
    isFavorite: false,
    offers: [3],
    type: getRandomElementFromArray(POINT__TYPE)
  },
  {
    id: uniqueRandomGenerator.generate(),
    basePrice: 4100,
    dateFrom: '2019-07-12T12:45:56.845Z',
    dateTo: '2019-07-13T11:12:33.375Z',
    destination: 14,
    isFavorite: false,
    offers: [4],
    type: getRandomElementFromArray(POINT__TYPE)
  }


];

function getPoints() {
  return points.map((el) => {
    el.offers = el.offers.map((id) => {
      for (const offerContainer of allOffers) {
        const foundOffer = offerContainer.offers.find((offer) => offer.id === id);
        if (foundOffer) {
          return foundOffer;
        }
      }
      return null;
    });
    el.destination = allDestinations.find((destination) => destination.id === el.destination);
    return el;
  });
}

const updatedPoints = getPoints();

function getRandomPoint(){
  return{
    ID: nanoid(),
    ...getRandomElementFromArray(updatedPoints)
  };
}

export {getRandomPoint, allOffers};

