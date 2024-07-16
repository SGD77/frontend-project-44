import game from '../index.js';
import getRandomNumber from '../getRandom.js';

const isEven = (num) => num % 2 === 0;

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const question = getRandomNumber(1, 15);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  game(condition, generateRound);
};
