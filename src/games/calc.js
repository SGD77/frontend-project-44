import start from '../index.js';
import getRandomNumber from '../getRandom.js';

const generateCalcExpression = () => {
  let num1 = getRandomNumber(1, 10);
  let num2 = getRandomNumber(1, 10);
  if (num1 < num2) {
    [num1, num2] = [num2, num1];
  }

  const operators = [
    { symbol: '*', operation: (a, b) => a * b },
    { symbol: '+', operation: (a, b) => a + b },
    { symbol: '-', operation: (a, b) => a - b },
  ];

  const operatorIndex = getRandomNumber(0, operators.length - 1);
  const operator = operators[operatorIndex];

  const question = `${num1} ${operator.symbol} ${num2}`;
  const correctAnswer = operator.operation(num1, num2).toString();

  return [question, correctAnswer];
};

const condition = 'What is the result of the expression?';

const generateRound = () => generateCalcExpression();

export default () => {
  start(condition, generateRound);
};
