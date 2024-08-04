import start from '../index.js';
import getRandomNumber from '../getRandom.js';

const generateProgression = (startNum, step, length = 10) => {
  const row = [];
  for (let i = 0; i < length; i += 1) {
    row.push(startNum + step * i);
  }
  return row;
};

const generateConditionRow = (row, index) => {
  const arr = [...row];
  arr[index] = '..';
  return arr.join(' ');
};

const getCorrectAnswer = (row, index) => String(row[index]);

const condition = 'What number is missing in the progression?';

const generateRound = () => {
  const startNum = getRandomNumber(0, 9);
  const step = getRandomNumber(1, 10);
  const progression = generateProgression(startNum, step);
  const indexToGuess = getRandomNumber(0, progression.length - 1);
  const conditionRow = generateConditionRow(progression, indexToGuess);
  const correctAnswer = getCorrectAnswer(progression, indexToGuess);
  return [conditionRow, correctAnswer];
};

export default () => {
  start(condition, generateRound);
};
