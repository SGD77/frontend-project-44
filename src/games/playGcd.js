import random from "../randomInt.js";
import readlineSync from "readline-sync";

const playGcd = () => {
  const num1 = random(1, 10);
  const num2 = random(1, 10);
  console.log("Find the greatest common divisor of given numbers.");
  console.log(`Question: ${num1} ${num2}`);
  const userAnswer = Number(readlineSync.question("Your answer: "));
  let correctAnswer = gcd(num1, num2);
  return [userAnswer, correctAnswer];
};
export default playGcd;
const gcd = (x, y) => {
  if (y === 0) {
    return x;
  }
  return gcd(y, x % y);
};
