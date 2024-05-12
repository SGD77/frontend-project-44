import askQuestion from "./askQuestion.js";

const checkAnswer = ([userAnswer, correctAnswer], name) => {
  if (userAnswer === correctAnswer) {
    console.log("Correct!");
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n
Let's try again, ${name}`);
    askQuestion();
  }
};
export default checkAnswer;
