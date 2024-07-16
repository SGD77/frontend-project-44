import game from '../index.js';
import getRow from '../getRow.js';

const condition = 'What number is missing in the progression?';

const generateRound = () => getRow();

export default () => {
  game(condition, generateRound);
};
