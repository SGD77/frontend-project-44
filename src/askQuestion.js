import check from '../src/checkAnswer.js';
import random from '../src/randomInt.js';
import readlineSync from 'readline-sync';

const askQuestion = () => {
    // NAME INPUT
    console.log(`Welcome to the Brain Games!`)
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    // QUESTION
    let i = 0; // correct answer counter
    do {
        const questionNumber = random(1, 15);
        console.log('Answer "yes" if the number is even, otherwise answer "no".');
        console.log(`Question: ${questionNumber}`);
        const userAnswer = readlineSync.question('Your answer: ');
        let correctAnswer = '';
        if (questionNumber % 2 === 0) {
            correctAnswer = 'yes';
        } else {
            correctAnswer = 'no'
        };
        userAnswer === correctAnswer ? i += 1 : i += 0;
        check(userAnswer, correctAnswer, name);
    } while (i < 3); // 3 correct answers to stop
};
askQuestion();
export default askQuestion