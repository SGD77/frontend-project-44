import getRandomNumber from './getRandom.js';

export default () => {
  let num1 = getRandomNumber(1, 10);
  let num2 = getRandomNumber(1, 10);
  if (num1 < num2) {
    [num1, num2] = [num2, num1];
  }
  let operator = '';
  let correctAnswer;
  const operatorIndex = getRandomNumber(0, 2);
  switch (operatorIndex) {
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
      break;
  }
  const question = `${num1} ${operator} ${num2}`;
  return [question, correctAnswer];
};
