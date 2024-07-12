import game from '../index.js';
import getRandomNumber from '../getRandom.js';
import isEven from '../isEven.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 15);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  game(condition, getQuestionAndAnswer);
};
