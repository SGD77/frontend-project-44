import readlineSync from 'readline-sync';
import random from '../../../../src/getRandom.js';

const playEven = () => {
  const questionExpression = random(1, 15);
  const promptline = `Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${questionExpression}`;
  const userAnswer = readlineSync.question('Your answer: ');
  let correctAnswer = '';
  if (questionExpression % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [userAnswer, correctAnswer];
};
export default playEven;
