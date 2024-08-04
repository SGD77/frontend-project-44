import start from '../index.js';
import getRandomNumber from '../getRandom.js';

const generateProgression = (startNum, step, length = 10) => {
  const row = [];
  let rowNumber = startNum;
  for (let i = 0; i < length; i += 1) {
    rowNumber += step;
    row.push(rowNumber);
  }
  return row;
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
  const indexToGuess = getRandomNumber(0, generateProgression(startNum, step).split(' ').length);
  return hideAnswer(generateProgression(startNum, step), indexToGuess);
};

export default () => {
  start(condition, generateRound);
};
