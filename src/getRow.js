import getRandomNumber from './getRandom.js';

export default () => {
  const row = [];
  const step = getRandomNumber(1, 10);
  let numStart = getRandomNumber(0, 9);
  const indexToGuess = getRandomNumber(0, 9);
  for (let i = 0; i < 10; i += 1) {
    numStart += step;
    row.push(numStart);
  }
  const correctAnswer = row[indexToGuess];
  row[indexToGuess] = '..';
  return [row.join(' '), correctAnswer];
};
