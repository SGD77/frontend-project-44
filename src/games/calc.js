import game from '../index.js';
import getCalcExpression from '../getCalcExpression.js';

const condition = 'What is the result of the expression?';

const generateRound = () => getCalcExpression();

export default () => {
  game(condition, generateRound);
};
