import random from "./randomInt.js";
import readlineSync from "readline-sync";

const playEven = () => {
  const questionNumber = random(1, 15);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${questionNumber}`);
  const userAnswer = readlineSync.question("Your answer: ");
  let correctAnswer = "";
  if (questionNumber % 2 === 0) {
    correctAnswer = "yes";
  } else {
    correctAnswer = "no";
  }
  return [userAnswer, correctAnswer];
};
export default playEven;
