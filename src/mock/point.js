import UniqueRandomGenerator, { getRandomElementFromArray} from '../utils.js';
import {POINT__TYPE, DESTINATION, CITY__DESCRIPTIONS, PHOTO__DESCRIPTIONS, TITLE, DATES_FROM, DATES_TO} from '../const.js';

const uniqueRandomGenerator = new UniqueRandomGenerator(1, 10000);



const generatePictures = () =>(
  {
    src: `https://loremflickr.com/248/152?random=${uniqueRandomGenerator.generate()}`,
    description: getRandomElementFromArray(PHOTO__DESCRIPTIONS)
  });

const generateAllDestinations = (destinations) =>(
  destinations.map((currentDestinations, id) => ({
    id: id + 1,
    description: getRandomElementFromArray(CITY__DESCRIPTIONS),
    name: currentDestinations,
    pictures: Array.from({ length: 4 }, () => generatePictures())
  }))
);

const allDestinations = generateAllDestinations(DESTINATION);


const generateOfferrrrrrrrrrr = () =>(
  TITLE.map((currentOffer) => ({
    id: uniqueRandomGenerator.generate(),
    title: currentOffer,
    price: uniqueRandomGenerator.generate()
  }))
);

const allOfferssssssssssss = generateOfferrrrrrrrrrr(POINT__TYPE);


const generateAllOffers = (allType) => {
  return allType.map((currentType) => {
    const count = Math.floor(Math.random() * (allOfferssssssssssss.length + 1));
    const selectedOfferssssss = allOfferssssssssssss.slice(0, count);
    return {
      type: currentType,
      offers: selectedOfferssssss
    };
  });
};




// const generateAllOffers = (allType) =>(
//   allType.map((currentType) => ({
//     type: currentType,
//     offers: selectedOfferssssss
//   }))
// );


const allOffers = generateAllOffers (POINT__TYPE); //все оферсы с типами

function getCurrentOffers(type) {
  const currentOffer = allOffers.find((el) => el.type === type);
  return currentOffer;
}

const getPoint = () => {
  const activeType = getRandomElementFromArray(POINT__TYPE);
  const allOffersType = getCurrentOffers(activeType);

  return({
    id: uniqueRandomGenerator.generate(),
    price: uniqueRandomGenerator.generate(),
    dateFrom: getRandomElementFromArray(DATES_FROM),
    dateTo:  getRandomElementFromArray(DATES_TO),
    destination: getRandomElementFromArray(allDestinations),
    isFavorite: false,
    offers:allOffersType ,
    type: activeType
  });
};
 console.log( 5555555555555555555555, allOfferssssssssssss)
export {getPoint, allOffers, allDestinations, allOfferssssssssssss};

