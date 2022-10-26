//Случайное целое число в диапазоне:
const getRandomInteger = function (min, max) {
  if (min < 0 || max < 0) {
    return NaN;
  }
  else if (max < min) {
    getRandomInteger(max, min);
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};
//Случайный элемент массива:
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
//Проверка длины строки:
const checkStringLength = (string, Length) => string.length <= Length;
//console.log(checkStringLength('What happened to Gul\'dan after Illidan took his cane? He fell.', 69));

export {getRandomInteger, getRandomArrayElement, checkStringLength};
