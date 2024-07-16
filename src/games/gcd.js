import game from '../index.js';
import getRandomNumber from '../getRandom.js';

const getGcd = (x, y) => {
  if (y === 0) {
    return x;
  }
  return getGcd(y, x % y);
};

const condition = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2);
  return [question, correctAnswer];
};

export default () => {
  game(condition, generateRound);
};
