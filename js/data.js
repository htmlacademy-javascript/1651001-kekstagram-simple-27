import {getRandomInteger, getRandomArrayElement} from './util.js';

const ITEMS_AMOUNT = 25;
const DESCRIPTIONS = [
  'According to all known laws of aviation',
  'There is no way a bee should be able to fly',
  'It\'s wings are too small to get its fat little body off the ground',
  'The bee, of course, flies anyway',
  'Because bees don\'t care what humans think is impossible',
  'Yellow, black. Yellow, black',
  'Ooh, black and yellow!',
  'Let\'s shake it up a little.'
];
const MIN_DESCR_LENGTH = 20;
const MAX_DESCR_LENGTH = 140;

const LIKES_AMOUNT = {
  min: 15,
  max: 200
};
const COMMENTS_AMOUNT = {
  min: 0,
  max: 200
};
//Создание объекта:
const generatePhoto = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_AMOUNT.min, LIKES_AMOUNT.max),
  comments: getRandomInteger(COMMENTS_AMOUNT.min, COMMENTS_AMOUNT.max)
});
//Создание массива с объектами:
const generatedPhotos = Array.from({
  length: ITEMS_AMOUNT
}, (_value, index) => generatePhoto(index));

//Настройки фильтов:
const EFFECTS = [
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
];

export {generatedPhotos, MAX_DESCR_LENGTH, MIN_DESCR_LENGTH, EFFECTS};
