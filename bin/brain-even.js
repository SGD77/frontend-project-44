import checkAnswer from "../src/checkAnswer.js";
import askName from "../src/askName.js";
import askQuestion from "../src/askQuestion.js";

const name = askName();
let i = 0;
do {
  const [userAnswer, correctAnswer] = askQuestion();
  checkAnswer([userAnswer, correctAnswer], name);
  userAnswer === correctAnswer ? (i += 1) : (i += 0);
} while (i < 3);
