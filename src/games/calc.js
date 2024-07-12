import game from '../index.js';
import getCalcExpression from '../getCalcExpression.js';

const condition = 'What is the result of the expression?';

const getQuestionAndAnswer = () => getCalcExpression();

export default () => {
  game(condition, getQuestionAndAnswer);
};
