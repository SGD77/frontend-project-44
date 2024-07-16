import game from '../index.js';
import getRandomNumber from '../getRandom.js';

const getRow = (startNum, step) => {
  const row = [];
  let rowNumber = startNum;
  for (let i = 0; i < 10; i += 1) {
    rowNumber += step;
    row.push(rowNumber);
  }
  return row.join(' ');
};

const step = getRandomNumber(1, 10);
const startNum = getRandomNumber(0, 9);
const indexToGuess = getRandomNumber(0, 9);
const row = getRow(startNum, step);
row[indexToGuess] = '..';

const condition = 'What number is missing in the progression?';

const generateRound = () => {
  const question = row;
  const correctAnswer = row[indexToGuess];
  return [question, correctAnswer];
};

export default () => {
  game(condition, generateRound);
};
