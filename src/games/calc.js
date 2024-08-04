import start from '../index.js';
import getRandomNumber from '../getRandom.js';

const getCalcExpression = () => {
  let num1 = getRandomNumber(1, 10);
  let num2 = getRandomNumber(1, 10);
  if (num1 < num2) {
    [num1, num2] = [num2, num1];
  }

  const operators = {
    multiply: '*',
    add: '+',
    substract: '-',
  };

  const operatorIndex = getRandomNumber(1, Object.keys(operators).length);

  const getOperator = (index) => {
    let operator = '';
    let correctAnswer;
    switch (index) {
      case 1:
        operator = '*';
        correctAnswer = num1 * num2;
        break;
      case 2:
        operator = '+';
        correctAnswer = num1 + num2;
        break;
      case 3:
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
  start(condition, generateRound);
};
