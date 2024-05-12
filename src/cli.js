import readlineSync from 'readline-sync';
export const prompt = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
};