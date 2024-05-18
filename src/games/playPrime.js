import readlineSync from 'readline-sync';
import random from '../randomInt.js';

const playPrime = () => {
  const isPrime = (num) => {
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    const sqrtNum = Math.sqrt(num);
    for (let i = 3; i <= sqrtNum; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };
  const questionExpression = random(2, 100);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  console.log(`Question: ${questionExpression}`);
  const userAnswer = readlineSync.question('Your answer: ');
  let correctAnswer = '';
  correctAnswer = isPrime(questionExpression) ? 'yes' : 'no';
  return [userAnswer, correctAnswer];
};
export default playPrime;
