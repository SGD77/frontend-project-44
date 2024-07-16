import game from '../index.js';
import getRandomNumber from '../getRandom.js';

const getCalcExpression = () => {
  let num1 = getRandomNumber(1, 10);
  let num2 = getRandomNumber(1, 10);
  if (num1 < num2) {
    [num1, num2] = [num2, num1];
  }
  const operatorIndex = getRandomNumber(0, 2);

  const getOperator = (index) => {
    let operator = '';
    let correctAnswer;
    switch (index) {
      case 0:
        operator = '*';
        correctAnswer = num1 * num2;
        break;
      case 1:
        operator = '+';
        correctAnswer = num1 + num2;
        break;
      case 2:
        operator = '-';
        correctAnswer = num1 - num2;
        break;
      default:
        throw new Error(`Unknown operator index: '${index}'!`);
    }
    return [operator, correctAnswer];
  };
  const [operator, correctAnswer] = getOperator(operatorIndex);
  const question = `${num1} ${operator} ${num2}`;
  return [question, correctAnswer.toString()];
};

const condition = 'What is the result of the expression?';

const generateRound = () => getCalcExpression();

export default () => {
  game(condition, generateRound);
};
