import greeting from '../../../src/cli.js';

const play = (game) => {
  const roundsCount = 3;
  // GREETING
  const name = greeting();
  // PROMPT
  // QUESTION
  // READLINE
  // ANSWER CHECK
  // OUTRO

  let i = 0;
  while (i < roundsCount) {
    const [userAnswer, correctAnswer] = game();
    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`
      );
      return;
    }
    i += 1;
    console.log('Correct!');
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
export default play;
