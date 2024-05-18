import random from "../randomInt.js";
import readlineSync from "readline-sync";

const playEven = () => {
  const questionExpression = random(1, 15);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${questionExpression}`);
  const userAnswer = readlineSync.question("Your answer: ");
  let correctAnswer = "";
  if (questionExpression % 2 === 0) {
    correctAnswer = "yes";
  } else {
    correctAnswer = "no";
  }
  return [userAnswer, correctAnswer];
};
export default playEven;
