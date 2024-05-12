// IMPORTS
import readlineSync from 'readline-sync';
import random from '../src/randomInt';
// GREETINGS
console.log(`Welcome to the Brain Games!`);
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

