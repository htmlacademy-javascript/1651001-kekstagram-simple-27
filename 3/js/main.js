// Случайное целое число из переданного диапазона:
const getRandomInteger = function (min, max) {
  if (min < 0 || max < 0) {
    return NaN;
  }
  else if (max < min) {
    getRandomInteger(max, min);
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// Проверка длины введённого комментария:
const checkStringLength = (string, Length) => string.length <= Length;
checkStringLength('What happened to Gul\'dan after Illidan took his cane? He fell.', 69);
// 4 модуль:
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
const ITEMS_AMOUNT = 25;
const DESCRIPTIONS = [
  'According to all known laws of aviation',
  'There is no way a bee should be able to fly',
  'Its wings are too small to get its fat little body off the ground',
  'The bee, of course, flies anyway',
  'Because bees don\'t care what humans think is impossible',
  'Yellow, black. Yellow, black',
  'Ooh, black and yellow!',
  'Let\'s shake it up a little.'
];
const LIKES_AMOUNT = {
  min: 15,
  max: 200
};
const COMMENTS_AMOUNT = {
  min: 0,
  max: 200
};
const generatePhoto = (index) => ({
  id: index,
  url:`photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_AMOUNT.min, LIKES_AMOUNT.max),
  comments: getRandomInteger(COMMENTS_AMOUNT.min, COMMENTS_AMOUNT.max)
});
const generatePhotos = Array.from({
  length: ITEMS_AMOUNT
}, (a, b) => generatePhoto(b));
console.log(generatePhotos);
