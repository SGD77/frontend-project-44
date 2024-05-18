import readlineSync from 'readline-sync';
import random from '../randomInt.js';

const gcd = (x, y) => {
  if (y === 0) {
    return x;
  }
  return gcd(y, x % y);
};
const playGcd = () => {
  const num1 = random(1, 10);
  const num2 = random(1, 10);
  console.log('Find the greatest common divisor of given numbers.');
  console.log(`Question: ${num1} ${num2}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  const correctAnswer = gcd(num1, num2);
  return [userAnswer, correctAnswer];
};
export default playGcd;
