// Случайное целое число из переданного диапазона:
const getRandomInteger = function (min, max) {
  if (min < 0 || max < 0) {
    return NaN;
  }

  if (max < min) {
    getRandomInteger(max, min);
  }

  if (max === min) {
    return max;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Проверка длины введённого комментария:
const compareLength = (string, maxLength) => [...string].length <= maxLength;
