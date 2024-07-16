import game from '../index.js';
import getRandomNumber from '../getRandom.js';
import isPrime from '../isPrime.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const question = getRandomNumber(1, 99);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  game(condition, generateRound);
};
