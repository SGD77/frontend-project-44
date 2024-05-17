import random from "../randomInt.js";
import readlineSync from "readline-sync";

const playProgress = () => {
  const row = [];
  const step = random(1, 10);
  let numStart = random(0, 9);
  const indexToGuess = random(0, 9);
  let i = 0;
  while (i < 10) {
    i += 1;
    numStart += step;
    row.push(numStart);
  }
  let correctAnswer = row[indexToGuess];
  row[indexToGuess] = "..";
  console.log("What number is missing in the progression?");
  console.log(`Question: ${row.join(" ")}`);
  const userAnswer = Number(readlineSync.question("Your answer: "));
  return [userAnswer, correctAnswer];
};
export default playProgress;
