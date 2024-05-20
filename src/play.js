const play = (game, name, rounds) => {
  let i = 0;
  while (i < rounds) {
    const [userAnswer, correctAnswer] = game();
    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`,
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
