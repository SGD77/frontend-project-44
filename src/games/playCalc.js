import random from "../randomInt.js";
import readlineSync from "readline-sync";

const playCalc = () => {
  // math functions
  const add = (a, b) => (a + b);
  const substract = (a, b) => (a - b);
  const multiply = (a, b) => (a * b);
  // calc logic
  const functions = [multiply, add, substract];
  const signs = ["*", "+", "-"];
  const functionIndex = random(0, 2);
  const useFunction = functions[functionIndex];
  const sign = signs[functionIndex];
  let num1 = random(1, 9);
  let num2 = random(1, 9);
  if (num2 > num1) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }
  console.log("What is the result of the expression?");
  console.log(`Question: ${num1} ${sign} ${num2}`);
  const userAnswer = Number(readlineSync.question("Your answer: "));
  let correctAnswer = useFunction(num1, num2);
  return [userAnswer, correctAnswer];
};
export default playCalc;
