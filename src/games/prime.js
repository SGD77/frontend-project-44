import start from '../index.js';
import getRandomNumber from '../getRandom.js';

const isPrime = (num) => {
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  const sqrtNum = Math.sqrt(num);
  for (let i = 3; i <= sqrtNum; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const question = getRandomNumber(1, 99);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  start(condition, generateRound);
};
