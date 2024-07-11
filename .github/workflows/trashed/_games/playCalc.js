import readlineSync from 'readline-sync';
import random from '../randomInt.js';

const playCalc = () => {
  // math functions
  const add = (a, b) => a + b;
  const substract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  // calc logic
  const functions = [multiply, add, substract];
  const operators = ['*', '+', '-'];
  const functionIndex = random(0, functions.length);
  const useFunction = functions[functionIndex];
  const operator = operators[functionIndex];
  let num1 = random(1, 9);
  let num2 = random(1, 9);
  if (num2 > num1) {
    const temp = num1;
    num1 = num2;
    num2 = temp;
  }
  console.log('What is the result of the expression?');
  console.log(`Question: ${num1} ${operator} ${num2}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  const correctAnswer = useFunction(num1, num2);
  return [userAnswer, correctAnswer];
};
export default playCalc;
