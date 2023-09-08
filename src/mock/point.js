import UniqueRandomGenerator, { getRandomElementFromArray } from '../utils.js';
import {POINT__TYPE, DESTINATION, CITY__DESCRIPTIONS, PHOTO__DESCRIPTIONS, TITLE} from '../const.js';
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


const generateOffer = (id) =>(
  {
    id: id,
    title: getRandomElementFromArray(TITLE),
    price: uniqueRandomGenerator.generate()
  });


const generateAllOffers = (allType) =>(
  allType.map((currentType) => ({
    type: currentType,
    offers: Array.from({ length: 5 }, (_value, index) => generateOffer(index + 1))
  }))
);


const allOffers = generateAllOffers (POINT__TYPE);

// const allOffers = [
//   {
//     type: taxi
//     offers: [
//       {
//         id: 1,
//         title: getRandomElementFromArray(TITLE),
//         price: uniqueRandomGenerator.generate()
//       },
//       {
//         id: 2,
//         title: getRandomElementFromArray(TITLE),
//         price: uniqueRandomGenerator.generate()
//       },
//       {
//         id: 3,
//         title: getRandomElementFromArray(TITLE),
//         price: uniqueRandomGenerator.generate()
//       },
//       {
//         id: 4,
//         title: getRandomElementFromArray(TITLE),
//         price: uniqueRandomGenerator.generate()
//       },
//       {
//         id: 5,
//         title: getRandomElementFromArray(TITLE),
//         price: uniqueRandomGenerator.generate()
//       }]
//   }
// ];

const points = [
  {
    id: uniqueRandomGenerator.generate(),
    basePrice: 1100,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo:  '2019-07-11T11:22:13.375Z',
    destination: 11,
    isFavorite: false,
    offers: [1],
    type: getRandomElementFromArray(POINT__TYPE)
  },
  {
    id: uniqueRandomGenerator.generate(),
    basePrice: 2100,
    dateFrom: '2019-08-10T10:44:56.845Z',
    dateTo: '2019-08-11T11:44:13.375Z',
    destination: 12,
    isFavorite: true,
    offers: [2,3],
    type: getRandomElementFromArray(POINT__TYPE)
  },
  {
    id: uniqueRandomGenerator.generate(),
    basePrice: 3100,
    dateFrom: '2019-09-10T20:55:56.845Z',
    dateTo: '2019-09-11T11:22:15.375Z',
    destination: 13,
    isFavorite: false,
    offers: [4,1,5],
    type: getRandomElementFromArray(POINT__TYPE)
  },
  {
    id: uniqueRandomGenerator.generate(),
    basePrice: 4100,
    dateFrom: '2019-07-12T12:45:56.845Z',
    dateTo: '2019-07-13T11:12:33.375Z',
    destination: 14,
    isFavorite: false,
    offers: [5,3,2],
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

