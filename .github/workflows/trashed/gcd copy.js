/* eslint-disable linebreak-style */
import game from '../../../src/index.js';
import getRandomNumber from '../../../src/getRandom.js';
import getGcd from '../../../src/getGcd.js';

const condition = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2);
  return [question, correctAnswer];
};

export default () => {
  game(condition, getQuestionAndAnswer);
};
