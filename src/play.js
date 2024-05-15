const play = (game, name, rounds) => {
  let i = 0;
  while (i < rounds) {
    const [userAnswer, correctAnswer] = game();
    if (userAnswer === correctAnswer) {
      i += 1;
      console.log("Correct!");
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n
Let's try again, ${name}`);
      return;
    }
  }
};
export default play;
