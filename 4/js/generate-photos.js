import {getRandomInteger, getRandomArrayElement, checkStringLength} from './util.js';
import {ITEMS_AMOUNT, DESCRIPTIONS, LIKES_AMOUNT, COMMENTS_AMOUNT} from './data.js';

//Создание объекта:
const generatePhoto = (index) => ({
  id: index + 1,
  url:`photos/${index + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_AMOUNT.min, LIKES_AMOUNT.max),
  comments: getRandomInteger(COMMENTS_AMOUNT.min, COMMENTS_AMOUNT.max)
});
//Создание массива с объектами:
const generatedPhotos = Array.from({
  length: ITEMS_AMOUNT
}, (value, index) => generatePhoto(index));

export {generatedPhotos};
