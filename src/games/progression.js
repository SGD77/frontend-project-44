import start from '../index.js';
import getRandomNumber from '../getRandom.js';

const getRow = (startNum, step, length = 10) => {
  const row = [];
  let rowNumber = startNum;
  for (let i = 0; i < length; i += 1) {
    rowNumber += step;
    row.push(rowNumber);
  }
  return row.join(' ');
};

const hideAnswer = (row, index) => {
  const arr = row.split(' ');
  const correctAnswer = arr[index];
  arr[index] = '..';
  const newRow = arr.join(' ');
  return [newRow, correctAnswer];
};

const condition = 'What number is missing in the progression?';

const generateRound = () => {
  const startNum = getRandomNumber(0, 9);
  const step = getRandomNumber(1, 10);
  const indexToGuess = getRandomNumber(0, getRow(startNum, step).split(' ').length);
  return hideAnswer(getRow(startNum, step), indexToGuess);
};

export default () => {
  start(condition, generateRound);
};
